import { Box, Flex, Image, Text, SimpleGrid, Tooltip, Icon, Link } from '@chakra-ui/react';
import { RiArrowLeftLine, RiInformationLine } from 'react-icons/ri';
import { Header } from '../../components/Header';

export default function Asia() {
	return (
		<Box>
			<Flex>
				<Link href="/" textDecoration="none">
					<Icon justify="left" mt={[5, 10]} mx={[2, 5]} w={[5, 8]} h={[5, 8]}>
						<RiArrowLeftLine />
					</Icon>
				</Link>
				<Header />

			</Flex>

			<Flex 
				w="100%"
				maxW={1440}
				mx="auto"
				flexDir="column"
			>
				<Flex
					justifyContent="center"
					alignItems="center"
					w="100%"
					h={[150, 300, 500]}
				>
					<Image 
						src="../../assets/asia/japaobanner.jpeg" 
						alt="asia" 
						w="100%" 
						h={[150, 300, 500]}
						objectFit="cover"
						mx="auto"
						position="absolute" 
					/>
					<Text fontSize="4xl" color="white" fontWeight="bold" position="absolute">Ásia</Text>
				</Flex>

				<Flex flexDir={['column', 'column', 'column', 'row']} justify={{ sm: "center", md: "center", lg: "space-between"  }} maxW={1440} mx="auto">
					<Box maxWidth={600} p={["1", "4", "6"]} mx="auto">
						<Text color="gray.600" my="5">
							here are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form,
							by injected humour,
							or randomised words which don't look even slightly believable.
							If you are going to use a passage of Lorem Ipsum,
							you need to be sure there isn't anything embarrassing hidden in the middle of text.
							All the Lorem Ipsum generators on the Internet
							tend to repeat predefined chunks as necessary,
							making this the first true generator on the Internet.
							It uses a dictionary of over 200 Latin words,
							combined with a handful of model sentence structures,
							to generate Lorem Ipsum which looks reasonable.
							The generated Lorem Ipsum is therefore always free from repetition,
							injected humour, or non-characteristic words etc.
						</Text>
					</Box>
					<Flex maxWidth={600} p={["1", "4", "6"]} justify="center">
						<Box mx={[3, 5, 7]} align="center">
							<Text color="orange.400" fontSize="4xl" fontWeight="bold">50</Text>
							<Text color="gray.600" fontWeight="bold">países</Text>
						</Box>
						<Box mx={[3, 5, 7]} align="center">
							<Text color="orange.400" fontSize="4xl" fontWeight="bold">60</Text>
							<Text color="gray.600" fontWeight="bold">línguas</Text>
						</Box>
						<Box mx={[3, 5, 7]} align="center">
							<Text color="orange.400" fontSize="4xl" fontWeight="bold">27</Text>
							<Text color="gray.600" fontWeight="bold">
								cidades +100
								<Tooltip label="27 cidades" aria-label="A tooltip">
									<Icon h="6" w="6" mx="1" mt="1"><RiInformationLine /></Icon>
								</Tooltip>
							</Text>
						</Box>
					</Flex>
				</Flex>

				<Text ml="10" color="gray.600" fontSize="3xl" fontWeight="bold" p={["4", "6"]}>
					Cidades +100
				</Text>

				<SimpleGrid columns={[1, 2, 3, 4 ]} spacing="12" px="10" w="100%">
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/asia/japao.jpeg" alt="Osaka" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Osaka</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Japão</Text>
							<Image 
								src="https://www.br.emb-japan.go.jp/cultura/bandeira.jpg" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/asia/china.jpeg" alt="Mutianyu Great Wall" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Mutianyu Great Wall</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">China</Text>
							<Image 
								src="https://www.estudopratico.com.br/wp-content/uploads/2016/02/bandeira-china-1-1200x675.jpg" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/asia/india.jpeg" alt="Angra" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Angra</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Índia</Text>
							<Image 
								src="http://geo5.net/imagens/Bandeira-da-India.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/asia/tailandia.jpeg" alt="Bangkok" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Bangkok</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Tailândia</Text>
							<Image 
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/asia/indonesia.jpeg" alt="Ubud" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Ubud</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Indonésia</Text>
							<Image 
								src="http://geo5.net/imagens/bandeira-da-indonesia-2000px.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
				</SimpleGrid>
			</Flex>
		</Box>
	);
}