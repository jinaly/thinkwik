import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Input, Row } from "antd";
import MainLayout from "./Layout";
import { useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";

const UserDetails = () => {
  const { id } = useParams();
  const dataList = useSelector((state) => state.userData.dataSource.find((data) => data.id == id));

  const navigate = useNavigate();

  const onClose = () => {
    navigate("/home");
  };

  return (
    <div>
      <MainLayout>
        {dataList && (
          <Form layout="vertical" initialValues={dataList} disabled={true}>
            <Row justify={"space-between"} align="middle">
              <Col>
                <h1>{`${dataList.name}`}'s Details</h1>
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
          </Form>
        )}
        <div>
          {" "}
          <Button type="primary" htmlType="submit" onClick={onClose}>
            Back
          </Button>
        </div>
      </MainLayout>
    </div>
  );
};

export default UserDetails;
