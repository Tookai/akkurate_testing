import { AcsInputText } from '@akkurateio/ds'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import ToggleColorMode from '../components/atoms/ToggleColorMode'

const Home: NextPage = () => {
	const [inputText, setInputText] = useState<string>('')

	return (
		<Box width={'100vw'} px={8} py={2}>
			<HStack width={'full'} justifyContent={'space-between'}>
				<Text fontSize={'3xl'}>hello world</Text>

				<ToggleColorMode />
			</HStack>

			<VStack>
				<Text>Test des composants</Text>

				<AcsInputText
					label={'test'}
					value={inputText}
					handleChange={setInputText}
				/>
			</VStack>
		</Box>
	)
}

export default Home
