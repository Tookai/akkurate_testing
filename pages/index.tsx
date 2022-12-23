import {
	AcsInputAutocomplete,
	AcsInputColor,
	AcsInputDate,
	AcsInputEmail, AcsInputFile, AcsInputNumber, AcsInputPassword,
	AcsInputPhone, AcsInputPin, AcsInputSearch,
	AcsInputText,
	AcsInputTextArea,
	AcsInputTime, AcsRangeSlider, AcsSelect, AcsSelectCreate, AcsSelectMultiple
} from '@akkurateio/ds'
import {Box, HStack, SimpleGrid, Text, VStack} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import ToggleColorMode from '../components/atoms/ToggleColorMode'

const Home: NextPage = () => {
	const [inputText, setInputText] = useState<string>('')
	const [inputPhone, setInputPhone] = useState<string>('')
	const [inputDate, setInputDate] = useState<string>('')
	const [inputTime, setInputTime] = useState<string>('')
	const [inputColor, setInputColor] = useState<string>('')
	const [inputEmail, setInputEmail] = useState<string>('')
	const [inputNumber, setInputNumber] = useState<number>(0)
	const [inputPassword, setInputPassword] = useState<string>('')
	const [inputSearch, setInputSearch] = useState<string>('')
	const [inputPin, setInputPin] = useState<string>('')
	const [inputAutocomplete, setInputAutocomplete] = useState<string>("");
	const [inputFile, setInputFile] = useState<FileList  | null>(null);
	const [inputTextArea, setInputTextArea] = useState<string>('');
	const [selected, setSelected] = useState<string | number>('')
	const [selectedMultiple, setSelectedMultiple] = useState<(string | number)[]>([])
	const [rangeSlider , setRangeSlider] = useState<number[]>([0, 100])

	const autoComplete = [
		'belle essaie',
		"c'est pluôt pas mal comme module",
		"fais toi plaisir avec ce module",
		"mais ne casse pas tout, merci !!!!",
		"Encore merci de la part de toute l'équipe de subvitamine"
	]

	const options = [
		{value: '1', label: 'Option 1'},
		{value: '2', label: 'Option 2'},
		{value: '3', label: 'Option 3'}
	]


	return (
		<Box width={'100vw'} px={8} py={2}>
			<HStack width={'full'} justifyContent={'space-between'}>
				<Text fontSize={'3xl'}>hello world</Text>

				<ToggleColorMode />
			</HStack>
			<Text>Test des composants</Text>

			<SimpleGrid columns={3} spacing={10}>

				<AcsInputText
					label={'Input text'}
					value={inputText}
					handleChange={setInputText}
				/>
				<AcsInputPhone label={'Input phone'} handleChange={setInputPhone} value={inputPhone} />
				<AcsInputDate label={"Input date"} value={inputDate} handleChange={setInputDate} />
				<AcsInputTime label={"Input Time"} handleChange={setInputTime} value={inputTime} />
				<AcsInputColor label={"Input color"} handleChange={setInputColor} value={inputColor} />
				<AcsInputTextArea handleChange={ setInputTextArea } value={inputTextArea} label={"Input text area"} />
				<AcsInputEmail handleChange={ setInputEmail } value={inputEmail} label={"Input email"} />
				<AcsInputSearch handleChange={ setInputSearch } value={inputSearch} label={"Input search"} />
				<AcsInputNumber handleChange={ setInputNumber } value={inputNumber} label={"Input number"} />
				<AcsInputPassword handleChange={ setInputPassword } value={inputPassword} label={"Input password"} />
				<AcsInputPin label={"Input pin"} handleChange={setInputPin} pinNumber={4} value={inputPin} />
				<AcsInputAutocomplete handleChange={setInputAutocomplete} resultsArray={autoComplete} label={"Input autocomplete"} value={inputAutocomplete} />
				<AcsInputFile value={inputFile} handleChange={setInputFile} label={"Input file"} />
				<Box>
				<AcsSelect options={options} handleChange={setSelected} value={selected} label={"Select"} />
				<AcsSelectMultiple options={options} handleChange={setSelectedMultiple} value={selectedMultiple} label={"Select multiple"} />
				<AcsSelectCreate options={options} handleChange={setSelectedMultiple} value={ selectedMultiple } label={"Select create"} />
				</Box>
				<AcsRangeSlider allStep indicatorSteps={10} onChange={setRangeSlider} value={rangeSlider} label={"Range slider"} />
			</SimpleGrid>
			<AcsSelect options={options} handleChange={setSelected} value={selected} label={"Select"} />
			<AcsSelectMultiple options={options} handleChange={setSelectedMultiple} value={selectedMultiple} label={"Select multiple"} />
		</Box>
	)
}

export default Home
