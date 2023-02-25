import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './ProductCarousel.module.css'

const ProductCarouselItem = ({ item }) => {
    return (
        <Card sx={{
            maxWidth: 250,
            margin: '10px 5px',
            height: '320px',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: 'none',
            // border:'1px solid rgba(25, 135, 84, 0.2)'
        }}
        className={styles.ProductCarouselCard}
        >
            <CardMedia
                sx={{ height: 140, borderRadius: '8px' }}
                image={item?.img}
                title="Click To View"
            />
            <CardContent>
                <Typography gutterBottom variant="span" component="div" sx={{ textTransform: 'capitalize' }}>
                    {`${item?.name?.replaceAll('_', ' ').slice(0, 30)} ...`}
                </Typography>
                <Typography variant="body3" color="text.secondary" sx={{ marginRight: '5px' }}>
                    ₹{item?.price}
                </Typography>
                <Typography variant="body2" color="lightgray" sx={{ display: 'inline-block', textDecoration: 'line-through' }}>
                    ₹{item?.originalPrice}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='outlined' size="small" color='success'>Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCarouselItem
