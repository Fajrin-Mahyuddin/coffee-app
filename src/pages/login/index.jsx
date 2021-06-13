import React, { useRef } from 'react';
import { StandartLayout } from 'layout';
import { Form, InputText, SubmitBtn } from 'components';
import { ImgSvgBike, SnowWindy, TornadoSvg } from 'image';
import { KeyOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';

const LoginPage = () => {
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('oke', e);
  }
  return (
    <StandartLayout>
      <div className="content container">
        <div className="text-wrapper">
          <h2>
            Laundry App Login
          </h2>
          <p>Free pick up and delivery, keep stay at home !</p>
          <Form
            onSubmit={onSubmit}
            closeALert={(e) => console.log(e)}
            className="form-vertical mtb-20"
            alert={{ type: 'success', body: "Something Error !" }}
          >
            <InputText
              ref={inputRef}
              id="username-input"
              name="username"
              placeholder="Username"
              error={true}
              label="Username"
              inputType="display-column"
              Icons={UserOutlined}
              onChange={(e) => console.log(e)}
            />
            <InputText
              ref={inputRef}
              id="password-input"
              name="password"
              placeholder="Password"
              error={false}
              label="Password"
              inputType="display-column"
              Icons={KeyOutlined}
              onChange={(e) => console.log(e)}
            />
            <div className="display-horizontal mtb-10">
              <SubmitBtn
                type="submit"
                label="Submit"
                loading={false}
                disabled={false}
                Icons={SendOutlined}
                className="btn primary-btn sm-btn mr-5"
              />
            </div>
          </Form>
        </div>
        <div className="image-wrapper">
          <SnowWindy />
          <ImgSvgBike />
          <TornadoSvg />
        </div>
      </div>
    </StandartLayout>
  )
};

export default LoginPage;
