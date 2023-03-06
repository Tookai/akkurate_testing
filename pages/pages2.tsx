import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { AcsDatagrid } from '@akkurateio/datagrid'

const Datagrid = () => {
	const [paginate, setPaginate] = useState<number>(1)
	const [sortByAcs, setSortByAcs] = useState<boolean>(false)
	const [selected, setSelectedColonne] = useState<string>('')

	const headers = [
		{
			Header: 'Nom',
			accessor: 'name',
			withSort: true,
		},
		{
			Header: 'Prénom',
			accessor: 'firstname',
			withSort: true,
		},
		{
			Header: 'Email',
			accessor: 'email',
			withSort: true,
		},
		{
			Header: 'Téléphone',
			accessor: 'phone',
			withSort: false,
		},
	]

	const data = {
		data: [
			{
				name: 'Doe',
				firstname: 'John',
				email: 'jhonDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Jane',
				email: 'janeDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Jack',
				email: 'jackDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Jill',
				email: 'jillDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Jolie',
				email: 'jolieDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Joaquin',
				email: 'joaquinDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Jules',
				email: 'julesDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Juliette',
				email: 'julietteDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Julien',
				email: 'julienDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Juliette',
				email: 'julietteDoe' + '@gmail.com',
				phone: '0123456789',
			},
			{
				name: 'Doe',
				firstname: 'Julien',
				email: 'julienDoe' + '@gmail.com',
				phone: '0123456789',
			},
		],
		meta: {
			total: 4,
			per_page: 10,
			current_page: 1,
			last_page: 1,
			first_page: 1,
		},
	}

	return (
		<AcsDatagrid
			columns={headers}
			setSortByAcs={setSortByAcs}
			sortByAcs={sortByAcs}
			selected={selected}
			data={data.data}
			paginate={paginate}
			setPaginate={setPaginate}
			selectedColonne={setSelectedColonne}
			total={data.meta.total}
		/>
	)
}

export default Datagrid
