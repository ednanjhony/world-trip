import { Image, useBreakpointValue } from '@chakra-ui/react'


export function Banner() {
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
		md: false,
	})

	if (isMobile) {
		return (
			<Image src="../../assets/Bannersm.png" alt="Banner" display="block" w="100%" h={[163, 250]} mx="auto" objectFit="cover" />
		)
	}

	return (
		<Image src="../../assets/Banner.png" alt="Banner" display="block" w="100%" h={[163, 250, 368]} mx="auto" objectFit="cover" />
	);
}