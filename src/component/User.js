import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./Layout";
import { Button, Col, Form, Input, Row } from "antd";
import { useDispatch } from "react-redux";
import { addAction } from "../redux/actions/user.action";
import TextArea from "antd/es/input/TextArea";
import { v4 as uuid } from "uuid";

const User = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateMessages = {
    required: "${label} is required!",
    types: {
      text: "${label} is not valid",
      email: "${label} is not a valid email!",
    },
  };

  const onFinish = async (values, i) => {
    setIsLoading(true);
    const uniqId = uuid();
    try {
      dispatch(
        addAction({
          id: uniqId,
          name: values.name,
          email: values.email,
          description: values.description,
        })
      );
      navigate("/home");
    } catch (error) {
      alert("Invalid");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Row justify={"space-between"} align="middle">
          <Col>
            <h1>Add New User</h1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea max={4} />
            </Form.Item>
          </Col>

          <Row justify={"space-between"} align="middle">
            <Col>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Add User
              </Button>
            </Col>
          </Row>
        </Row>
      </Form>
    </MainLayout>
  );
};

export default User;
