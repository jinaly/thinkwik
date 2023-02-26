import React from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/user.action";
import { Button, Layout, Menu, theme } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const items2 = [HomeOutlined].map((icon) => {
  return {
    key: `sub`,
    icon: React.createElement(icon),
    label: `Home`,
  };
});

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <div>
      <Layout>
        <Header className="header">
          <Menu theme="dark" mode="horizontal">
            <div>
              <Button type="primary" htmlType="submit" onClick={onLogout}>
                Logout
              </Button>
            </div>
          </Menu>
        </Header>
        <Layout
          style={{ height: "100vh", maxHeight: "87vh", marginTop: "2rem" }}
        >
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                maxHeight: "100%",
                background: colorBgContainer,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
