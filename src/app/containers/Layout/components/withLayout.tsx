import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, PageHeader, Divider } from "antd";

const { Header, Content, Sider } = Layout;

const tabs = {
  counter: {
    title: "Counter",
    key: ["1"],
  },
  list: {
    title: "Table List",
    key: ["2"],
  },
};

const PageLayout = (
  component: React.ReactElement,
  type: "counter" | "list"
) => {
  // const history = useHistory();
  const tabName = tabs[type].title;
  const tabKey = tabs[type].key;

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        className="header"
        style={{ color: "white", textAlign: "left", fontSize: "20px" }}
      >
        Case Study
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            defaultSelectedKeys={["1"]}
            selectedKeys={tabKey}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="1">
              <Link to="/">Counter</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="list">Table List</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <PageHeader
            className="site-page-header"
            title={tabName}
            style={{ textAlign: "left" }}
          />
          <Divider style={{ margin: 0 }} />
          <Content style={{ padding: "10px 10px" }}>{component}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
