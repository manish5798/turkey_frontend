import { useState } from "react";
import DataTable from "react-data-table-component";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Alert, Modal, ModalBody, ModalHeader } from "reactstrap";
import { SkipEndBtnFill } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";
import Switch from "react-switch";
import EditStudent from "./EditStudent";

const StudentTable = (props) => {
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
                Student Name
              </span>
            ),
            selector: (row) => row.student_name,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Father's Name
              </span>
            ),
            selector: (row) => row.father_name,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Mother's Name
              </span>
            ),
            selector: (row) => row.mother_name,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Phone Number
              </span>
            ),
            selector: (row) => row.phone_number,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Gender
              </span>
            ),
            selector: (row) => row.gender,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Address
              </span>
            ),
            selector: (row) => row.address,
            sortable: true,
          },
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
                Status
              </span>
            ),
            selector: (row) => row,
            cell: (value) => {
              return (
                // <button
                //       className="edit-item-btn"
                //       onClick={() => {
                //         setSelectedCustomer(value);
                //         setEditModal(true);
                //       }}
                //     >
                <Switch onChange={handleChange} checked={checked} />
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
                <button
                  className="edit-item-btn"
                  onClick={() => {
                    setSelectedCustomer(value);
                    setEditModal(true);
                  }}
                >
                  {/* <i className="ri-pencil-fill align-bottom me-2 text-muted"></i> */}
                  <PencilSquare style-={{ color: "#fff" }} />
                </button>
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
                >
                  {/* <i className="ri-pencil-fill align-bottom me-2 text-muted"></i> */}
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
          <EditStudent
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

export default StudentTable;
