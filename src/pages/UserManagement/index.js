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
import data from "./UserData.js";
import apiAuth from "../../helpers/ApiAuth";
import NotificationManager from "../../Components/Common/NotificationManager";
import UserTable from "./UserTable";
import AddUser from "./AddUser";

const UserManagement = (props) => {
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
                <Card className="rounded-4 mt-4">
                  <UserTable
                    customers={data}
                    // getCustomer={getCustomer}
                    deleteCustomer={deleteCustomer}
                    history={props.history}
                  />
                </Card>
              </Colxx>
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
          <AddUser
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

export default UserManagement;
