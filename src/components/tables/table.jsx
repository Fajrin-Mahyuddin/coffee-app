import React from 'react';

const TBody = ({ data, headTable, keys }) => {
	const headerArr = Object.keys(headTable);

	return (
		<tr key={Math.random().toString(36).substr(2, 9)}>
			{console.log("1111", Math.random().toString(36).substr(2, 9))}
			{headerArr.map((list) => {
				console.log("222222", Math.random().toString(36).substr(2, 9))
				return <td key={Math.random().toString(36).substr(2, 9)}>{data[list]}</td>
			})}
		</tr>
	)
}

const Table = ({ headTable, dataTable = [] }) => {
	headTable ?? console.error('headTable of props table is', headTable);
	// data ?? console.error('data of props table is', data);
	return (
		<table className="tables">
			<thead>
				<tr>
					{Object.values(headTable).map((item1) => {
						return <td key={item1}>{item1}</td>
					})}
				</tr>
			</thead>
			<tbody>
				{dataTable.map((item2) => {
					console.log("333", Math.random().toString(36).substr(2, 9))
					return <TBody keys={Math.random().toString(36).substr(2, 9)} data={item2} headTable={headTable} />
				})}
			</tbody>
		</table>
	)
}

export default Table;
