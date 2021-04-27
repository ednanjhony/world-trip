import { Box, Flex, Image, Text, SimpleGrid, Tooltip, Icon, Link } from '@chakra-ui/react';
import { RiArrowLeftLine, RiInformationLine } from 'react-icons/ri';
import { Header } from '../../components/Header';

export default function SouthAmerica() {
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
						src="../../assets/southAmerica/brasilbanner.jpeg" 
						alt="america do sul" 
						w="100%" 
						h={[150, 300, 500]}
						objectFit="cover"
						mx="auto"
						position="absolute" 
					/>
					<Text fontSize="4xl" color="white" fontWeight="bold" position="absolute">América do Sul</Text>
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
						<Image src="../../../assets/southAmerica/brasil.jpeg" alt="Rio de Janeiro" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Rio de Janeiro</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Brasil</Text>
							<Image 
								src="data:image/png;base64,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" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/southAmerica/chile.jpeg" alt="Santiago" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Santiago</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Chile</Text>
							<Image 
								src="https://static.todamateria.com.br/upload/ba/nd/bandeira-do-chile-og.jpg" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/southAmerica/argentina.jpeg" alt="Buenos Aires" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Buenos Aires</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Argentina</Text>
							<Image 
								src="https://static.todamateria.com.br/upload/ba/nd/bandeira_argentina_bb.jpg" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/southAmerica/colombia.jpeg" alt="Bolivar" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Bolivar</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Colombia</Text>
							<Image 
								src="https://www.estudopratico.com.br/wp-content/uploads/2016/03/bandeira-colombia-1200x675.jpg" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/southAmerica/peru.jpeg" alt="Cercado de Lima" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Cercado de Lima</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Peru</Text>
							<Image 
								src="https://a-static.mlcdn.com.br/1500x1500/bandeira-do-peru-15x22cm-banderminas/wgilbandeiras/154/c43d775bb1dfd4ab1acd9e9f7f59b8a2.jpg" 
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