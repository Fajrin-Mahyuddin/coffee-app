import React from 'react';

// const dataHistory = [
// 	{
// 		id: 1003,
// 		name: { cell: [<UserOutlined className="icon-td" />, "Fajrin"] },
// 		username: { cell: ["baco"], classCell: 'bg' },
// 		email: "baco@gmail.com",
// 		jumlah: 2,
// 		harga: 6000,
// 		keterangan: { cell: [<span className="label-danger label-sm">success</span>], classCell: "right" },
// 		action: {
// 			cell: [
// 				<SubmitBtn Icons={DeleteOutlined} loading={false} type="button" className="btn danger-btn xsm-btn mr-5" />,
// 				<SubmitBtn Icons={DeleteOutlined} loading={false} type="button" className="btn danger-btn xsm-btn" />
// 			],
// 			classCell: 'right'
// 		}
// 	},
// ];

// jika ingin menambah class gunakan object dengan keys cell(array) dan classCell(string)
// object keys CELL harus ber-type ARRAY
// gunakan object keys CELL(array) untuk menambah sebuah element HTML dalam cell
// gunakan classCell untuk memberikan style pada cell

const TdAction = (item, i) => {
	return <span key={i}>{item}</span>
}

const TBody = ({ data, headTable }) => {
	const headerArr = Object.keys(headTable);
	return (
		<tr>
			{headerArr.map((list, i) => {
				return typeof data[list] === "object" ?
					<td className={data[list]?.classCell} key={i}>{data[list].cell.map(TdAction)}</td> :
					<td key={i}>{data[list]}</td>
			})}
		</tr>
	)
}
const THead = ({ data }) => {
	return typeof data === "object" ?
		<td className={data.classCell}>{data.cell}</td> :
		<td>{data}</td>
};

const Table = ({ headTable, dataTable }) => {
	headTable ?? console.error('headTable of props table is', headTable);
	return (
		<table className="tables">
			<thead>
				<tr>
					{Object.values(headTable).map((item, i) => {
						return <THead key={i} data={item} />
					})}
				</tr>
			</thead>
			<tbody>
				{dataTable.map((item2) => {
					return <TBody key={Math.random().toString(36).substr(2, 9)} data={item2} headTable={headTable} />
				})}
			</tbody>
		</table>
	)
}

export default Table;
