import { Box, Flex, Image, Text, SimpleGrid, Tooltip, Icon, Link, Center, VStack } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { RiArrowLeftLine, RiInformationLine } from 'react-icons/ri';

export default function ContinentEuropa() {
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
						src="../../assets/paris.jpg" 
						alt="europa" 
						w="100%" 
						h={[150, 300, 500]} 
						objectFit="cover"
						mx="auto"
						position="absolute"
					/>
					<Text fontSize="4xl" color="white" fontWeight="bold" position="absolute">Europa</Text>
				</Flex>

				<Flex flexDir={['column', 'column', 'column', 'row']} justify={{ sm: "center", md: "center", lg: "space-between"  }} maxW={1440} mx="auto">
					<Box maxWidth={600} p={["1", "4", "6"]} mx="auto">
						<Text color="gray.600" my="5">
							A Europa é, por convenção, um dos seis continentes do mundo.
							Compreendo a península acidental da Eurásiam a Europa geralmente
							dividi-se da Ásia a leste pela divisória de águas dos montes Urais,
							o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
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
					<Box w="200" h="250" mx="auto">
						<Image src="../../../assets/europa.jpg" alt="Amsterdã" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Amsterdã</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Holanda</Text>
							<Image 
								src="http://geo5.net/imagens/Bandeira-da-Holanda.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" >
						<Image src="../../../assets/europe/paris.jpeg" alt="Paris" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Paris</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">França</Text>
							<Image 
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto">
						<Image src="../../../assets/europe/londres.jpeg" alt="Londres" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Londres</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Reino Unido</Text>
							<Image 
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto">
						<Image src="../../../assets/europe/praga.jpeg" alt="Praga" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Praga</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">República Tcheca</Text>
							<Image 
								src="https://i.pinimg.com/originals/76/98/27/7698270bcaa1485a8081b14ecaddfe4e.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="350" mx="auto">
						<Image src="../../../assets/europe/roma.jpeg" alt="Roma" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Roma</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Itália</Text>
							<Image 
								src="https://i1.wp.com/viagemitalia.com/wp-content/uploads/2017/08/Bandeira-da-Italia.png?fit=1600%2C1067" 
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