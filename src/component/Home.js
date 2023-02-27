import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Table } from "antd";
import MainLayout from "./Layout";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAction } from "../redux/actions/user.action";

const Home = () => {
  const [dataList, setDataList] = useState();

  const location = useLocation();

  const resData = useSelector((state) => state.userData.dataSource);

  const dispatch = useDispatch();

  useEffect(() => {
    setDataList(resData);
  }, [dataList]);

  const removeData = (i) => {
    const temp = [...dataList];
    temp.splice(i, 1);
    dispatch(deleteAction(temp));
    setDataList(temp);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      onFilter: (value, info) => info.name.indexOf(value) === 0,
      sorter: (a, b) => a.name < b.name,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Actions",
      key: "action",
      render: (_, info, id) => (
        <Space size="middle">
          <Link to={`/update/${info.id}`}>Edit</Link>
          <Link to={`/user/${info.id}`}>View</Link>
          <Button type="link" onClick={() => removeData(id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const tableColumns = columns.map((item) => ({ ...item }));
  return (
    <MainLayout>
      <Row justify={"space-between"} align="middle">
        <Col>
          <h1>{`${location.state?.email}`}</h1>
        </Col>
        <Col>
          <Link to="/user">
            <Button type="primary">Add</Button>
          </Link>
        </Col>
      </Row>
      <Table
        sortDirections={["descend"]}
        columns={tableColumns}
        dataSource={dataList}
        pagination={{
          align: "center",
          pageSize: 4,
        }}
      />
    </MainLayout>
  );
};

export default Home;
