import { useCallback, useEffect, useState } from "react";
import { Table, Button, Modal, Input, Form } from "antd";
import { getEmployees, addEmployee } from "../../actions/employee";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { get } from "lodash";

const Header = styled("div")`
  margin-bottom: 10px;
  text-align: right;
`;

const LIMIT = 5;

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
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const {
    data,
    total,
    page,
    get: { loading: getLoading },
    add: { loading: addLoading, error: addError },
  } = employees;
  useEffect(() => {
    dispatch(getEmployees({ page: 1, limit: LIMIT }));
  }, [dispatch]);

  useEffect(() => {
    if (!addLoading && !addError) setShowModal(false);
  }, [addLoading, addError]);

  const handleShowModal = useCallback(
    (value: boolean) => {
      setShowModal(value);
    },
    [setShowModal]
  );

  const handleAddItem = (values: {
    name: string;
    email: string;
    position: string;
  }) => {
    dispatch(addEmployee({ ...values, page }));
  };

  const handlePagination = (page: any, pageSize: any) => {
    const currentPage = get(page, "current", 1);
    dispatch(getEmployees({ page: currentPage, limit: LIMIT }));
  };

  return (
    <div>
      <Header>
        <Button
          type="primary"
          onClick={() => handleShowModal(true)}
          size="large"
        >
          Add new
        </Button>
      </Header>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: false,
          total: total,
        }}
        loading={getLoading}
        onChange={handlePagination}
      />
      <Modal
        title="Add Employee"
        visible={showModal}
        footer={null}
        onCancel={() => handleShowModal(false)}
      >
        <Form
          name="basic"
          initialValues={{ name: "", email: "", position: "" }}
          onFinish={handleAddItem}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, type: "email", message: "Email is required" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="position"
            rules={[{ required: true, message: "Position is required" }]}
          >
            <Input placeholder="Position" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={addLoading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TableList;
