import { useEffect } from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import { getEmployees, addEmployee } from "../../actions/employee";

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
  const {
    data,
    get: { loading: getLoading },
    add: { loading: addLoading },
    getEmployees,
    addEmployee,
  } = props;

  useEffect(() => {
    getEmployees();
  }, []);

  const handleAddItem = () => {
    addEmployee();
  };

  return (
    <div>
      <div style={{ marginBottom: "10px", textAlign: "right" }}>
        <Button
          type="primary"
          onClick={handleAddItem}
          size="large"
          loading={addLoading}
        >
          Add new
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 5, showSizeChanger: false }}
        loading={getLoading}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { employees } = state;
  return {
    ...employees,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEmployees: () => dispatch(getEmployees()),
    addEmployee: () => dispatch(addEmployee()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
