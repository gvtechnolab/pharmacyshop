import React from 'react'
import Slider from "react-slick";
import CarouselItem from './HomeCarouselItem'
import { HomeCarouselData } from '../../utills/globalData'
import styles from '../HomeCarousel/HomeCarousel.module.css'

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}`}
            style={{ ...style, left: '-41px' }}
            onClick={onClick}
        >
            {'<'}
        </div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}`}
            style={{ ...style }}
            onClick={onClick}
        >
            {'>'}
        </div>
    );
}
const HomeCarousel = () => {
    const settings = {
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        // prevArrow: <SamplePrevArrow />,
        // nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings} className={styles.forCarouselArrowBtns}>
                {HomeCarouselData?.map((item, index) => (
                    <CarouselItem key={index} item={item} />
                ))}
            </Slider>
        </>
    )
}

export default HomeCarousel
