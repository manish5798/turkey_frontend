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
import NotificationManager from "../../Components/Common/NotificationManager";
import { CheckCircle, CheckCircleFill } from "react-bootstrap-icons";

const MyBilling = (props) => {
  document.title = "CRM Dashboard";

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="CRM" pageTitle="Dashboards" /> */}
          <h2 className="mb-5">Pro:-</h2>
          <Card
            className="p-4 rounded-4 text-center text-white mb-5"
            style={{
              width: "fit-content",
              background: "#7A7A7A",
            }}
          >
            <h5 className="text-white">Total Bus Driver</h5>
            <h3 className="text-white">10</h3>
          </Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "2%",
            }}
          >
            <Card
              className="p-4 rounded-4 text-center"
              style={{
                width: "fit-content",
                background: "#F3F3F3",
                color: "#000",
              }}
            >
              <h5>License Activation Date</h5>
              <h3>28/07/2022</h3>
            </Card>

            <Card
              className="p-4 rounded-4 text-center"
              style={{
                width: "fit-content",
                background: "#F3F3F3",
                color: "#000",
              }}
            >
              <h5>Next Billing Date</h5>
              <h3>28/07/2022</h3>
            </Card>

            <Card
              className="p-4 rounded-4 text-center"
              style={{
                width: "fit-content",
                background: "#F3F3F3",
                color: "#000",
              }}
            >
              <h5>Subscription Status</h5>
              <h3 style={{color: "#427946"}}><CheckCircleFill/> Active</h3>
            </Card>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MyBilling;
