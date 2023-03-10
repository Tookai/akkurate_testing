// import {
// 	AcsCarousel,
// 	AcsCheckboxCard,
// 	AcsCheckboxMultiple,
// 	AcsDrawer,
// 	AcsDropzone,
// 	AcsInputAutocomplete,
// 	AcsInputColor,
// 	AcsInputDate,
// 	AcsInputEmail,
// 	AcsInputFile,
// 	AcsInputNumber,
// 	AcsInputPassword,
// 	AcsInputPhone,
// 	AcsInputPin,
// 	AcsInputSearch,
// 	AcsInputText,
// 	AcsInputTextArea,
// 	AcsInputTime,
// 	AcsModal,
// 	AcsPaginate,
// 	AcsPaginateSecondary,
// 	AcsPdfViewer,
// 	AcsPopover,
// 	AcsRadioGroup,
// 	AcsRadioSelectCard,
// 	AcsRangeSlider,
// 	AcsSelect,
// 	AcsSelectCreate,
// 	AcsSelectMultiple,
// 	AcsSlider,
// 	AcsTree,
// 	AcsInputDateRange,
// } from '@akkurateio/ds'
// import { AcsWysiwyg } from '@akkurateio/wysiwyg'
// import {
// 	Box,
// 	Button,
// 	Flex,
// 	Heading,
// 	HStack,
// 	SimpleGrid,
// 	Text,
// 	VStack,
// } from '@chakra-ui/react'
// import type { NextPage } from 'next'
// import { useState } from 'react'
// import ToggleColorMode from '../components/atoms/ToggleColorMode'
// import dayjs, { Dayjs } from 'dayjs'
//
// const Home: NextPage = () => {
// 	const [inputText, setInputText] = useState<string>('')
// 	const [inputPhone, setInputPhone] = useState<string>('')
// 	const [inputDate, setInputDate] = useState<string>('')
// 	const [inputTime, setInputTime] = useState<string>('')
// 	const [inputColor, setInputColor] = useState<string>('')
// 	const [inputEmail, setInputEmail] = useState<string>('')
// 	const [inputNumber, setInputNumber] = useState<number>(0)
// 	const [inputPassword, setInputPassword] = useState<string>('')
// 	const [inputSearch, setInputSearch] = useState<string>('')
// 	const [inputPin, setInputPin] = useState<string>('')
// 	const [inputAutocomplete, setInputAutocomplete] = useState<string>('')
// 	const [inputFile, setInputFile] = useState<FileList | null>(null)
// 	const [inputTextArea, setInputTextArea] = useState<string>('')
// 	const [selected, setSelected] = useState<string | number>('')
// 	const [selectedMultiple, setSelectedMultiple] = useState<(string | number)[]>(
// 		[]
// 	)
// 	const [rangeSlider, setRangeSlider] = useState<number[]>([0, 100])
// 	const [slider, setSlider] = useState<number>(0)
// 	const [selectCreate, setSelectCreate] = useState<string | number>('')
// 	const [paginate, setPaginate] = useState<number>(1)
// 	const [treeItem, setTreeItem] = useState<{
// 		id: string | number | null
// 		name: string | null
// 	}>({ id: null, name: null })
// 	const [checked, setChecked] = useState<(number | string)[]>([2])
// 	const [radioChecked, setRadioChecked] = useState<number | string>(2)
// 	const [modalDrawer, setModalDrawer] = useState<boolean>(false)
// 	const [modal, setModal] = useState<boolean>(false)
// 	const [radio, setRadio] = useState<string | number>('')
// 	const [selectedCheckboxIds, setSelectedCheckboxIds] = useState<
// 		(string | number)[]
// 	>([])
// 	const [files, setFiles] = useState<FileList | File[] | null>(null)
// 	const [dateRange, setDateRange] = useState<{
// 		afterDate: Dayjs | null
// 		beforeDate: Dayjs | null
// 		currentDate: Dayjs
// 	}>({
// 		afterDate: null,
// 		beforeDate: null,
// 		currentDate: dayjs(),
// 	})
//
// 	const autoComplete = [
// 		'belle essaie',
// 		"c'est plu??t pas mal comme module",
// 		'fais toi plaisir avec ce module',
// 		'mais ne casse pas tout, merci !!!!',
// 		"Encore merci de la part de toute l'??quipe de subvitamine",
// 	]
//
// 	const options = [
// 		{ value: '1', label: 'Option 1', isDisabled: true },
// 		{ value: '2', label: 'Option 2' },
// 		{ value: '3', label: 'Option 3' },
// 	]
//
// 	const contentArray = [
// 		{ id: '1', name: 'Option 1', isChecked: false },
// 		{ id: '2', name: 'Option 2', isChecked: false },
// 		{ id: '3', name: 'Option 3', isChecked: false },
// 	]
//
// 	const radioArray = [
// 		{ label: 'Option 1', value: 'option1' },
// 		{ label: 'Option 2', value: 'option2' },
// 		{ label: 'Option 3', value: 'option3' },
// 		{ label: 'Option 4', value: 'option4' },
// 	]
//
// 	const tree = [
// 		{
// 			id: 1,
// 			name: 'root',
// 			children: [
// 				{
// 					id: 2,
// 					name: 'child1',
// 					children: [
// 						{
// 							id: 3,
// 							name: 'child1.1',
// 							children: [],
// 						},
// 					],
// 				},
// 			],
// 		},
// 	]
//
// 	const checkboxCard = [
// 		{
// 			id: 1,
// 			body: (
// 				<Text
// 					width={'fit-content'}
// 					height={'auto'}
// 					fontWeight={'bold'}
// 					fontSize={'sm'}
// 				>
// 					C est un exemple
// 				</Text>
// 			),
// 		},
// 		{
// 			id: 2,
// 			body: (
// 				<>
// 					<Text
// 						width={'fit-content'}
// 						height={'auto'}
// 						fontWeight={'bold'}
// 						fontSize={'sm'}
// 					>
// 						Un autre exemple
// 					</Text>
// 					<Text color={'neutral.400'} fontSize={'xs'}>
// 						Subtitle
// 					</Text>
// 				</>
// 			),
// 		},
// 		{
// 			id: 3,
// 			body: (
// 				<Box height={'auto'}>
// 					<Heading fontSize={'md'}>Coucou</Heading>
// 					<Text marginTop={'5px'} fontSize={'sm'}>
// 						il etait une fois dans une galaxie lointaine, tr??s lointaine....
// 					</Text>
// 				</Box>
// 			),
// 		},
// 	]
//
// 	return (
// 		<Box width={'100vw'} px={8} py={2}>
// 			<HStack width={'full'} justifyContent={'space-between'}>
// 				<Text fontSize={'3xl'}>hello world</Text>
//
// 				<ToggleColorMode />
// 			</HStack>
// 			<Text>Test des composants</Text>
//
// 			<AcsWysiwyg value={inputText} setValue={setInputText} />
//
// 			<SimpleGrid columns={2} spacing={10}>
// 				<AcsInputText
// 					label={'Input text'}
// 					value={inputText}
// 					handleChange={setInputText}
// 				/>
// 				<AcsInputPhone
// 					label={'Input phone'}
// 					handleChange={setInputPhone}
// 					value={inputPhone}
// 				/>
// 				<AcsInputDate
// 					label={'Input date'}
// 					value={inputDate}
// 					handleChange={setInputDate}
// 				/>
// 				<AcsInputTime
// 					label={'Input Time'}
// 					handleChange={setInputTime}
// 					value={inputTime}
// 				/>
// 				<AcsInputColor
// 					label={'Input color'}
// 					handleChange={setInputColor}
// 					value={inputColor}
// 					rounded={'full'}
// 				/>
// 				<AcsInputTextArea
// 					handleChange={setInputTextArea}
// 					value={inputTextArea}
// 					label={'Input text area'}
// 				/>
// 				<AcsInputEmail
// 					handleChange={setInputEmail}
// 					value={inputEmail}
// 					label={'Input email'}
// 				/>
// 				<AcsInputSearch
// 					handleChange={setInputSearch}
// 					value={inputSearch}
// 					label={'Input search'}
// 				/>
// 				<AcsInputNumber
// 					handleChange={setInputNumber}
// 					value={inputNumber}
// 					label={'Input number'}
// 					rounded={'full'}
// 				/>
// 				<AcsInputPassword
// 					handleChange={setInputPassword}
// 					value={inputPassword}
// 					label={'Input password'}
// 				/>
// 				<AcsInputPin
// 					label={'Input pin'}
// 					handleChange={setInputPin}
// 					pinNumber={4}
// 					value={inputPin}
// 				/>
// 				<AcsInputAutocomplete
// 					handleChange={setInputAutocomplete}
// 					resultsArray={autoComplete}
// 					label={'Input autocomplete'}
// 					value={inputAutocomplete}
// 				/>
// 				<AcsInputFile
// 					value={inputFile}
// 					handleChange={setInputFile}
// 					label={'Input file'}
// 				/>
// 				<AcsSelect
// 					options={options}
// 					handleChange={setSelected}
// 					value={selected}
// 					label={'Select'}
// 				/>
// 				<AcsSelectMultiple
// 					options={options}
// 					handleChange={setSelectedMultiple}
// 					value={selectedMultiple}
// 					label={'Select multiple'}
// 				/>
// 				<AcsSelectCreate
// 					options={options}
// 					handleChange={setSelectedMultiple}
// 					value={selectedMultiple}
// 					title={'Select create'}
// 				/>
// 				<AcsRangeSlider
// 					allStep
// 					indicatorSteps={10}
// 					onChange={setRangeSlider}
// 					value={rangeSlider}
// 					title={'Range slider'}
// 				/>
// 				<AcsPaginate
// 					max={100}
// 					current={paginate}
// 					handleChangePage={setPaginate}
// 					withPageInfos
// 				/>
// 				<HStack width={'full'} justifyContent={'space-between'}>
// 					<Box>
// 						<AcsPaginate
// 							max={100}
// 							current={paginate}
// 							handleChangePage={setPaginate}
// 						/>
// 					</Box>
// 					<Box>
// 						<AcsPaginateSecondary
// 							max={100}
// 							current={paginate}
// 							handleChangePage={setPaginate}
// 						/>
// 					</Box>
// 				</HStack>
// 				<AcsSlider
// 					allStep
// 					onChange={setSlider}
// 					value={slider}
// 					label={'Slider'}
// 					indicatorSteps={10}
// 				/>
// 				<AcsPaginateSecondary
// 					max={100}
// 					current={paginate}
// 					handleChangePage={setPaginate}
// 				/>
// 				<AcsTree tree={tree} item={treeItem} setItem={setTreeItem} />
// 				<AcsCheckboxCard
// 					contentArray={checkboxCard}
// 					selectedCardIds={checked}
// 					setSelectedCardIds={setChecked}
// 					spacing={4}
// 				/>
// 				<AcsRadioSelectCard
// 					contentArray={checkboxCard}
// 					selectedCardId={radioChecked}
// 					setSelectedCardId={setRadioChecked}
// 					spacing={4}
// 				/>
// 				<AcsInputDateRange
// 					value={dateRange}
// 					handleChange={setDateRange}
// 					options={{
// 						disabledDays: [0, 6],
// 					}}
// 				/>
// 				<Button onClick={() => setModalDrawer(!modalDrawer)}>
// 					{modalDrawer ? 'Fermer' : 'Ouvrir'} un drawer
// 				</Button>
// 				<AcsDrawer
// 					title={'Drawer'}
// 					isOpen={modalDrawer}
// 					onClose={() => setModalDrawer(false)}
// 					placement={'right'}
// 					hasCloseBtn={true}
// 					body={
// 						<Text>
// 							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
// 							incidunt maxime aspernatur tenetur distinctio nobis in recusandae?
// 							Repellat nihil placeat possimus provident ex sint fugiat, nam esse
// 						</Text>
// 					}
// 					footer={
// 						<Flex justifyContent={'space-between'} width={'full'}>
// 							<Button
// 								backgroundColor={'neutral.400'}
// 								color={'white'}
// 								onClick={() => setModal(false)}
// 							>
// 								Close
// 							</Button>
// 							<Button
// 								backgroundColor={'primary.500'}
// 								color={'white'}
// 								onClick={() => console.log('jojo')}
// 							>
// 								Vue
// 							</Button>
// 						</Flex>
// 					}
// 				/>
// 				<Button onClick={() => setModal(!modal)}>
// 					{modal ? 'Fermer' : 'Ouvrir'} une modal
// 				</Button>
//
// 				<AcsModal
// 					title={'Modal'}
// 					isOpen={modal}
// 					onClose={() => setModal(false)}
// 					hasCloseBtn={true}
// 					body={
// 						<Box>
// 							<Text>
// 								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
// 								Quisquam, perspiciatis consequatur vero itaque ducimus aliquam
// 								hic illum voluptates quas a et dignissimos quia repellat iste
// 								sequi non ipsum minima sint! Perferendis delectus nesciunt
// 							</Text>
// 						</Box>
// 					}
// 					footer={
// 						<Flex justifyContent={'space-between'} width={'full'}>
// 							<Button
// 								backgroundColor={'neutral.500'}
// 								color={'white'}
// 								onClick={() => setModal(false)}
// 							>
// 								Close
// 							</Button>
// 							<Button
// 								backgroundColor={'primary.500'}
// 								color={'white'}
// 								onClick={() => console.log('jojo')}
// 							>
// 								Vue
// 							</Button>
// 						</Flex>
// 					}
// 					size={'lg'}
// 				/>
// 				<AcsPopover
// 					body={<Text>Coucou de popover</Text>}
// 					triggerBtnClosed={<Button>Ouvre</Button>}
// 					triggerBtnOpened={<Button>Ferme</Button>}
// 					action={() => console.log('coucou from popover')}
// 				/>
// 				<AcsRadioGroup
// 					handleChange={(radio) => setRadio(radio as string | number)}
// 					valuesArray={radioArray}
// 					value={radio}
// 				/>
// 				<AcsRadioGroup
// 					handleChange={(radio) => setRadio(radio as string | number)}
// 					valuesArray={radioArray}
// 					value={radio}
// 					columns={4}
// 				/>
// 				<AcsCheckboxMultiple
// 					contentArray={contentArray}
// 					setSelectedCheckboxIds={setSelectedCheckboxIds}
// 					selectedCheckboxIds={selectedCheckboxIds}
// 				/>
//
// 				<AcsCheckboxMultiple
// 					columns={3}
// 					contentArray={contentArray}
// 					setSelectedCheckboxIds={setSelectedCheckboxIds}
// 					selectedCheckboxIds={selectedCheckboxIds}
// 				/>
// 				<AcsDropzone maxFiles={1} handleChange={setFiles} />
// 				<AcsCarousel
// 					cardsArray={[
// 						<Flex
// 							key={0}
// 							bg={'gray.500'}
// 							shadow={'inner'}
// 							h={'200px'}
// 							w={'120px'}
// 							rounded={'sm'}
// 							p={2}
// 						>
// 							<Text>Hello 1</Text>
// 						</Flex>,
// 						<Flex
// 							key={1}
// 							bg={'gray.500'}
// 							shadow={'inner'}
// 							h={'200px'}
// 							w={'120px'}
// 							rounded={'sm'}
// 							p={2}
// 						>
// 							<Text>Hello 2</Text>
// 						</Flex>,
// 						<Flex
// 							key={2}
// 							bg={'gray.500'}
// 							shadow={'inner'}
// 							h={'200px'}
// 							w={'120px'}
// 							rounded={'sm'}
// 							p={2}
// 						>
// 							<Text>Hello 3</Text>
// 						</Flex>,
// 					]}
// 				/>
// 			</SimpleGrid>
// 			<Box height={'1000px'} marginTop={5}>
// 				<AcsPdfViewer
// 					viewerOnly={false}
// 					withFitH={true}
// 					src={
// 						'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
// 					}
// 				/>
// 			</Box>
// 		</Box>
// 	)
// }
//
// export default Home
import {
	Grid,
	Box,
	Text,
	Input,
	FormControl,
	FormLabel,
	Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import dayjs from 'dayjs'

function Calendar() {
	// 	const [startDate, setStartDate] = useState(null)
	// 	const [endDate, setEndDate] = useState(null)
	// 	const [currentMonth, setCurrentMonth] = useState(dayjs())
	//
	// 	const handleDateClick = (date: any) => {
	// 		if (!startDate) {
	// 			setStartDate(date)
	// 		} else if (!endDate) {
	// 			setEndDate(date)
	// 		} else {
	// 			setStartDate(date)
	// 			setEndDate(null)
	// 		}
	// 	}
	//
	// 	const handleStartDateChange = (e) => {
	// 		setStartDate(e.target.value)
	// 	}
	//
	// 	const handleEndDateChange = (e) => {
	// 		setEndDate(e.target.value)
	// 	}
	//
	// 	const handlePreviousMonth = () => {
	// 		setCurrentMonth(currentMonth.subtract(1, 'month'))
	// 	}
	//
	// 	const handleNextMonth = () => {
	// 		setCurrentMonth(currentMonth.add(1, 'month'))
	// 	}
	//
	// 	const handleClearDates = () => {
	// 		setStartDate(null)
	// 		setEndDate(null)
	// 	}
	//
	// 	const isWeekend = (date) => {
	// 		return dayjs(date).day() === 0 || dayjs(date).day() === 6
	// 	}
	//
	// 	const isSelected = (date) => {
	// 		return (
	// 			dayjs(date).isSame(startDate) ||
	// 			dayjs(date).isSame(endDate) ||
	// 			(startDate && endDate && dayjs(date).isBetween(startDate, endDate))
	// 		)
	// 	}
	//
	// 	const daysInMonth = dayjs(currentMonth).daysInMonth()
	// 	const firstDayOfMonth = dayjs(currentMonth).startOf('month').day()
	// 	const days = []
	//
	// 	for (let i = 0; i < firstDayOfMonth; i++) {
	// 		days.push(null)
	// 	}
	//
	// 	for (let i = 1; i <= daysInMonth; i++) {
	// 		days.push(dayjs(currentMonth).date(i))
	// 	}
	//
	// 	return (
	// 		<Grid templateColumns="repeat(7, 1fr)">
	// 			<Box>
	// 				<Button onClick={handlePreviousMonth}>Previous</Button>
	// 				<Text>{currentMonth.format('MMMM YYYY')}</Text>
	// 				<Button onClick={handleNextMonth}>Next</Button>
	// 			</Box>
	// 			{days.map((day, index) => (
	// 				<Box
	// 					key={index}
	// 					onClick={() => handleDateClick(day)}
	// 					bg={isSelected(day) ? 'green.500' : 'white'}
	// 					color={isWeekend(day) ? 'gray.500' : 'black'}
	// 					cursor={day ? 'pointer' : 'default'}
	// 					// _hover={day && { bg: 'blue.500' }}
	// 				>
	// 					<Text>{day ? day.date() : ''}</Text>
	// 				</Box>
	// 			))}
	// 			<FormControl>
	// 				<FormLabel>Start Date</FormLabel>
	// 				<Input
	// 					type="date"
	// 					value={startDate ? dayjs(startDate).format('YYYY-MM-DD') : ''}
	// 					onChange={handleStartDateChange}
	// 				/>
	// 			</FormControl>
	// 			<FormControl>
	// 				<FormLabel>End Date</FormLabel>
	// 				<Input
	// 					type="date"
	// 					value={endDate ? dayjs(endDate).format('YYYY-MM-DD') : ''}
	// 					onChange={handleEndDateChange}
	// 				/>
	// 			</FormControl>
	// 			<Button onClick={handleClearDates}>Clear Dates</Button>
	// 		</Grid>
	// 	)
}

export default Calendar
