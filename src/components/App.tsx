import React, { useEffect } from 'react';
import { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setImageData, reset, setApprovedImages, toggleLoading, setRejectedImages, setError } from '../slice/appImageSlice';
import { Typography, Box, Divider, Paper, Card, CardHeader, CardContent } from '@mui/material';
import { Add, Done, Close } from '@mui/icons-material';
import ImageGallery from './ImageGallery';
import { Skeleton } from '@mui/material';
import { Wrapper, StyledTypography, AddPhotoButton, AddPhotoBox, HelpTextButton, ActionButtons, ErrorText } from '../utils/StyledComponent';
import { LABELS, URL } from '../utils/Constants';


function App() {
  const { urls: { small, thumb }, alt, approvedImages, id, error, loading } = useSelector((state: RootState) => state.appImages);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(reset())
    }
  }, [dispatch])

  /**
   * Author : Harsha Peddula ,Date: 06-01-2022
   * Function which fetches a random image from 
   * unsplash api,
   * Triggered when clicked on any of 
   * Fetch new photo button (+ button)
   * Approve and cancel
   * Dispatches the images Data to the store if no error
   * otherwise dispatches the error
   */
  const fetchRandomImage = () => {
    dispatch(toggleLoading())
    fetch(URL, {
      headers: {
        'Authorization': process.env.REACT_APP_ACCESS_KEY as string
      }
    })
      .then(response => response.json())
      .then(imagesData => {
        const { urls, id, alt_description } = imagesData;
        if (urls) {
          dispatch(setImageData({ id, urls, alt: alt_description }))
        } else {
          const { errors } = imagesData;
          const [error] = errors;
          dispatch(setError({ error }))
        }
      })
      .catch(err => {
        dispatch(setError({ error:err?.message }))
      })
  }
  /**
   * Author : Harsha Peddula ,Date: 06-01-2022
   * @returns JSX Component of Add Button Icon which is inserted in between the helptext
   */
  const renderAddButton = () => <HelpTextButton disabled ><Add fontSize='large' /></HelpTextButton>

  return (
    <div>
      <Wrapper display={'flex'} justifyContent={'center'}>
        <Paper elevation={6}>
            <Card sx={{ width: 600 }}>
            {loading ? <Skeleton data-testid='loader' height={'100vh'} width={600}  animation="wave" /> :
              <>
              <CardHeader
                title={<StyledTypography variant='h4'>
                  {LABELS.TITLE}
                </StyledTypography>}
              />
              <Divider orientation={'horizontal'} />
              <CardContent>
                {error && <Box display="flex" justifyContent={'center'} p={2}><ErrorText variant={'body2'}>{error}</ErrorText></Box>}
                <StyledTypography variant={'h6'}>
                  {LABELS.APPROVED} ( {approvedImages?.length} )
                </StyledTypography>
                {(approvedImages && approvedImages?.length > 0) && <ImageGallery />}
                <>
                  <AddPhotoButton data-testid='fetchRandomImageButton' onClick={fetchRandomImage} size={'large'}><Add /></AddPhotoButton>
                  <Paper elevation={6}>
                    <AddPhotoBox onClick={fetchRandomImage} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                      {small ?
                        <img
                          key={'randomImage'} height={400} width={400} alt={alt || "randomImage"} src={small as string} />
                        :
                        <Add onClick={fetchRandomImage} fontSize='large' />}
                    </AddPhotoBox>
                  </Paper>
                  {!small ?
                    <Box display={'flex'} justifyContent={'center'} p={2}>
                      <Typography variant='h6'>
                        {LABELS.HELPTEXT(renderAddButton).map((x, i: number) => <span key={i}>{x}</span>)}
                      </Typography>
                    </Box>
                    :
                    <Box display={'flex'} justifyContent={'space-evenly'} p={2}>
                      <ActionButtons data-testid='cancel' color='inherit' variant='contained' onClick={() => {
                        dispatch(setRejectedImages({ id }))
                        fetchRandomImage();
                      }}><Close /></ActionButtons>
                      <ActionButtons data-testid='approve' color='primary' variant='contained' onClick={() => {
                        dispatch(setApprovedImages({ url: thumb }));
                        fetchRandomImage();
                      }}>
                        <Done />
                      </ActionButtons>
                    </Box>
                  }
                </>
              </CardContent>
              </>}
            </Card>
        </Paper>
      </Wrapper>
    </div>
  );
}

export default App;
