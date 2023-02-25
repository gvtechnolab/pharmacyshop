import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h5,
    padding: theme.spacing(1),
    height: '180px',
    backgroundColor: '#fff',
    backgroundImage: `url('/assets/images/emmapollard.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
}));

const InnerItem = styled(Paper)(({ theme }) => ({
    color: '#fff',
    margin: '3px',
    padding: '3px',
    background: 'transparent',
    display: 'inline-block',
    boxShadow: 'none',
    textTransform: 'uppercase'
}))

export default function ContactSection() {
    return (
        <Box sx={{ width: '100%', margin: '8px 0' }}>
            <Stack spacing={2}>
                <Item>
                    <InnerItem>You're Always Welcome To</InnerItem>
                    <InnerItem>
                        <Button variant="contained" color="success">Contact us</Button>
                    </InnerItem>
                </Item>
            </Stack>
        </Box>
    );
}