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


const ReportTable = (props) => {
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
                Parents Name
              </span>
            ),
            selector: (row) => row.parents_name,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Picked Up / Not Picked
              </span>
            ),
            selector: (row) => row.picked,
            sortable: true,
          },
          {
            name: (
              <span
                className="font-weight-bold fs-13"
                style={{ fontSize: "18px", fontWeight: 700 }}
              >
                Date & Time
              </span>
            ),
            selector: (row) => row.date_time,
            sortable: true,
          },
        ]}
        data={props.customers}
        pagination={props.customers.length > 10 ? true : false}
      />

    </>
  );
};

export default ReportTable;
