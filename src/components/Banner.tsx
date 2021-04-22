import { Image, Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';

export function Banner() {
	return (
		<Image src="../../assets/Banner.png" alt="Banner" w={1440} h={368} objectFit="cover" />
	);
}