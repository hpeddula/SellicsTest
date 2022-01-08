import styled from 'styled-components';
import { Button, Box, Divider, IconButton, Typography ,ButtonProps} from '@mui/material';
import { Done } from '@mui/icons-material';

type StyledSliderButton = ButtonProps & {
    justifycontent:'flex-start' | 'flex-end';
}
export const SliderButton = styled(Button)`
    &&&{
        justify-content:${(props:StyledSliderButton) => props.justifycontent};
    }
`as React.ComponentType<StyledSliderButton>

export const StyledDone = styled(Done)`
    &&&&{
        position:relative;
        top: 28px;
        left: 4px;
        color:white;
    }
`;

export const GalleryImage = styled.img`
    {
        border-radius:16px;
    }
`;

export const Wrapper = styled(Box)`
    {
        background:#3765DE;
        padding:2em;
    }
`;

export const TitleBox = styled(Box)`
    {
        padding:2em;
    }
`;

export const StyledTypography = styled(Typography)`
    {
        color:blue;
    }
`;
export const AddPhotoDivider = styled(Divider)`
    {
        color:blue;
    }
`;

export const AddPhotoBox = styled(Box)`
    {
        height:26em;
        background-color:#F0F2F7;
        padding:1em;
        cursor:pointer;
    }
`;

export const HelpTextButton = styled(IconButton)`
    &&&{
        margin-bottom:10px;
        padding:0;
    }
`;

export const AddPhotoButton = styled(IconButton)`
    &&&{
        border-radius:10%;
        background-color:#F0F2F7;
        margin:14px 0;
        cursor:pointer;
    }
`;


export const ActionButtons = styled(Button)`
    &&&{
        border-radius:16px;
        width:30%;
    }
`;

export const ErrorText= styled(Typography)`
    &&&{
        color:red;
    }
`;