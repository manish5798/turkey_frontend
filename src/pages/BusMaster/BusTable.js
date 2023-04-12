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
import EditBus from "./EditBus";

const BusTable = (props) => {
  const [editModal, setEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <>
      <DataTable
        columns={[
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Vehicle License Plate No.
              </span>
            ),
            selector: (row) => row.company_name,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Driver Name
              </span>
            ),
            selector: (row) => row.authorized_name,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Vendor Name
              </span>
            ),
            selector: (row) => row.package,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Driver Profile
              </span>
            ),
            selector: (row) => row.remaining_months,
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
            selector: (row) => row.remaining_months,
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
          <EditBus
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

export default BusTable;
