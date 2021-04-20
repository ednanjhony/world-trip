import { Flex, Image, Box } from '@chakra-ui/react'
import Link from 'next/link';

export function TravelTips() {
	return (
		<Flex m="10">
			<Box mr="20" p="10">
				<Link href="#">
					<Image src="../../assets/Nightlife.svg" alt="vida noturna" />
				</Link>
			</Box>
			<Box mr="20" p="10">
				<Link href="#">
					<Image src="../../assets/Beach.svg" alt="praia" />
				</Link>
			</Box>
			<Box mr="20" p="10">
				<Link href="#">
					<Image src="../../assets/Modern.svg" alt="moderno" />
				</Link>
			</Box>
			<Box mr="20" p="10">
				<Link href="#">
					<Image src="../../assets/Classic.svg" alt="classico" />
				</Link>
			</Box>
			<Box p="10">
				<Link href="#">
					<Image src="../../assets/More.svg" alt="mais" />
				</Link>
			</Box>
		</Flex>
	);
}