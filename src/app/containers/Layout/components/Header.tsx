import { PageHeader } from "antd";

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];

const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Title"
      breadcrumb={{ routes }}
      subTitle="This is a subtitle"
    />
  );
};

export default Header;
