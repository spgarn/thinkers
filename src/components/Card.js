import { Card as MuiCard, CardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(() => ({
    padding: '32px',
    minHeight: '50vh'
}));

export default Card;
