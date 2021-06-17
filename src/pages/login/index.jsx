import React, { useRef } from 'react';
import { StandartLayout } from 'layout';
import { Form, InputText, SubmitBtn } from 'components';
import { ImgSvgBike, SnowWindy, TornadoSvg } from 'image';
import { KeyOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

  const inputRef = useRef();
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submt', e);
  }

  return (
    <StandartLayout>
      <StandartLayout.Content>
        <div className="content-login">
          <div className="text-wrapper">
            <h2>
              Laundry App Login
            </h2>
            <p>Free pick up and delivery, keep stay at home !</p>
            <Form
              onSubmit={onSubmit}
              closeALert={(e) => console.log(e)}
              className="form-vertical mtb-20"
            >
              <InputText
                error={false}
                ref={inputRef}
                name="username"
                label="Username"
                id="username-input"
                Icons={UserOutlined}
                placeholder="Username"
                inputType="display-column"
                onChange={(e) => console.log(e)}
              />
              <InputText
                error={false}
                ref={inputRef}
                name="password"
                label="Password"
                id="password-input"
                Icons={KeyOutlined}
                placeholder="Password"
                inputType="display-column"
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
                  onClick={() => history.push('/guest')}
                />
              </div>
            </Form>
          </div>
          <div className="login-image">
            <SnowWindy />
            <ImgSvgBike />
            <TornadoSvg />
          </div>
        </div>
      </StandartLayout.Content>
    </StandartLayout>
  )
};

export default LoginPage;
