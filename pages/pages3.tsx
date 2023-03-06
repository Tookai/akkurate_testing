import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { AcsDatagrid } from '@akkurateio/datagrid'

const Datagrid2 = () => {
	const [paginate, setPaginate] = useState<number>(1)
	const [sortByAcs, setSortByAcs] = useState<boolean>(false)
	const [selected, setSelectedColonne] = useState<string>('')
	const [dataJson, setData] = useState<any[]>([])

	const headers: {
		Header: string
		accessor: string
		withSort: boolean
		Cell?: (props: any) => JSX.Element | null
	}[] = [
		{
			Header: 'User ID',
			accessor: 'userId',
			withSort: true,
		},
		{
			Header: 'ID',
			accessor: 'id',
			withSort: true,
		},
		{
			Header: 'Titre',
			accessor: 'title',
			withSort: true,
		},
		{
			Header: 'Body',
			accessor: 'body',
			withSort: false,
			Cell: (props: any) => {
				return <Box onClick={() => console.log(props.row)}>{props.value}</Box>
			},
		},
	]

	useEffect(() => {
		if (selected && sortByAcs) {
			fetch(
				`https://jsonplaceholder.typicode.com/posts?sort=${selected}&order=asc&_page=${paginate}&_limit=20`
			)
				.then((response) => response.json())
				.then((json) => setData(json))
		}
		if (selected && !sortByAcs) {
			fetch(
				`https://jsonplaceholder.typicode.com/posts?sort=${selected}&order=desc&_page=${paginate}&_limit=20`
			)
				.then((response) => response.json())
				.then((json) => setData(json))
		}
		if (!selected) {
			fetch(
				`https://jsonplaceholder.typicode.com/posts?_page=${paginate}&_limit=20`
			)
				.then((response) => response.json())
				.then((json) => setData(json))
		}
	}, [selected, sortByAcs, paginate])

	const lines = {
		data: dataJson,
		meta: {
			total: 100,
			per_page: 10,
			current_page: 1,
			last_page: 1,
			first_page: 1,
		},
	}
	return (
		<Box h={'100vh'} p={4}>
			<AcsDatagrid
				columns={headers}
				data={lines.data}
				selectedColonne={setSelectedColonne}
				sortByAcs={sortByAcs}
				setSortByAcs={setSortByAcs}
				selected={selected}
				paginate={paginate}
				setPaginate={setPaginate}
				total={lines.meta.total}
			/>
		</Box>
	)
}

export default Datagrid2
