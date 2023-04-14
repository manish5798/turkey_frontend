import React, { useState } from "react";
import {
  Card,
  Container,
  Modal,
  Row,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import avatar1 from "../../assets/images/users/user-dummy-img.jpg";
import {
  CalendarDate,
  CalendarDateFill,
  Plus,
  PlusCircle,
} from "react-bootstrap-icons";
import { Colxx } from "../../Components/Common/CustomBootstrap";
import data from "./ReportData.js";
import apiAuth from "../../helpers/ApiAuth";
import NotificationManager from "../../Components/Common/NotificationManager";
import ReportTable from "./ReportTable";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Report = (props) => {
  document.title = "CRM Dashboard";

  const [createModal, setCreateModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);

  const deleteCustomer = (id) => {
    let url = `/api/customer/${id}/`;
    apiAuth
      .delete(url)
      .then((response) => {
        NotificationManager.success(
          "",
          "Customer Deleted Successfully",
          3000,
          null,
          null,
          ""
        );
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response?.data);
        console.log(error.response?.status);
        console.log(error.response?.headers);
      });
  };

  const studentOptions = [
    { value: "student", label: "Selected Students" },
    { value: "studentOne", label: "Ronald Richards" },
    { value: "studentTwo", label: "Kathryn Murphy" },
    { value: "studentThree", label: "Jacob Jones" },
  ];

  const statusOptions = [
    { value: "status", label: "Status" },
    { value: "pickedUp", label: "Picked Up" },
    { value: "notPickedUp", label: "Not Picked Up" },
    { value: "arrived", label: "Arrived" },
  ];

  const excelOptions = [
    { value: "excel", label: "Excel" },
    { value: "excelFile", label: "Excel File" },
    { value: "pdfFile", label: "PDF File" },
    { value: "wordFile", label: "Word File" },
  ];

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      overflow: "hidden",
      color: "#7A7A7A !important",
      backgroundColor: "#D9D9D9",
    }),
    singleValue: (styles) => ({ ...styles, color: "#7A7A7A" }),
    menuList: (styles) => ({
      ...styles,
      background: "#D9D9D9",
      color: "#7a7a7a",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused ? "#7a7a7a" : isSelected ? "#7a7a7a" : undefined,
      color: isFocused ? "#fff" : isSelected ? "#fff" : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      background: "#7a7a7a",
      zIndex: 100,
    }),
  };

  const excelStyles = {
    control: (styles) => ({
      ...styles,
      overflow: "hidden",
      color: "#fff !important",
      backgroundColor: "#7A7A7A",
    }),
    singleValue: (styles) => ({ ...styles, color: "#fff" }),
    menuList: (styles) => ({
      ...styles,
      background: "#D9D9D9",
      color: "#7a7a7a",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused ? "#7a7a7a" : isSelected ? "#7a7a7a" : undefined,
      color: isFocused ? "#fff" : isSelected ? "#fff" : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      background: "#7a7a7a",
      zIndex: 100,
    }),
  };

  //Date

  const handleChange = (date) => {
    setStartDate(date);
  };

  const openDatePicker = () => {
    setDatePickerIsOpen(!datePickerIsOpen)
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="CRM" pageTitle="Dashboards" /> */}
          </Container>

          <div>
            <Row>
              <Colxx lg="12">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "2%",
                    marginTop: "3%",
                  }}
                >
                  <button
                    className="p-2 rounded-3"
                    style={{
                      background: "#D9D9D9",
                      color: "#7A7A7A",
                      border: "#D9D9D9",
                    }}
                    onClick={openDatePicker}
                  >
                    <CalendarDateFill /> Start Date
                  </button>
                  {/* <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    onClickOutside={openDatePicker}
                    open={datePickerIsOpen}
                  /> */}
                  <button
                    className="p-2 rounded-3"
                    style={{
                      background: "#D9D9D9",
                      color: "#7A7A7A",
                      border: "#D9D9D9",
                    }}
                    onClick={() => {
                      setCreateModal(true);
                    }}
                  >
                    <CalendarDateFill /> End Date
                  </button>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={studentOptions[0]}
                    name="student"
                    options={studentOptions}
                    styles={selectStyles}
                  />
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={statusOptions[0]}
                    name="status"
                    options={statusOptions}
                    styles={selectStyles}
                  />
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={excelOptions[0]}
                    name="excel"
                    options={excelOptions}
                    styles={excelStyles}
                  />
                  <button
                    className="p-2 rounded-3"
                    style={{
                      background: "#7A7A7A",
                      color: "#fff",
                      border: "#7A7A7A",
                    }}
                    onClick={() => {
                      setCreateModal(true);
                    }}
                  >
                    Apply
                  </button>
                </div>
                <Card className="rounded-4 mt-4">
                  <ReportTable
                    customers={data}
                    // getCustomer={getCustomer}
                    deleteCustomer={deleteCustomer}
                    history={props.history}
                  />
                </Card>
              </Colxx>
            </Row>
          </div>
       
      </div>

      {/* <Modal
        id="signupModals"
        tabIndex="-1"
        className="modal-lg"
        isOpen={createModal}
        toggle={() => {
          setCreateModal((prev) => !prev);
        }}
      >
        <ModalHeader
          className="p-3"
          toggle={() => {
            setCreateModal((prev) => !prev);
          }}
        >
          Add Ticket
        </ModalHeader>
        <ModalBody>
          <AddShiftMaster
            closeAddPopup={() => {
              setCreateModal(false);
              // getTickets();
            }}
          />
        </ModalBody>
      </Modal> */}
    </React.Fragment>
  );
};

export default Report;
