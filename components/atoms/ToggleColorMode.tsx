import { Flex, Switch, useColorMode } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

const ToggleColorMode: FunctionComponent = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex alignItems={'center'} mx={5} experimental_spaceX={2}>
			<Switch isChecked={colorMode === 'light'} onChange={toggleColorMode} />
		</Flex>
	)
}

export default ToggleColorMode
