import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import MainLayout from "./Layout";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import { useSelector, useDispatch } from "react-redux";
import { editAction } from "../redux/actions/user.action";

const UserUpdate = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const dataList = useSelector((state) =>
    state.userData.dataSource.find((data) => data.id == id)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      dispatch(editAction({ id, ...values }));
      navigate("/home");
    } catch (error) {
      alert("Invalid");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <MainLayout>
        {dataList && (
          <Form layout="vertical" initialValues={dataList} onFinish={onFinish}>
            <Row justify={"space-between"} align="middle">
              <Col>
                <h1>{`${dataList.name}`} Update</h1>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Description" name="description">
                  <TextArea max={4} />
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Update
            </Button>
          </Form>
        )}
      </MainLayout>
    </div>
  );
};

export default UserUpdate;
