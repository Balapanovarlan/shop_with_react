import { Grid2, Paper, Typography } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './ProductDetailsUI.module.css'

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper/modules'

const ProductDetailsUI = ({product}) => {

    return (
        <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
            {product.title}
        </Typography>
        <Typography variant="body1" fontSize={16} gutterBottom>
            {product.description}
        </Typography>
        <Typography variant="h5" fontWeight={600}  gutterBottom>
            Price: ${product.price}
        </Typography>

        <Grid2 container spacing={3} sx={{ mt: 3 }}>
            {/* Слайдер слева */}
            <Grid2 size={{ xs: 12, md: 5 }}>
                {product.images && product.images.length > 0 && (
                    <Swiper
                        className={styles.swiper}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                            type: 'bullets',
                        }}
                    >
                        {product.images.map((item, index) => (
                            <SwiperSlide key={index} className={styles.slide}>
                                <img src={item} alt={product.title} className={styles.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </Grid2>

            {/* Информация о продукте справа */}
            <Grid2 size={{ xs: 12, md: 7 }} >
                <Typography variant="body2" fontSize={16}><strong>Stock:</strong> {product.stock}</Typography>
                <Typography variant="body2" fontSize={16}><strong>Availability:</strong> {product.availabilityStatus}</Typography>
                <Typography variant="body2" fontSize={16}><strong>Warranty Info:</strong> {product.warrantyInformation}</Typography>
                <Typography variant="body2" fontSize={16}><strong>Shipping Info:</strong> {product.shippingInformation}</Typography>
            </Grid2>
        </Grid2>
    </Paper>
    )
}

export default ProductDetailsUI