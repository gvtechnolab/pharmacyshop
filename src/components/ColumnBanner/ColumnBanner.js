import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // boxShadow: 'none'
}));

export default function ColumnBanner() {
    return (
        <Box sx={{
            width: '100%',
            padding: '8px',
            marginY: '8px',
        }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ wrap: 'wrap' }}>
                <Grid xs={6}>
                    <Item>
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Live From Space
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Mac Miller
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    btn
                                </Box>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image="/static/images/cards/live-from-space.jpg"
                                alt="Live from space album cover"
                            />
                        </Card>
                    </Item>
                </Grid>
                <Grid xs={6}>
                    <Item>
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Live From Space
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Mac Miller
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    btn
                                </Box>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image="/static/images/cards/live-from-space.jpg"
                                alt="Live from space album cover"
                            />
                        </Card>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
