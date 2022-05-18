import { Box } from '@mui/material';



const Page = ({ children }) => (
    <Box width={'100vw'} height={'100vh'} padding={'32px'} boxSizing={'border-box'}>
        {children}
    </Box>
);

export default Page;
