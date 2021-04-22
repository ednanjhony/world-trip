import { Box, Flex, Image, Text, SimpleGrid, Tooltip, Icon } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';
import { Header } from '../../components/Header';

export default function Oceania() {
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
					src="../../assets/oceania/banner.jpeg" 
					alt="oceania" 
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
						<Image src="../../../assets/oceania/australia.jpeg" alt="Sydney" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Sydney</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Austrália</Text>
					</Box>
					<Box h="279px">
						<Image src="../../../assets/oceania/novaZelandia.jpeg" alt="Auckland" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Auckland</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Nova Zelândia</Text>
					</Box>
					<Box h="279px">
						<Image src="../../../assets/oceania/fiji.jpeg" alt="Fiji" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Fiji</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Fiji</Text>
					</Box>
					<Box h="279px">
						<Image src="../../../assets/oceania/papua.jpeg" alt="Goroka" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Goroka</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Papua-Nova Guiné</Text>
					</Box>
					<Box h="279px">
						<Image src="../../../assets/oceania/micronesia.jpeg" alt="Weno" w="100%" h="130" />
						<Text color="gray.800" fontWeight="bold" m="3">Weno</Text>
						<Text color="gray.400" fontSize="sm" fontWeight="bold" m="3">Estados Ferados da Micronésia</Text>
					</Box>
				</SimpleGrid>
			</Flex>
		</Box>
	);
}