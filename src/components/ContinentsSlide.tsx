import { Link, Text, Image, Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation';
import 'swiper/components/pagination';

SwiperCore.use([Navigation, Pagination])

export function ContinentsSlide() {
	return (
		<Swiper
			navigation
			pagination={{ clickable: true }}
		>
			<SwiperSlide>
				<Box w="100%" h={368} position="relative" display="inline-block">
					<Link href="/continents/northAmerica">
						<Image src="../../assets/northAmerica/nybanner.jpeg" alt="North America" position="absolute" w="100%" h={368} objectFit="cover" />
						<Text 
							color="orange.400" 
							fontWeight="bold" 
							fontSize="4xl" 
							position="absolute" 
							top="150" 
							left="350"
						>
							America do Norte
						</Text>
						<Text 
							color="orange.400" 
							fontWeight="bold" 
							fontSize="2xl" 
							position="absolute" 
							top="200" 
							left="360"
						>
							O continente de riquezas 
						</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={368} position="relative" display="inline-block">
					<Link href="/continents/africa">
						<Image src="../../assets/africa/africaDoSulBanner.jpeg" alt="Africa" position="absolute"  w="100%" h={368} objectFit="cover" />
						<Text 
								color="orange.400" 
								fontWeight="bold" 
								fontSize="4xl" 
								position="absolute" 
								top="150" 
								left="450"
							>
								Africa
							</Text>
							<Text 
								color="orange.400" 
								fontWeight="bold" 
								fontSize="2xl" 
								position="absolute" 
								top="200" 
								left="360"
							>
								O continente da natureza
							</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={368} position="relative" display="inline-block">
					<Link href="/continents/europa">
						<Image src="../../assets/europa.jpg" alt="Europa" w="100%" h={368} objectFit="cover" />
						<Text 
							color="orange.400" 
							fontWeight="bold" 
							fontSize="4xl" 
							position="absolute" 
							top="150" 
							left="430"
						>
							Europa
						</Text>
						<Text 
							color="orange.400" 
							fontWeight="bold" 
							fontSize="2xl" 
							position="absolute" 
							top="200" 
							left="360"
						>
							O continente mais antigo 
						</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={368} position="relative" display="inline-block">
					<Link href="/continents/asia">
						<Image src="../../assets/asia/japaobanner.jpeg" alt="Asia" w="100%" h={368} objectFit="cover" />
						<Text 
								color="orange.400" 
								fontWeight="bold" 
								fontSize="4xl" 
								position="absolute" 
								top="150" 
								left="470"
							>
								Ásia
							</Text>
							<Text 
								color="orange.400" 
								fontWeight="bold" 
								fontSize="2xl" 
								position="absolute" 
								top="200" 
								left="360"
							>
								O continente mais populoso.
							</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={368} position="relative" display="inline-block">
					<Link href="/continents/oceania">
						<Image src="../../assets/oceania/banner.jpeg" alt="Oceania" w="100%" h={368} objectFit="cover" />
						<Text 
								color="orange.400" 
								fontWeight="bold" 
								fontSize="4xl" 
								position="absolute" 
								top="150" 
								left="430"
							>
								Oceania
							</Text>
							<Text 
								color="orange.400" 
								fontWeight="bold" 
								fontSize="2xl" 
								position="absolute" 
								top="200" 
								left="360"
							>
								O continente mais isolado
							</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={368} position="relative" display="inline-block">
					<Link href="/continents/southAmerica">
						<Image src="../../assets/southAmerica/brasilbanner.jpeg" alt="South America" w="100%" h={368} objectFit="cover" />
						<Text 
									color="orange.400" 
									fontWeight="bold" 
									fontSize="4xl" 
									position="absolute" 
									top="150" 
									left="395"
								>
									America do Sul
								</Text>
								<Text 
									color="orange.400" 
									fontWeight="bold" 
									fontSize="2xl" 
									position="absolute" 
									top="200" 
									left="360"
								>
									O continente cheio de culturas
								</Text>
						</Link>
				</Box>
			</SwiperSlide>
		</Swiper>
	);
}