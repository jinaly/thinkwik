import { Button, Col, Input, Row, Form } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../redux/actions/user.action";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const userData = useSelector((state) => state.user.users);
  console.log(userData, "userdata");
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const existingUser = userData.find((user) => user.email === values.email);
      if (!existingUser) {
        return alert("please enter valid email and password");
      } else {
        dispatch(
          loginAction({
            existingUser,
          })
        );
        navigate("/home", {
          state: existingUser,
        });
      }
    } catch (error) {
      alert("Invalid user name or password");
    } finally {
      setIsLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row justify={"center"} style={{ height: "100vh" }} align="middle">
        <Col lg={6} md={8} sm={24}>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            validateMessages={validateMessages}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1>Login</h1>
            <Form.Item
              label="Email"
              name="email"
              //   value={fieldData.email}
              style={{ width: "100%" }}
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              //   value={fieldData.password}
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <span>
                Don't have an account <Link to="/signup">SignUP</Link>
              </span>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
