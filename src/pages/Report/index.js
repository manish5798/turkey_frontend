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
import { Plus, PlusCircle } from "react-bootstrap-icons";
import { Colxx } from "../../Components/Common/CustomBootstrap";
import data from "./ReportData.js";
import apiAuth from "../../helpers/ApiAuth";
import NotificationManager from "../../Components/Common/NotificationManager";
import ReportTable from "./ReportTable";

const Report = (props) => {
  document.title = "CRM Dashboard";

  const [createModal, setCreateModal] = useState(false);
  const [customers, setCustomers] = useState([]);

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

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="CRM" pageTitle="Dashboards" /> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "2%",
            }}
          >
            <Card
              className="p-3 rounded-4 text-center"
              style={{
                width: "fit-content",
                background: "#F4F4F4",
                color: "#7A7A7A",
              }}
            >
              <h5>TOTAL CUSTOMER</h5>
              <h3>255</h3>
            </Card>

            <img
              className="rounded-circle header-profile-user mt-3"
              src={avatar1}
              alt="Header Avatar"
              style={{ width: "65px", height: "60px" }}
            />
          </div>

          <div>
            <Row>
              <Colxx lg="12">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "2%",
                  }}
                >
                  <h3 style={{ color: "#7B7B7B" }}>
                    *Customer list by number of days remaining.
                  </h3>
                  <button
                    className="p-2 rounded-3"
                    style={{
                      background: "#617AFB",
                      color: "#fff",
                      border: "#617AFB",
                    }}
                    onClick={() => {
                      setCreateModal(true);
                    }}
                  >
                    <PlusCircle /> ADD CUSTOMER
                  </button>
                </div>
                <Card className="rounded-4 mt-5 w-100 h-100">
                  <ReportTable
                    customers={data}
                    // getCustomer={getCustomer}
                    deleteCustomer={deleteCustomer}
                    history={props.history}
                  />
                </Card>
              </Colxx>
              {/* <Colxx lg="3">
              <h3 style={{ color: "#7B7B7B" }}>*Customer Activities</h3>
                <Card className="p-3 rounded-4 w-100 h-100 mt-5" style={{background: "#7A7A7A"}}>

                </Card>
              </Colxx> */}
            </Row>
          </div>
        </Container>
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
