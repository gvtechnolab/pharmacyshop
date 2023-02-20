import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCarouselItem = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 250, margin: '5px' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={item?.img}
                title="productname"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ textTransform: 'capitalize' }}>
                    {item?.name?.replaceAll('_', ' ')}
                </Typography>
                <Typography variant="body3" color="text.secondary" sx={{ marginRight: '5px' }}>
                    ₹{item?.price}
                </Typography>
                <Typography variant="body2" color="lightgray" sx={{ display: 'inline-block', textDecoration: 'line-through' }}>
                    ₹{item?.originalPrice}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='outlined' size="small">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCarouselItem
