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
import { EnvelopeAtFill, EnvelopeFill, File, Plus, PlusCircle } from "react-bootstrap-icons";
import { Colxx } from "../../Components/Common/CustomBootstrap";
import data from "./StudentData.js";
import apiAuth from "../../helpers/ApiAuth";
import NotificationManager from "../../Components/Common/NotificationManager";
import StudentTable from "./StudentTable";
import AddStudent from "./AddStudent";
import { FilePlusFill } from "react-bootstrap-icons";

const StudentMaster = (props) => {
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
                  <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top" style={{width: "80%", background: "#F3F3F3"}}>
                  <input
                    type="text"
                    placeholder="Search"
                    style={{ background: "#F3F3F3", color: "#7A7A7A"}}
                    // value={this.props.filter}
                    className="form-control"
                    // onChange={(text) => {
                    //   this.props.filter_func(text.target.value);
                    // }}
                  />
                </div>
                  <button
                    className="p-2 rounded-3"
                    style={{
                      background: "#7A7A7A",
                      color: "#fff",
                      border: "#617AFB",
                    }}
                    onClick={() => {
                      setCreateModal(true);
                    }}
                  >
                    <EnvelopeFill /> Send Email
                  </button>

                  <button
                    className="p-2 rounded-3"
                    style={{
                      background: "#7A7A7A",
                      color: "#fff",
                      border: "#617AFB",
                    }}
                    onClick={() => {
                      setCreateModal(true);
                    }}
                  >
                    <FilePlusFill /> Import
                  </button>
                </div>
                <Card className="rounded-4 mt-4">
                  <StudentTable
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

      <Modal
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
          <AddStudent
            closeAddPopup={() => {
              setCreateModal(false);
              // getTickets();
            }}
          />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default StudentMaster;
