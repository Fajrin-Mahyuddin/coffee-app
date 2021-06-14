import React from 'react'

const Cells = ({ head, data }) => {
	for (const key in head) {
		return (
			<td>{ }</td>
		)
	}
}

const Table = ({ head, data }) => {

	const heads = [
		{ id: 1, name: "name" },
		{ id: 2, name: "username" },
		{ id: 3, name: "keterangan" },
		{ id: 4, name: "action" },
	]

	return (
		<table>
			<thead>
				<tr>
					{heads.map((item, i) => {
						return (
							<th>{item.name}</th>
						)
					})}
				</tr>
			</thead>
			<tbody>
				{/* {data.map((item, i) => {
					return (
						<tr key={i}>
							<Cells head={head} data={item} />
						</tr>
					)
				})} */}
			</tbody>
		</table>
	)
}

export default Table;
