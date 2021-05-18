import { useCallback, useEffect } from "react";
import { Table, Button } from "antd";
import { getEmployees, addEmployee } from "../../actions/employee";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";

const Header = styled("div")`
  margin-bottom: 10px;
  text-align: right;
`;

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
  const employees = useSelector((state: RootState) => state.employees);
  const dispatch = useDispatch();
  const {
    data,
    get: { loading: getLoading },
    add: { loading: addLoading },
  } = employees;

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const handleAddItem = useCallback(() => {
    dispatch(addEmployee());
  }, [dispatch]);

  return (
    <div>
      <Header>
        <Button
          type="primary"
          onClick={handleAddItem}
          size="large"
          loading={addLoading}
        >
          Add new
        </Button>
      </Header>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 5, showSizeChanger: false }}
        loading={getLoading}
      />
    </div>
  );
};

export default TableList;
