import React from 'react';
import { Table } from 'components';
import { MainLayout } from 'layout';
import { UserOutlined, DeleteOutlined } from '@ant-design/icons';

const OrderPage = () => {
  const convertAction = (data) => {
    return data.map(item =>
    ({
      icon: DeleteOutlined,
      fun: () => console.log("this is add function 1", item),
      label: "Add"
    })
    )
  }
  // const heads = [
  //   <input type="checkbox" />,
  //   "name",
  //   "username",
  //   "email",
  //   "keterangan",
  //   "action",
  // ];

  const heads = {
    name: "Nama",
    username: "UserName",
    email: "email",
    keterangan: "keterangan",
    action: "action",
  };

  const datas = [
    {
      id: 1000,
      name: "Fajrin",
      username: "fajrin",
      email: "fajrin@gmail.com",
      keterangan: "none",
      action: null,

    },
    {
      id: 1002,
      name: "mahyuddin",
      username: "mhy",
      email: "mhy@gmail.com",
      keterangan: "available",
      action: null,

    },
    {
      id: 1003,
      name: "tes",
      username: "baco",
      email: "baco@gmail.com",
      keterangan: "available",
      action: null,

    },
  ];
  return (
    <MainLayout>
      <MainLayout.Content
        title="List Orders"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      >
        <div className="card-shadow p-10">
          <Table headTable={heads} dataTable={datas} />
        </div>
      </MainLayout.Content>
    </MainLayout>
  )
};

export default OrderPage;
