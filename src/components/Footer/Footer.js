import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import {
  Box,
  Paper,
  Grid,
  List,
  Divider,
  Container
  // Link
} from '@mui/material';
import FooterLink from './FooterLink';
import SiteLogo from '../SiteLogo/SiteLogo.js'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#4c4c4c',
  boxShadow: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

const Menus = styled(Paper)(({ theme }) => ({
  background: 'transparent',
  padding: '5px',
  margin: '5px',
  boxShadow: 'none',
  color: '#4c4c4c',
  fontWeight: '600',
  fontSize: '16px',
  cursor: 'default'
}))

export default function Footer() {
  return (
    <Box sx={{
      flexGrow: 1,
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: '#dbebe1',
      // backgroundColor: '#198754',
      width: '100%',
      // position: 'fixed',
      bottom: 0,
      boxShadow: 'inset 0px 0px 5px white'
    }}
    >
      <Container>
        <Grid container spacing={2} justifyContent='space-between' sx={{
          marginY: '15px'
        }}>
          <Grid item >
            {/* <Item> */}
            {/* <Box
                component="img"
                sx={{
                  height: 35,
                  width: 35,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="PharmacyShop"
                src="/assets/images/pharmacyshoplogo96.png"
              />PharmacyShop */}
            <SiteLogo name="PharmacyShop" />
            {/* </Item> */}
          </Grid>
          <Grid item sx={{ fontFamily: 'Dancing Script', fontSize:'18px' }}>
            <span>We does not just sell medicines but trust too.</span>
          </Grid>
        </Grid>
        <Divider />
        <Grid container sx={{
          // margin: 'auto',
          // display: 'flex',
          // flexWrap: 'wrap',
          // justifyContent: 'space-evenly',
          marginY: '15px'
        }}>
          <Grid item xs={12} sm={6} md={2.4}>
            <Menus>
              Company
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  // bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 300,
                  '& ul': { padding: 0 },
                  fontSize: '12px',
                }}
                subheader={<li />}
              >
                <FooterLink href="/">PharmacyShop</FooterLink>
                <FooterLink href="/login">My Account</FooterLink>
                <FooterLink href="/faq">Terms & Conditions</FooterLink>
                <FooterLink href="/faq">Privacy Policy</FooterLink>
                <FooterLink href="/faq">FAQs</FooterLink>
              </List>
            </Menus>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Menus>
              Services
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  // bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 300,
                  '& ul': { padding: 0 },
                  fontSize: '12px'
                }}
                subheader={<li />}
              >
                <FooterLink href="#">Appointments</FooterLink>
                <FooterLink href="#">Clinics</FooterLink>
                <FooterLink href="#">Specialists</FooterLink>
              </List>
            </Menus>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Menus>
              Categories
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  // bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 300,
                  '& ul': { padding: 0 },
                  fontSize: '12px'
                }}
                subheader={<li />}
              >
                <FooterLink href="/medicines">Medicines</FooterLink>
                <FooterLink href="/healthcare">Healthcare Devices</FooterLink>
              </List>
            </Menus>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Menus>
              Quick Links
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  // bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 300,
                  '& ul': { padding: 0 },
                  fontSize: '12px'
                }}
                subheader={<li />}
              >
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </List>
            </Menus>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Menus>
              Social
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  // bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 300,
                  '& ul': { padding: 0 },
                  fontSize: '12px'
                }}
                subheader={<li />}
              >
                <FooterLink href="https://facebook.com/gvpharmacyshop/" target="_blank">Facebook</FooterLink>
                <FooterLink href="https://instagram.com/gvpharmacyshop/" target="_blank">Instagram</FooterLink>
                <FooterLink href="https://twitter.com/gvpharmacyshop/" target="_blank">Twitter</FooterLink>
                <FooterLink href="https://linkedin.com/gvpharmacyshop/" target="_blank">LinkedIn</FooterLink>
              </List>
            </Menus>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2} justifyContent='space-between' sx={{
          marginY: '15px'
        }}>
          <Grid item>
            {/* <Item> */}
            <small>Copyrights © 2023 PharmacyShop. All rights reserved.</small>
            {/* </Item> */}
          </Grid>
          <Grid item>
            <Box
              component="img"
              sx={{
                height: 35,
                width: 35,
                margin: '5px',
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="visa"
              src="/assets/svgs/visa.svg"
            />
            <Box
              component="img"
              sx={{
                height: 35,
                width: 35,
                margin: '5px',
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="mastercard"
              src="/assets/svgs/mastercard.svg"
            />
            <Box
              component="img"
              sx={{
                height: 35,
                width: 35,
                margin: '5px',
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="paypal"
              src="/assets/svgs/paypal.svg"
            />
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}