import React, { useState } from "react";
import { Button, Col, Input, Row, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { signupAction } from "../redux/actions/user.action";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const userData = useSelector((state) => state.user.users);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateMessages = {
    required: "${name} is required!",
    types: {
      text: "${label} is not valid",
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
      const existingUsers = userData.find(
        (user) => user.email === values.email
      );
      if (existingUsers) {
        return alert("User already exist");
      } else {
        dispatch(
          signupAction({
            email: values.email,
            name: values.name,
            password: values.password,
          })
        );
        navigate("/");
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
            <h1>Signup</h1>
            <Form.Item
              label="Name"
              name="name"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,

                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
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
                Already a user <Link to="/">LOGIN</Link>
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

export default Signup;
