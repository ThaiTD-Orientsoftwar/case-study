import { useEffect } from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import { getEmployees } from "../../actions/GetEmployees";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
];

const TableList = (props: any) => {
  const { data, loading } = props;

  useEffect(() => {
    props.getEmployees();
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ defaultPageSize: 5 }}
      loading={loading}
    />
  );
};

const mapStateToProps = (state: any) => {
  const { getEmployees } = state;
  return {
    ...getEmployees,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEmployees: () => dispatch(getEmployees()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
