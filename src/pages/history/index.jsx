import React from 'react';
import { MainLayout } from 'layout'
import { Table, Paginate } from 'components';
import { dataHistory, headerHistoryTable } from 'config/data-dummy';

const History = () => (
	<MainLayout>
		<MainLayout.Content title="history" desc="Daftar penjualan terakhir">
			<div className="card-shadow p-10">
				<Table headTable={headerHistoryTable} dataTable={dataHistory} />
				<Paginate />
			</div>
		</MainLayout.Content>
	</MainLayout>
);

export default History;
