import {
	AcsCarousel,
	AcsCheckboxCard,
	AcsCheckboxMultiple,
	AcsDrawer,
	AcsDropzone,
	AcsInputAutocomplete,
	AcsInputColor,
	AcsInputDate,
	AcsInputEmail,
	AcsInputFile,
	AcsInputNumber,
	AcsInputPassword,
	AcsInputPhone,
	AcsInputPin,
	AcsInputSearch,
	AcsInputText,
	AcsInputTextArea,
	AcsInputTime,
	AcsModal,
	AcsPaginate,
	AcsPaginateSecondary,
	AcsPopover,
	AcsRadioGroup,
	AcsRadioSelectCard,
	AcsRangeSlider,
	AcsSelect,
	AcsSelectCreate,
	AcsSelectMultiple,
	AcsSlider,
	AcsTree,
} from '@akkurateio/ds'
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	Text,
} from '@chakra-ui/react'
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
	const [inputAutocomplete, setInputAutocomplete] = useState<string>('')
	const [inputFile, setInputFile] = useState<FileList | null>(null)
	const [inputTextArea, setInputTextArea] = useState<string>('')
	const [selected, setSelected] = useState<string | number>('')
	const [selectedMultiple, setSelectedMultiple] = useState<(string | number)[]>(
		[]
	)
	const [rangeSlider, setRangeSlider] = useState<number[]>([0, 100])
	const [slider, setSlider] = useState<number>(0)
	const [selectCreate, setSelectCreate] = useState<string | number>('')
	const [paginate, setPaginate] = useState<number>(1)
	const [treeItem, setTreeItem] = useState<{
		id: string | number | null
		name: string | null
	}>({ id: null, name: null })
	const [checked, setChecked] = useState<(number | string)[]>([2])
	const [radioChecked, setRadioChecked] = useState<number | string>(2)
	const [modalDrawer, setModalDrawer] = useState<boolean>(false)
	const [modal, setModal] = useState<boolean>(false)
	const [radio, setRadio] = useState<string | number>('')
	const [selectedCheckboxIds, setSelectedCheckboxIds] = useState<
		(string | number)[]
	>([])
	const [files, setFiles] = useState<FileList | File[] | null>(null)

	const autoComplete = [
		'belle essaie',
		"c'est pluôt pas mal comme module",
		'fais toi plaisir avec ce module',
		'mais ne casse pas tout, merci !!!!',
		"Encore merci de la part de toute l'équipe de subvitamine",
	]

	const options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
	]

	const contentArray = [
		{ id: '1', name: 'Option 1', isChecked: false },
		{ id: '2', name: 'Option 2', isChecked: false },
		{ id: '3', name: 'Option 3', isChecked: false },
	]

	const radioArray = [
		{ label: 'Option 1', value: 'option1' },
		{ label: 'Option 2', value: 'option2' },
		{ label: 'Option 3', value: 'option3' },
		{ label: 'Option 4', value: 'option4' },
	]

	const tree = [
		{
			id: 1,
			name: 'root',
			children: [
				{
					id: 2,
					name: 'child1',
					children: [
						{
							id: 3,
							name: 'child1.1',
							children: [],
						},
					],
				},
			],
		},
	]

	const checkboxCard = [
		{
			id: 1,
			body: <Box>C{`'`}est un exemple</Box>,
		},
		{
			id: 2,
			body: <Box>Un autre exemple</Box>,
		},
		{
			id: 3,
			body: (
				<Box width={'200px'} height={'auto'}>
					<Heading>Coucou</Heading>
					<Text>
						il etait une fois dans une galaxie lointaine, très lointaine....
					</Text>
					<Text fontSize={'sm'}>Taaan taaan tan tan tan tan taaaaan</Text>
					<Text textAlign={'right'} fontSize={'xs'}>
						created by ORCEL
					</Text>
				</Box>
			),
		},
		{
			id: 4,
			body: (
				<Box width={'200px'} height={'auto'}>
					<Heading>Jeune padawan</Heading>
				</Box>
			),
		},
	]

	return (
		<Box width={'100vw'} px={8} py={2}>
			<HStack width={'full'} justifyContent={'space-between'}>
				<Text fontSize={'3xl'}>hello world</Text>

				<ToggleColorMode />
			</HStack>
			<Text>Test des composants</Text>

			<SimpleGrid columns={2} spacing={10}>
				<AcsInputText
					label={'Input text'}
					value={inputText}
					handleChange={setInputText}
				/>
				<AcsInputPhone
					label={'Input phone'}
					handleChange={setInputPhone}
					value={inputPhone}
				/>
				<AcsInputDate
					label={'Input date'}
					value={inputDate}
					handleChange={setInputDate}
				/>
				<AcsInputTime
					label={'Input Time'}
					handleChange={setInputTime}
					value={inputTime}
				/>
				<AcsInputColor
					label={'Input color'}
					handleChange={setInputColor}
					value={inputColor}
				/>
				<AcsInputTextArea
					handleChange={setInputTextArea}
					value={inputTextArea}
					label={'Input text area'}
				/>
				<AcsInputEmail
					handleChange={setInputEmail}
					value={inputEmail}
					label={'Input email'}
				/>
				<AcsInputSearch
					handleChange={setInputSearch}
					value={inputSearch}
					label={'Input search'}
				/>
				<AcsInputNumber
					handleChange={setInputNumber}
					value={inputNumber}
					label={'Input number'}
				/>
				<AcsInputPassword
					handleChange={setInputPassword}
					value={inputPassword}
					label={'Input password'}
				/>
				<AcsInputPin
					label={'Input pin'}
					handleChange={setInputPin}
					pinNumber={4}
					value={inputPin}
				/>
				<AcsInputAutocomplete
					handleChange={setInputAutocomplete}
					resultsArray={autoComplete}
					label={'Input autocomplete'}
					value={inputAutocomplete}
				/>
				<AcsInputFile
					value={inputFile}
					handleChange={setInputFile}
					label={'Input file'}
				/>
				<AcsSelect
					options={options}
					handleChange={setSelected}
					value={selected}
					label={'Select'}
				/>
				<AcsSelectMultiple
					options={options}
					handleChange={setSelectedMultiple}
					value={selectedMultiple}
					label={'Select multiple'}
				/>
				<AcsSelectCreate
					options={options}
					handleChange={setSelectedMultiple}
					value={selectedMultiple}
					label={'Select create'}
				/>
				<AcsRangeSlider
					allStep
					indicatorSteps={10}
					onChange={setRangeSlider}
					value={rangeSlider}
					label={'Range slider'}
				/>
				<AcsPaginate
					max={100}
					current={paginate}
					handleChangePage={setPaginate}
					withPageInfos
				/>
				<AcsSlider
					allStep
					onChange={setSlider}
					value={slider}
					label={'Slider'}
					indicatorSteps={10}
				/>
				<AcsPaginateSecondary
					max={100}
					current={paginate}
					handleChangePage={setPaginate}
				/>
				<AcsTree tree={tree} item={treeItem} setItem={setTreeItem} />
				<AcsCheckboxCard
					contentArray={checkboxCard}
					selectedCardIds={checked}
					setSelectedCardIds={setChecked}
				/>
				<AcsRadioSelectCard
					contentArray={checkboxCard}
					selectedCardId={radioChecked}
					setSelectedCardId={setRadioChecked}
				/>
				<Button onClick={() => setModalDrawer(!modalDrawer)}>
					{modalDrawer ? 'Fermer' : 'Ouvrir'} un drawer
				</Button>
				<AcsDrawer
					title={'Drawer'}
					isOpen={modalDrawer}
					onClose={() => setModalDrawer(false)}
					placement={'right'}
					hasCloseBtn={true}
					body={
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
							incidunt maxime aspernatur tenetur distinctio nobis in recusandae?
							Repellat nihil placeat possimus provident ex sint fugiat, nam esse
						</Text>
					}
					footer={
						<Flex justifyContent={'space-between'} width={'full'}>
							<Button onClick={() => setModalDrawer(false)}>Close</Button>
							<Button onClick={() => console.log('hello')}>Exemple</Button>
						</Flex>
					}
				/>
				<Button onClick={() => setModal(!modal)}>
					{modal ? 'Fermer' : 'Ouvrir'} une modal
				</Button>

				<AcsModal
					title={'Modal'}
					isOpen={modal}
					onClose={() => setModal(false)}
					hasCloseBtn={true}
					body={
						<Box>
							<Text>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Quisquam, perspiciatis consequatur vero itaque ducimus aliquam
								hic illum voluptates quas a et dignissimos quia repellat iste
								sequi non ipsum minima sint! Perferendis delectus nesciunt
							</Text>
						</Box>
					}
					footer={
						<Flex justifyContent={'space-between'} width={'full'}>
							<Button onClick={() => setModal(false)}>Close</Button>
							<Button onClick={() => console.log('coucou')}>Vue</Button>
						</Flex>
					}
					size={'lg'}
				/>
				<AcsPopover
					body={<Text>Coucou de popover</Text>}
					triggerBtnClosed={<Button>Ouvre</Button>}
					triggerBtnOpened={<Button>Ferme</Button>}
					action={() => console.log('coucou from popover')}
				/>
				<AcsRadioGroup
					handleChange={(radio) => setRadio(radio as string | number)}
					valuesArray={radioArray}
					value={radio}
				/>
				<AcsCheckboxMultiple
					multiple
					contentArray={contentArray}
					setSelectedCheckboxIds={setSelectedCheckboxIds}
					selectedCheckboxIds={selectedCheckboxIds}
				/>
				<AcsDropzone maxFiles={7} handleChange={setFiles} />
				<AcsCarousel
					cardsArray={[
						<Flex
							key={0}
							bg={'gray.500'}
							shadow={'inner'}
							h={'200px'}
							w={'120px'}
							rounded={'sm'}
							p={2}
						>
							<Text>Hello 1</Text>
						</Flex>,
						<Flex
							key={1}
							bg={'gray.500'}
							shadow={'inner'}
							h={'200px'}
							w={'120px'}
							rounded={'sm'}
							p={2}
						>
							<Text>Hello 2</Text>
						</Flex>,
						<Flex
							key={2}
							bg={'gray.500'}
							shadow={'inner'}
							h={'200px'}
							w={'120px'}
							rounded={'sm'}
							p={2}
						>
							<Text>Hello 3</Text>
						</Flex>,
					]}
				/>
			</SimpleGrid>
		</Box>
	)
}

export default Home
