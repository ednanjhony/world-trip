import { Flex, Box, Text } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { Header } from '../components/Header';
import { TravelTips } from '../components/TravelTips';

export default function Home() {
  return (
		<Box>
			<Header />

			<Flex
				w="100%"
				maxWidth={1440}
				mx="auto"
			>
				<Banner />
			</Flex>
			<Flex
				w="100%"
				maxW={1440}
				mx="auto"
				justify="center"
				flexDir="column"
			>
				<TravelTips />

				<Box w={[10, null, 40]} color="gray.700" borderBottom="1px" mx="auto" my="5" />

				<Flex 
					justify="center"
					align="center" 
					w="100%"
					flexDir="column"
					fontSize={["1xl","2xl", "3xl"]}
					fontWeight="bold"
					color="gray.600"
					mx="auto"
					p={["1", "2", "3"]}
				>
					<Text>Vamos nessa?</Text>
					<Text>Então escolha seu continente</Text>
				</Flex>

				<Flex
					w="100%"
					maxW={1440}
					justify="center"
					my={["6", "5", "10"]}
				>
					<ContinentsSlide />
				</Flex>
			</Flex>
		</Box>
  );
}
