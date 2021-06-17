import React from 'react';
import { SubmitBtn } from 'components';
import { DeleteOutlined, UserOutlined } from '@ant-design/icons';

const headerForOrders = {
	name: "nama",
	username: "username",
	email: "email",
	keterangan: "keterangan",
	action: { cell: ["action"], classCell: "right" },
};

const dataTables = [

	{
		id: 1003,
		name: { cell: [<UserOutlined className="icon-td" />, "tes"] },
		username: "baco",
		email: "baco@gmail.com",
		keterangan: { cell: [<span className="label-success label-sm">new</span>] },
		action: {
			cell: [<SubmitBtn Icons={DeleteOutlined} loading={false} type="button" className="btn info-btn xsm-btn" />],
			classCell: "right"
		}
	},
	{
		id: 1003,
		name: { cell: [<UserOutlined className="icon-td" />, "tes"] },
		username: "baco",
		email: "baco@gmail.com",
		keterangan: { cell: [<span className="label-danger label-sm">cancel</span>] },
		action: {
			cell: [<SubmitBtn Icons={DeleteOutlined} loading={false} type="button" className="btn info-btn xsm-btn" />],
			classCell: "right"
		}
	},
	{
		id: 1003,
		name: { cell: [<UserOutlined className="icon-td" />, "tes"] },
		username: "baco",
		email: "baco@gmail.com",
		keterangan: { cell: [<span className="label-info label-sm">process</span>] },
		action: {
			cell: [<SubmitBtn Icons={DeleteOutlined} loading={false} type="button" className="btn info-btn xsm-btn" />],
			classCell: "right"
		}
	},
	{
		id: 1003,
		name: { cell: [<UserOutlined className="icon-td" />, "tes"] },
		username: "baco",
		email: "baco@gmail.com",
		keterangan: { cell: [<span className="label-danger label-sm">cancel</span>] },
		action: {
			cell: [<SubmitBtn Icons={DeleteOutlined} loading={false} type="button" className="btn info-btn xsm-btn" />],
			classCell: "right"
		}
	},
];

const dataHistory = [
	{
		id: 1003,
		name: { cell: [<UserOutlined className="icon-td" />, "Fajrin"] },
		username: "baco",
		email: "baco@gmail.com",
		date: "5 Juni 2021",
		total: 2,
		price: 6000,
		'pay method': {
			cell: [
				<span className="label-success label-sm">Transfer</span>
			]
		},
		keterangan: {
			cell: [
				<span className="label-danger label-sm">Cancel</span>
			],
			classCell: "right"
		},
		action: {
			cell: [
				<SubmitBtn Icons={UserOutlined} loading={false} type="button" className="btn info-btn xsm-btn mr-5" />,
				<SubmitBtn Icons={DeleteOutlined} loading={false} type="button" className="btn danger-btn xsm-btn" />
			],
			classCell: 'right'
		}
	},
	{
		id: 1003,
		name: { cell: [<UserOutlined className="icon-td" />, "Fajrin Mahyuddin"] },
		username: "fajrin",
		email: "fajrin@gmail.com",
		date: "10 Juni 2021",
		total: 5,
		price: 15000,
		'pay method': {
			cell: [
				<span className="label-primary label-sm">Cash</span>
			]
		},
		keterangan: {
			cell: [
				<span className="label-info label-sm">success</span>
			],
			classCell: "right"
		},
		action: {
			cell: [
				<SubmitBtn Icons={UserOutlined} loading={false} type="button" className="btn info-btn xsm-btn mr-5" />,
				<SubmitBtn Icons={DeleteOutlined} loading={false} type="button" className="btn danger-btn xsm-btn" />
			],
			classCell: 'right'
		}
	},
];

const headerDashboardTable = {
	name: "nama",
	date: "date",
	price: "price (IDR)",
	'pay method': "Pay Method",
};

const headerHistoryTable = {
	name: "nama",
	date: "date",
	username: 'username',
	total: 'total (kg)',
	price: 'price (IDR)',
	'pay method': 'pay method',
	keterangan: { cell: "keterangan", classCell: "right" },
};

export { headerForOrders, dataTables, headerDashboardTable, headerHistoryTable, dataHistory }