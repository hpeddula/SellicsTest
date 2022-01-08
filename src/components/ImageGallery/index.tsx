import React, { useRef, useState ,useEffect} from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { Grid, Box } from '@mui/material';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { onScroll } from '../../utils/scroll';
import { StyledDone, GalleryImage,SliderButton } from '../../utils/StyledComponent';


function ImageGallery() {
    const gridRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const { approvedImages } = useSelector((state: RootState) => state.appImages);
    const [leftButtonDisabled, setLeftButtonDisabled] = useState<boolean>(true);
    const [rightButtonDisabled, setRightButtonDisabled] = useState<boolean>(false);

    /**
     * When New image is added scroll to right to show 
     * the new image
     */
    useEffect(() => {
        gridRef && onScroll(gridRef, 'right')
        return () => {  
        }
    }, [approvedImages])

    /**
     * Author : Harsha Peddula ,Date: 07-01-2022
     * Function Which sets the local state of the component
     * which disables the left and the right navigation buttons 
     * of the grid
     * For Left Button the scrollLeft is checked if it is 0
     * For Right Button the difference between scrollWidth and offsetWidht is
     * checked for equality with scrollLeft
     */
    const setDisableStatusForLeftRightButtons = () => {
        setRightButtonDisabled(((gridRef?.current?.scrollWidth || 0) - (gridRef?.current?.offsetWidth || 0)) === gridRef?.current?.scrollLeft)
        setLeftButtonDisabled(gridRef?.current?.scrollLeft === 0)
    }
    /**
     * Author : Harsha Peddula ,Date: 06-01-2022
     * Calls the onScroll uitility with the reference to the grid
     * and the navigation direction
     * @param direction 
     */
    const onButtonClick = (direction: 'left' | 'right') => {
        setDisableStatusForLeftRightButtons();
        gridRef && onScroll(gridRef, direction)
    }
    return (
        <Box display="flex" alignItems={'center'}>
            <SliderButton data-testid="leftButton" justifycontent="flex-start" color='primary' disabled={leftButtonDisabled} onClick={() => onButtonClick('left')}>
                <ChevronLeftRounded fontSize='large' />
            </SliderButton>
            <Grid ref={gridRef} container spacing={2} padding={0} wrap={'nowrap'} overflow={'hidden'} onScroll={setDisableStatusForLeftRightButtons}>
                {approvedImages?.map((src: string, index: number) => (
                    <Grid item key={index}>
                        <StyledDone />
                        <GalleryImage data-testid={`approvedImage${index}`} ref={imageRef} src={src} height={100} width={100} key={index} />
                    </Grid>
                ))}
            </Grid>
            <SliderButton data-testid="rightButton" justifycontent="flex-end" color='primary' disabled={rightButtonDisabled} onClick={() => onButtonClick('right')}>
                <ChevronRightRounded fontSize='large' />
            </SliderButton>
        </Box>
    )
}

export default ImageGallery
