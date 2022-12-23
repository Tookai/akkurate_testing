import {AcsInputPhone, AcsInputText} from '@akkurateio/ds'
import {Box, HStack, SimpleGrid, Text, VStack} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import ToggleColorMode from '../components/atoms/ToggleColorMode'

const Home: NextPage = () => {
	const [inputText, setInputText] = useState<string>('')
	const [inputPhone, setInputPhone] = useState<string>('')

	return (
		<Box width={'100vw'} px={8} py={2}>
			<HStack width={'full'} justifyContent={'space-between'}>
				<Text fontSize={'3xl'}>hello world</Text>

				<ToggleColorMode />
			</HStack>
			<Text>Test des composants</Text>

			<SimpleGrid columns={3} spacing={10}>

				<AcsInputText
					label={'test'}
					value={inputText}
					handleChange={setInputText}
				/>
				<AcsInputPhone label={'phone'} handleChange={setInputPhone} value={inputPhone} />
			</SimpleGrid>
		</Box>
	)
}

export default Home
