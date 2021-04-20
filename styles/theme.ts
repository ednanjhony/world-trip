import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		orange: {
			"400": "#FFBA08",
		},
		gray: {
			"50": "#F5F8FA"
		}
	},
	styles: {
		global: {
			body: {
				bg: "gray.50",
				color: "black"
			}
		}
	}
})