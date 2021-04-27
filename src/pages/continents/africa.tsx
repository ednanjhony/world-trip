import { Box, Flex, Image, Text, SimpleGrid, Tooltip, Icon, Link } from '@chakra-ui/react';
import { RiInformationLine, RiArrowLeftLine } from 'react-icons/ri';
import { Header } from '../../components/Header';

export default function Africa() {
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
						src="../../assets/africa/africaDoSulBanner.jpeg" 
						alt="africa" 
						w="100%" 
						h={[150, 300, 500]}
						objectFit="cover"
						mx="auto"
						position="absolute" 
					/>
					<Text fontSize="4xl" color="white" fontWeight="bold" position="absolute">Africa</Text>
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
						<Image src="../../../assets/africa/africaDoSul.jpeg" alt="Pretoria" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Pretoria</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Africa do Sul</Text>
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
						<Image src="../../../assets/africa/nigeria.jpeg" alt="Enugu" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Enugu</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Nigéria</Text>
							<Image 
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/255px-Flag_of_Nigeria.svg.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/africa/africaDoSul.jpeg" alt="Pretoria" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Pretoria</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Africa do Sul</Text>
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
						<Image src="../../../assets/africa/africaDoSul.jpeg" alt="Pretoria" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Pretoria</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Africa do Sul</Text>
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
						<Image src="../../../assets/africa/africaDoSul.jpeg" alt="Pretoria" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Pretoria</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Africa do Sul</Text>
							<Image 
								src="data:image/png;base64,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" 
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