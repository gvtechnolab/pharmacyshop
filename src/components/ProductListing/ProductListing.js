import React, { useState, useEffect } from 'react'
import {
    Paper,
    Container,
    Grid,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Slider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProductFilterOptions, Products } from '../../utills/globalData'
import ProductCarouselItem from '../ProductCarousel/ProductCarouselItem'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
}));

const ProductListing = ({ category }) => {
    const [CategorizedData, SetCategorizedData] = useState([]);
    const [value, setValue] = React.useState([20, 37]);
    useEffect(() => {
        let data = Products?.filter((item) => item?.category === category);
        SetCategorizedData(data);
    }, []);

    const handlePriceChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container sx={{ marginY: '14px' }}>
            <Grid container spacing={2}>
                <Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Item>
                        Filter
                        {ProductFilterOptions?.map((item, index) => (
                            <Accordion sx={{ boxShadow: 'none', border: 'none' }} className='ProductListingFilterItem'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{ padding: '0' }}
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {item?.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: '0', textTransform: 'capitalize' }}>
                                    <Typography>
                                        {item?.options?.length > 0 && (
                                            <FormGroup>
                                                {item?.options?.map((op, i) => (
                                                    <FormControlLabel key={i} control={<Checkbox color="success" size='small' />} label={op} />
                                                ))}
                                            </FormGroup>
                                        )}
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            value={value}
                                            onChange={handlePriceChange}
                                            valueLabelDisplay="auto"
                                            // getAriaValueText={valuetext}
                                            color='success'
                                        />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <Paper elevation={0}>{CategorizedData?.length} Products</Paper>
                    <Item sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {CategorizedData?.map((item, index) => (
                            <ProductCarouselItem item={item} key={index} />
                        ))}
                    </Item>
                </Grid>
            </Grid>


        </Container>
    )
}

export default ProductListing
