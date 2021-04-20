import { Flex, Box } from '@chakra-ui/react';
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

				<Flex 
					justify="center"
					align="center" 
					w="200"
					flexDir="column"
					fontSize="3xl"
					color="gray.600"
				>
					<h1>Vamos nessa?</h1>
					<h1>Então escolha seu continente</h1>
				</Flex>

				<Flex
					w="100%"
					maxW={1440}
					justify="center"
					my="10"
				>
					<ContinentsSlide />
				</Flex>
			</Flex>
		</Box>
  );
}
