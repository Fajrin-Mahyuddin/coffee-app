import React from 'react';
import { MainLayout } from 'layout'
import { Table, Paginate, InputWithButton } from 'components';
import { dataHistory, headerHistoryTable } from 'config/data-dummy';
import { SearchOutlined } from '@ant-design/icons';

const History = () => (
	<MainLayout>
		<MainLayout.Content title="history" desc="Daftar penjualan terakhir">
			<div className="card-shadow p-10">
				<div className="search-form mtb-10">
					<InputWithButton className="input-group" placeholder="search" Icon={SearchOutlined} />
				</div>
				<Table headTable={headerHistoryTable} dataTable={dataHistory} loading={false} />
				<Paginate />
			</div>
		</MainLayout.Content>
	</MainLayout>
);

export default History;
