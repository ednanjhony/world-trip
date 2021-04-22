import { Box, Flex, Image, Text, SimpleGrid, Tooltip, Icon } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { RiInformationLine } from 'react-icons/ri';

export default function ContinentEuropa() {
	return (
		<Box>
			<Header />

			<Flex 
				w="100%"
				maxW={1440}
				mx="auto"
				flexDir="column"
			>
				<Image 
					src="../../assets/paris.jpg" 
					alt="europa" 
					w={1440} 
					h={500} 
					objectFit="cover"
					mx="auto" 
				/>

				<Flex flexDir="row" justify="space-between" maxW={1440}>
					<Box maxWidth={600} p={["4", "6"]} m="10">
						<Text color="gray.600">
							A Europa é, por convenção, um dos seis continentes do mundo.
							Compreendo a península acidental da Eurásiam a Europa geralmente
							dividi-se da Ásia a leste pela divisória de águas dos montes Urais,
							o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
						</Text>
					</Box>
					<Flex maxWidth={600} p={["4", "6"]}>
						<Box m="10" align="center">
							<Text color="orange.400" fontSize="4xl" fontWeight="bold">50</Text>
							<Text color="gray.600" fontWeight="bold">países</Text>
						</Box>
						<Box m="10" align="center">
							<Text color="orange.400" fontSize="4xl" fontWeight="bold">60</Text>
							<Text color="gray.600" fontWeight="bold">línguas</Text>
						</Box>
						<Box m="10" align="center">
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

				<SimpleGrid columns={[1, 3, 4 ]} spacing="10" ml="10">
					<Box h="250">
						<Image src="../../../assets/europa.jpg" alt="Amsterdã" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Amsterdã</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Holanda</Text>
					</Box>
					<Box h="279px">
						<Image src="../../../assets/europe/paris.jpeg" alt="Paris" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Paris</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">França</Text>
					</Box>
					<Box h="279px">
						<Image src="../../../assets/europe/londres.jpeg" alt="Londres" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Londres</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Reino Unido</Text>
					</Box>
					<Box h="279px">
						<Image src="../../../assets/europe/praga.jpeg" alt="Praga" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Praga</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">República Tcheca</Text>
					</Box>
					<Box h="279px">
						<Image src="../../../assets/europe/roma.jpeg" alt="Roma" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Roma</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Itália</Text>
					</Box>
				</SimpleGrid>
			</Flex>
		</Box>
	);
}