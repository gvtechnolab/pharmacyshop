import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
  boxShadow: 'none'
}));

const Menus = styled(Paper)(({ theme }) => ({
  background: 'transparent',
  padding: '5px',
  margin: '5px',
  width: '33.33%',
  boxShadow: 'none',
  color: 'white'
}))

export default function Footer() {
  return (
    <Box sx={{
      flexGrow: 1,
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: '#198754',
      color: 'white',
      width: '100%',
      // position: 'fixed',
      bottom: 0,
      boxShadow: 'inset 0px 1px 2px white'
    }}
    >
      <Grid container spacing={2} sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 'auto'
      }}>
        <Grid xs={3}>
          <Item>
            Logo
            <p>site info</p>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Menus>PharmacyShop</Menus>
            <Menus>Services</Menus>
            <Menus>Quick Links</Menus>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}