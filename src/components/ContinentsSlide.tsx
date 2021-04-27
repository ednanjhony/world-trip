import { Link, Text, Image, Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination , Autoplay} from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation';
import 'swiper/components/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay])

export function ContinentsSlide() {
	return (
		<Swiper
			autoplay={{ delay: 2500 }}
			navigation
			pagination={{ clickable: true, el: '.swiper-pagination' }}
		>
			<SwiperSlide>
				<Box w="100%" h={[250, 320, 368]} position="relative" display="inline-block">
					<Link href="/continents/northAmerica">
						<Image src="../../assets/northAmerica/nybanner.jpeg" alt="North America" position="absolute" w="100%" h={[250, 320, 368]} objectFit="cover" />
						<Text 
							color="white" 
							fontWeight="bold" 
							fontSize={["2xl", "3xl", "3xl"]}
							position="absolute" 
							top="45%"
							left={["22%", "33%", "34%", "36%", "38%"]}
						>
							America do Norte
						</Text>
						<Text 
							color="white" 
							fontWeight="bold" 
							fontSize={["1xl", "2xl"]}
							position="absolute" 
							top="60%" 
							left={["24%","30%", "33%", "35%", "37%"]}
						>
							O continente de riquezas 
						</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={[250, 320, 368]} position="relative" display="inline-block">
					<Link href="/continents/africa">
						<Image src="../../assets/africa/africaDoSulBanner.jpeg" alt="Africa" position="absolute"  w="100%" h={[250, 320, 368]} objectFit="cover" />
						<Text 
								color="white" 
								fontWeight="bold" 
								fontSize={["2xl", "3xl", "4xl"]} 
								position="absolute" 
								top="45%"
								left={["40%", "38%", "40%", "42%", "44%"]}
							>
								Africa
							</Text>
							<Text 
								color="white" 
								fontWeight="bold" 
								fontSize={["1xl", "2xl"]}
								position="absolute" 
								top="60%"
								left={["26%","22%", "34%", "36%", "38%"]}
							>
								O continente da natureza
							</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={[250, 320, 368]} position="relative" display="inline-block">
					<Link href="/continents/europa">
						<Image src="../../assets/europa.jpg" alt="Europa" w="100%" h={[250, 320, 368]} objectFit="cover" />
						<Text 
							color="white" 
							fontWeight="bold" 
							fontSize={["2xl", "3xl", "4xl"]}
							position="absolute" 
							top="45%"
							left={["34%", "36%", "38%", "40%", "42%"]}
						>
							Europa
						</Text>
						<Text 
							color="white" 
							fontWeight="bold" 
							fontSize={["1xl", "2xl"]}
							position="absolute" 
							top="60%" 
							left={["22%","26%", "32%", "35%", "37%"]}
						>
							O continente mais antigo 
						</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={[250, 320, 368]} position="relative" display="inline-block">
					<Link href="/continents/asia">
						<Image src="../../assets/asia/japaobanner.jpeg" alt="Asia" w="100%" h={[250, 320, 368]} objectFit="cover" />
						<Text 
								color="white" 
								fontWeight="bold" 
								fontSize={["2xl", "3xl", "4xl"]} 
								position="absolute" 
								top="45%" 
								left={["40%", "42%", "44%", "46%", "48%"]}
							>
								Ásia
							</Text>
							<Text 
								color="white" 
								fontWeight="bold" 
								fontSize={["1xl", "2xl"]}
								position="absolute" 
								top="60%" 
								left={["24%","27%", "33%", "37%", "39%"]}
							>
								O continente mais populoso.
							</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={[250, 320, 368]} position="relative" display="inline-block">
					<Link href="/continents/oceania">
						<Image src="../../assets/oceania/banner.jpeg" alt="Oceania" w="100%" h={[250, 320, 368]} objectFit="cover" />
						<Text 
								color="white" 
								fontWeight="bold" 
								fontSize={["2xl", "3xl", "4xl"]}
								position="absolute" 
								top="45%"
								left={["35%", "36%", "38%", "40%", "42%"]}
							>
								Oceania
							</Text>
							<Text 
								color="white" 
								fontWeight="bold" 
								fontSize={["1xl", "2xl"]} 
								position="absolute" 
								top="60%" 
								left={["22%","26%", "32%", "35%", "37%"]}
							>
								O continente mais isolado
							</Text>
					</Link>
				</Box>
			</SwiperSlide>
			<SwiperSlide>
				<Box w="100%" h={[250, 320, 368]} position="relative" display="inline-block">
					<Link href="/continents/southAmerica">
						<Image src="../../assets/southAmerica/brasilbanner.jpeg" alt="South America" w="100%" h={[250, 320, 368]} objectFit="cover" />
						<Text 
									color="white" 
									fontWeight="bold" 
									fontSize={["2xl", "3xl", "4xl"]}
									position="absolute" 
									top="45%" 
									left={["26%", "33%", "34%", "36%", "38%"]}
								>
									América do Sul
								</Text>
								<Text 
									color="white" 
									fontWeight="bold" 
									fontSize={["1xl", "2xl"]} 
									position="absolute" 
									top="60%" 
									left={["18%","26%", "31%", "34%", "36%"]}
								>
									O continente cheio de culturas
								</Text>
						</Link>
				</Box>
			</SwiperSlide>
		</Swiper>
	);
}