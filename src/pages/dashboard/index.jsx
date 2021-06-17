/* eslint-disable arrow-body-style */
import React from 'react';
import { MainLayout } from 'layout';
import {
  LeftOutlined,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import {
  CreditCards,
  active,
  Cart,
  Car,
} from 'image';
import { dataHistory, headerDashboardTable } from 'config/data-dummy';
import { Table } from 'components';

const DashboardPage = () => {
  return (
    <MainLayout>
      <MainLayout.Content
        title="dashboard"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fuga"
      >
        <div className="card-container">
          <div className="card-item card-shadow">
            <span className="title-card">Cards</span>
            <div className="card-body flex-row justify-between">
              <div className="slider">
                <img src={CreditCards} alt="credit-cards" />
                <LeftOutlined className="left" />
                <RightOutlined className="right" />
                <div className="payment-process">
                  <div className="progress-bar">
                    <span style={{ width: '60%', backgroundColor: '#197BBD' }} />
                  </div>
                  <div className="label-progress-bar">
                    <span>Lorem ipsum dolor sit amet.</span>
                    <span>IDR 200 / 2000</span>
                  </div>
                </div>
              </div>
              <div className="amount">
                <div className="balance flex-columns">
                  <span>
                    <span>IDR</span>
                    1,000,000
                  </span>
                  <span>Current balance</span>
                </div>
                <div className="income flex-columns">
                  <span>
                    <span>IDR</span>
                    100,000
                  </span>
                  <span>Income</span>
                </div>
                <div className="income flex-columns">
                  <span>
                    <span>IDR</span>
                    100,000
                  </span>
                  <span>Income</span>
                </div>
                <div className="status flex-columns">
                  <img src={active} alt="active" />
                  <span>Deactive card</span>
                </div>
              </div>
            </div>
          </div>
          {/* end of 1th card */}
          <div className="card-item card-shadow">
            <span className="title-card">
              History of Transaction
            </span>
            <div className="card-body">
              <Table headTable={headerDashboardTable} dataTable={dataHistory} />
            </div>
          </div>
          {/* end of 2th card */}
          <div className="card-item card-shadow">
            <span className="title-card">
              List Users
            </span>
            <div className="card-body">
              <ul className="list-users">
                <li>
                  <img src={Car} alt="users" />
                  <i>Ani</i>
                </li>
                <li>
                  <img src={Cart} alt="users1" />
                  <i>Nona</i>
                </li>
                <li>
                  <img src={Car} alt="users2" />
                  <i>Leni</i>
                </li>
                <li>
                  <div className="button-wrapper">
                    <button type="button">
                      <PlusOutlined className="new-user" />
                    </button>
                  </div>
                  <i>Add New</i>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-item">
            <span className="title-card">
              Outcome Statistics
            </span>
            <div className="card-body">
              <div className="statistic">
                <img src={Cart} alt="cart" />
                <div className="statistic-bar">
                  <div className="progress-bar">
                    <span style={{ width: '80%', backgroundColor: '#197BBD' }} />
                  </div>
                  <div className="label-progress-bar">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </div>
                <div className="percentage-statistics">
                  80%
                </div>
              </div>
              <div className="statistic">
                <img src={Car} alt="cart" />
                <div className="statistic-bar">
                  <div className="progress-bar">
                    <span style={{ width: '20%', backgroundColor: '#209d43' }} />
                  </div>
                  <div className="label-progress-bar">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </div>
                <div className="percentage-statistics">
                  20%
                </div>
              </div>
              <div className="statistic">
                <img src={Cart} alt="cart" />
                <div className="statistic-bar">
                  <div className="progress-bar">
                    <span style={{ width: '60%', backgroundColor: '#FCAE73' }} />
                  </div>
                  <div className="label-progress-bar">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </div>
                <div className="percentage-statistics">
                  60%
                </div>
              </div>
            </div>
          </div>

        </div>
      </MainLayout.Content>
    </MainLayout>
  );
};

export default DashboardPage;
