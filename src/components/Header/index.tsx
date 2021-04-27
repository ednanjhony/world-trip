import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1440}
			h={[55, 85, 100]}
			mx="auto"
			align="center"
			justify="center"
		>
			<Logo />
		</Flex>
	);
}