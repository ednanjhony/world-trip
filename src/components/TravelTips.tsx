import { Grid, Flex, Image, Box, useBreakpointValue, Text } from '@chakra-ui/react'
import Link from 'next/link';

export function TravelTips() {
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
		md: false,
	})

	if (isMobile) {
		return (
			<Grid templateColumns="repeat(2, 1fr)" gap="5" mx="auto" my="5" justifyContent="space-between" align="center">
				<Box display="flex" flexDir="row">
					<Text color="orange.400" border="4px solid" borderRadius="100%" w="1" h="1" mt="2" mx="3"></Text>
					<Text color="gray.600" fontWeight="bold" textShadow="1px 3px 18px black">vida noturna</Text>
				</Box>
				<Box display="flex" flexDir="row">
					<Text color="orange.400" border="4px solid" borderRadius="100%" w="1" h="1" mt="2" mx="3"></Text>
					<Text color="gray.600" fontWeight="bold" textShadow="1px 3px 18px black">praia</Text>
				</Box>
				<Box display="flex" flexDir="row">
					<Text color="orange.400" border="4px solid" borderRadius="100%" w="1" h="1" mt="2" mx="3"></Text>
					<Text color="gray.600" fontWeight="bold" textShadow="1px 3px 18px black">moderno</Text>
				</Box>
				<Box display="flex" flexDir="row">
					<Text color="orange.400" border="4px solid" borderRadius="100%" w="1" h="1" mt="2" mx="3"></Text>
					<Text color="gray.600" fontWeight="bold" textShadow="1px 3px 18px black">clássico</Text>
				</Box>
				<Box display="flex" flexDir="row">
					<Text color="orange.400" border="4px solid" borderRadius="100%" w="1" h="1" mt="2" mx="3"></Text>
					<Text color="gray.600" fontWeight="bold" textShadow="1px 3px 18px black">e mais...</Text>
				</Box>
			</Grid>
		)
	}

	return (
		<Flex mx="auto" my="10">
			<Box mr={["3", "10"]} p={["1", "2"]}>
				<Link href="#">
					<Image src="../../assets/Nightlife.svg" alt="vida noturna" w={[null, 120, 158]} h={[null, 110, 140]} />
				</Link>
			</Box>
			<Box mr={["3", "10"]} p={["1", "2"]}>
				<Link href="#">
					<Image src="../../assets/Beach.svg" alt="praia" w={[null, 100, 158]} h={[null, 110, 140]} />
				</Link>
			</Box>
			<Box mr={["3", "10"]} p={["1", "2"]}>
				<Link href="#">
					<Image src="../../assets/Modern.svg" alt="moderno" w={[null, 100, 158]} h={[null, 110, 140]} />
				</Link>
			</Box>
			<Box mr={["3", "10"]} p={["1", "2"]}>
				<Link href="#">
					<Image src="../../assets/Classic.svg" alt="classico" w={[null, 100, 158]} h={[null, 110, 140]} />
				</Link>
			</Box>
			<Box p={["1", "5"]}>
				<Link href="#">
					<Image src="../../assets/More.svg" alt="mais" w={[null, 100, 158]} h={[null, 110, 140]} />
				</Link>
			</Box>
		</Flex>
	);
}