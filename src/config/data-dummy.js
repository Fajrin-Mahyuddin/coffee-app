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
		jumlah: 2,
		harga: 6000,
		keterangan: {
			cell: [
				<span className="label-danger label-sm">success</span>
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
	email: "email",
	keterangan: "keterangan",
};

const headerHistoryTable = {
	name: "nama",
	email: "email",
	username: 'username',
	jumlah: 'jumlah (kg)',
	harga: 'harga (IDR)',
	keterangan: { cell: "keterangan", classCell: "right" },
};

export { headerForOrders, dataTables, headerDashboardTable, headerHistoryTable, dataHistory }