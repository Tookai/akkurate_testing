import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import ToggleColorMode from '../components/atoms/ToggleColorMode'

const Home: NextPage = () => {
	return (
		<Box width={'100vw'} height={'100vh'}>
			<Text fontSize={'3xl'}>hello world</Text>

			<ToggleColorMode />
		</Box>
	)
}

export default Home
