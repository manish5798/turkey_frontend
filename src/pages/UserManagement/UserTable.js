import { useState } from "react";
import DataTable from "react-data-table-component";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Alert, Modal, ModalBody, ModalHeader } from "reactstrap";
import { ChatRightFill, CheckCircleFill, SkipEndBtnFill } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";
import Switch from "react-switch";
import EditUser from "./EditUser";

const UserTable = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
  };

  const tableCustomStyles = {
    headRow: {
      style: {
        color:'#fff',
        backgroundColor: '#7A7A7A'
      },
    },
    rows: {
      style: {
        color: "#7a7a7a",
        backgroundColor: "#f3f3f3"
      },
    }
  }


  return (
    <>
      <DataTable
      customStyles={tableCustomStyles}
        columns={[
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Email
              </span>
            ),
            selector: (row) => row.email,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Full Name
              </span>
            ),
            selector: (row) => row.full_name,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Phone No.
              </span>
            ),
            selector: (row) => row.phone,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Role
              </span>
            ),
            selector: (row) => row.role,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Add
              </span>
            ),
            selector: (row) => row,
            cell: (value) => {
              return (
                // <button
                //   className="edit-item-btn"
                //   onClick={() => {
                //     setSelectedCustomer(value);
                //     setEditModal(true);
                //   }}
                // >
                  <CheckCircleFill style={{ color: "#000" }} />
                // </button>
              );
            },
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                View
              </span>
            ),
            selector: (row) => row,
            cell: (value) => {
              return (
                // <button
                //   className="edit-item-btn"
                //   onClick={() => {
                //     setSelectedCustomer(value);
                //     setEditModal(true);
                //   }}
                // >
                  <CheckCircleFill style={{ color: "#000" }} />
                // </button>
              );
            },
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Edit
              </span>
            ),
            selector: (row) => row,
            cell: (value) => {
              return (
                // <button
                //   className="edit-item-btn"
                //   onClick={() => {
                //     setSelectedCustomer(value);
                //     setEditModal(true);
                //   }}
                // >
                  <CheckCircleFill style={{ color: "#000" }} />
                // </button>
              );
            },
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Delete
              </span>
            ),
            selector: (row) => row,
            cell: (value) => {
              return (
                <button
                  className="edit-item-btn"
                  onClick={() => props.deleteCustomer(value.id)}
                  style={{background: "#7a7a7a", color: "#fff"}}
                >
                  <TrashFill />
                </button>
              );
            },
          },
        ]}
        data={props.customers}
        pagination={props.customers.length > 10 ? true : false}
      />

      <Modal
        id="signupModals"
        tabIndex="-1"
        className="modal-lg"
        isOpen={editModal}
        toggle={() => {
          setEditModal((prev) => !prev);
        }}
      >
        <ModalHeader
          className="p-3"
          toggle={() => {
            setEditModal((prev) => !prev);
          }}
        >
          Edit Customer
        </ModalHeader>
        <ModalBody>
          <EditUser
            closeAddPopup={() => {
              setEditModal(false);
              setSelectedCustomer(null);
              // props.getCustomers();
            }}
            customerData={selectedCustomer}
            history={props.history}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserTable;
