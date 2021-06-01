import React, { useState } from 'react';
import MainLayout from 'layout';
import { LeftOutlined, PlusCircleOutlined, RightOutlined } from '@ant-design/icons';
import CreditCards from '../../../public/images/credit-cards.svg';
import active from '../../../public/images/icons/active.svg';
import iconsMountain from '../../../public/images/icons/icons-mountain.svg';

const DashboardPage = () => {
  const [status, setStatus] = useState(50);

  return (
    <MainLayout>
      <div className="title">
        <h1>ini dashboard</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      </div>
      <div className="card-container">
        <div className="card-item card-shadow">
          <span className="title">Cards</span>
          <div className="card-body flex-row justify-between">
            <div className="slider">
              <img src={CreditCards} alt="credit-cards" />
              <LeftOutlined className="left" />
              <RightOutlined className="right" />
              <div className="payment-process">
                <div className="progress-bar">
                  <span style={{ width: `${status}%` }} />
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
        <div className="card-item">
          <span className="title">
            Goals
            <PlusCircleOutlined />
          </span>
          <div className="card-body">
            <LeftOutlined className="left-goals" />
            <RightOutlined className="right-goals" />
            <div className="goals-container">
              <div className="goals card-shadow">
                <div className="head-goals flex-columns">
                  <span className="price">
                    IDR 5000
                  </span>
                  <span className="date">23/02/2020</span>
                </div>
                <div className="footer-goals">
                  <img src={iconsMountain} alt="icon-one" />
                  Holiday
                </div>
              </div>
              <div className="space" />
              <div className="goals card-shadow">
                <div className="head-goals flex-columns">
                  <span className="price">
                    IDR 5000
                  </span>
                  <span className="date">23/02/2020</span>
                </div>
                <div className="footer-goals">
                  <img src={iconsMountain} alt="icon-one" />
                  Holiday
                </div>
              </div>
              <div className="space" />
              <div className="goals card-shadow">
                <div className="head-goals flex-columns">
                  <span className="price">
                    IDR 5000
                  </span>
                  <span className="date">23/02/2020</span>
                </div>
                <div className="footer-goals">
                  <img src={iconsMountain} alt="icon-one" />
                  Holiday
                </div>
              </div>
              <div className="space" />
              <div className="goals card-shadow">
                <div className="head-goals flex-columns">
                  <span className="price">
                    IDR 5000
                  </span>
                  <span className="date">23/02/2020</span>
                </div>
                <div className="footer-goals">
                  <img src={iconsMountain} alt="icon-one" />
                  Holiday
                </div>
              </div>
              <div className="space" />
              <div className="goals card-shadow">
                <div className="head-goals flex-columns">
                  <span className="price">
                    IDR 5000
                  </span>
                  <span className="date">23/02/2020</span>
                </div>
                <div className="footer-goals">
                  <img src={iconsMountain} alt="icon-one" />
                  Holiday
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
