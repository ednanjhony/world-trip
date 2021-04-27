import { Box, Flex, Image, Text, SimpleGrid, Tooltip, Icon, Link } from '@chakra-ui/react';
import { RiArrowLeftLine, RiInformationLine } from 'react-icons/ri';
import { Header } from '../../components/Header';

export default function NorthAmerica() {
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
						src="../../assets/northAmerica/nybanner.jpeg" 
						alt="america do norte" 
						w="100%" 
						h={[150, 300, 500]}
						objectFit="cover"
						mx="auto"
						position="absolute" 
					/>
					<Text fontSize="4xl" color="white" fontWeight="bold" position="absolute">América do Norte</Text>
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
						<Image src="../../../assets/northAmerica/ny.jpeg" alt="New York" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">New York</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">EUA</Text>
							<Image 
								src="http://geo5.net/imagens/Bandeira-dos-Estados-Unidos-2000px.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/northAmerica/bahamas.jpeg" alt="CocoCay" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">CocoCay</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Bahamas</Text>
							<Image 
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAArlBMVEUAq8kAAAD64EIttdAAp9D/5Dv74kIAsdAArMr/50QAr87/6UX/5kQAcoYAnroAor4ASldqXxwAQ08AlrAnbHktvNcAMzwAjKUAaXsAExYAGBwAU2EAJCoAgJcAWGcALjYAYXMAOUMAhJwAd4wAsNTMtzaXiChZUBfz2kASEASnlSwpJArdxjqwnS54bCAzLg3nzz27pzGdjClgVhkaFwYgHQiEdyNPRRI+NxCYghd5dEshAAAEIUlEQVR4nO2diVYTQRREU6DsakBAJRoWFQURccf//zEdZEmmOknPPv1e3S9I7pmazKt09wx295bFNAPsP9sYiCkAvFjt+kP0jH9O8HJ1reuP0SsyJ9hRfia5cYJXz5WfB3DLE+XnnjsnGA6Un1vuneBA+bkFE7xVfm6YdILRhqQMck7w+qnyk3cCvJEUcoKx8kNOcOj+oZadACfO8xNygiPfP8pBJzh2nZ+wE9+lyiwnnkuVmU6w43YonO3E71A4x4nbUmWuEwzXPEqZ7wQHHofCBU6yodDdpbLQCUbu8rPYib9SJcKJu/xEOXFWqsQ5wf5TRw+1kU5clSrRThwNhfFOcOxlKCzgxE2pUsiJk6GwmBMfpUpBJy5WqhR14iE/xZ1gODAupYQT80NhGSfWh8JyTjC2XKqUdIJDw0NhWSfZUGj1UinvBEdWS5UKTsxuX6jixOpQWM2JzVKlohOTpUpVJ4C9obC6E3tDYQ1OzJUqdTixtlKlFifGti/U5AQjQ6VKXU4slSq1OTG0faFGJxgbuanU6cTK9oVanQAn7x4lT91OcLq5tZI4tTvB749bS2lTvxPg/WbX36oaTTjB6fpK19+rCo04wYek89OME5xdJJyfhpwA5+tdf7XSNOYE20up5qc5J/h0keil0qAT4HOaN5VGneByJcUf5Wad4MtVgjeVhp0AX9PLT+NOcLmVWn6ad4Lr1B5qW3CS3FDYihOcJpWfdpykVaq05ARnCeWnLSfAt2RKlfac4Hsq+WnRCX4kMhS26QQ4T+Km0q4TbKcwFLbsBD+v+p+ftp2kUKq076T/pUoHTnDd81KlCyd9L1W6cYJffY5PR05w2eP46DphdD9h9LvD6PmE0XMso3mH0VzMqD9h1LMx6mMZ9faM/t9h9D8go/+LGa0rYLT+hNE6JUbr2Rite2S0PpbROmpG6+0Z7ctgtH+H0T4vRvsBGe0bZbS/mNE+dKZ2J382H6eOzrVgdP5JgDqV6JwcQucp5dG5W4TOZyN0jl8enfdI6FxQQufHErZyk1HViM6jJo6s5SajmhKdb59H70Eg9L4MQu9VyaP37xB6TxOh93nlMVSVBCmhRO8HJMyNfERRI3rfKGGtKglSTInJV1URhZTYHPmIAkYsViVBlBsmWsmJj9xkRBrZNzzyEXFKxlarkiBRSmyPfESEEesjH7FYychyVRJEuWEWGDnwlpuM+UqG7nKTMVeJ/aokyLzcOKhKgsxW4qIqCTJTiZ+Rj5ilxElVEiRs5Njov+NxBJWYXFUST0iJo6okCBsxspGgAqTEV1USJK/EzEaCCkwbcVeVBJlSMlJuMiaVmNpIUIEHI25HPuJeydDtyEfcKXFalQT5b8TDqpJ4bpTsuH90nSJT4rgqCQLfVUkQsxsJKrC7tyym+Qsi2bQVPUzJ/gAAAABJRU5ErkJggg==" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/northAmerica/mexico.jpeg" alt="Chichén Itzá" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Chichén Itzá</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Mexico</Text>
							<Image 
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/280px-Flag_of_Mexico.svg.png" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/northAmerica/toronto.jpeg" alt="Toronto" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Toronto</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Canadá</Text>
							<Image 
								src="https://static.todamateria.com.br/upload/ca/na/canadabandeirabb.jpg" 
								w="8"
								h="8"
								borderRadius="50%"
								mx="5"
							/>
						</Flex>
					</Box>
					<Box w="200" h="250" mx="auto" my="10">
						<Image src="../../../assets/northAmerica/panama.jpeg" alt="Panama City" w="100%" h="173" />
						<Text color="gray.800" fontWeight="bold" m="3">Panama City</Text>
						<Flex justify="space-between">
							<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Panamá</Text>
							<Image 
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/300px-Flag_of_Panama.svg.png" 
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