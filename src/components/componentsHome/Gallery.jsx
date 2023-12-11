import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://cdn.pixabay.com/photo/2017/09/08/23/54/bus-2730653_1280.jpg'
        },
        {
            alt: 'image2',
            url: 'https://i0.wp.com/www.autotransporte.mx/wp-content/uploads/2021/08/21C0365_002.jpg?resize=770%2C430&ssl=1'
        },
        {
            alt: "image3",
            url: 'https://i0.wp.com/www.autotransporte.mx/wp-content/uploads/2022/10/p-bus-eot-lionsintercityle-city-2022-08.jpg?resize=770%2C430&ssl=1'
        },
        {
            alt: "image4",
            url: 'https://wp.tyt.com.mx/wp-content/uploads/2023/03/MAN-Jefe-de-Autobus-1024x597.jpg'
        },
        {
            alt: "image5",
            url: 'https://www.nexotrans.com/fotos/1/22DT087_002_FUSO_product_lineup_thumb_690.jpg'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Atencion respetuosa y amble'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Compromiso estado del vehiculo.
                </Typography>
                <Paragraph text={
                    'Gran parque automotor,\
                    Revision periodica\
                    y los mas importante empresa responsable con sus usuarios'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery