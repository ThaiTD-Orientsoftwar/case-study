import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, PageHeader, Divider } from "antd";
import { routes } from "../../constants";
import styled from "styled-components";

const { Header, Content, Sider } = Layout;

const Container = styled(Layout)`
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  color: #fff;
  text-align: left;
  font-size: 20px;
`;

const StyledDivider = styled(Divider)`
  margin: 0;
`;

const StyledContent = styled(Content)`
  padding: 10px 10px;
`;

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

const withLayout = (
  component: React.ReactElement,
  type: "counter" | "list"
) => {
  // const history = useHistory();
  const tabName = tabs[type].title;
  const tabKey = tabs[type].key;

  return (
    <Container>
      <StyledHeader className="header">Case Study</StyledHeader>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            defaultSelectedKeys={["1"]}
            selectedKeys={tabKey}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="1">
              <Link to={routes.counter}>Counter</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={routes.tableList}>Table List</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <PageHeader className="site-page-header" title={tabName} />
          <StyledDivider />
          <StyledContent>{component}</StyledContent>
        </Layout>
      </Layout>
    </Container>
  );
};

export default withLayout;
