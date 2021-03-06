import React from 'react';
import { Table, Paginate, InputWithButton } from 'components';
import { MainLayout } from 'layout';
import { RightOutlined, SearchOutlined } from '@ant-design/icons';
import { dataTables, headerForOrders } from 'config/data-dummy';

const OrderPage = () => (
  <MainLayout>
    <MainLayout.Content
      title="List Orders"
      desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    >
      <div className="card-shadow p-10">
        <div className="search-form mtb-10">
          <InputWithButton className="input-group" placeholder="search" icon={SearchOutlined} />
        </div>
        <Table headTable={headerForOrders} dataTable={dataTables} loading={false} />
        <Paginate />
      </div>
    </MainLayout.Content>
  </MainLayout>
);

export default OrderPage;
