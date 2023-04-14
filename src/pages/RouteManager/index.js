import React, { useState } from "react";
import {
  Card,
  Container,
  Modal,
  Row,
  ModalHeader,
  ModalBody,
  Button,
  CardHeader,
  CardBody,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import GoogleMapReact from "google-map-react";
import avatar1 from "../../assets/images/users/user-dummy-img.jpg";
import { Colxx } from "../../Components/Common/CustomBootstrap";
import NotificationManager from "../../Components/Common/NotificationManager";
import { PlusCircleFill } from "react-bootstrap-icons";

const RouteManager = (props) => {
  document.title = "CRM Dashboard";

  const [createModal, setCreateModal] = useState(false);

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
          <h2 className="mb-5">Live Trips:-</h2>

          <div>
            <Row>
              <Colxx lg="9">
                <Card className="rounded-4 mt-4">
                  <div style={{ height: "100vh", width: "100%" }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "" }}
                      defaultCenter={defaultProps.center}
                      defaultZoom={defaultProps.zoom}
                    >
                      <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                      />
                    </GoogleMapReact>
                  </div>
                </Card>
              </Colxx>
              <Colxx lg="3">
                <div>
                  <Card
                    className="p-4 rounded-3 text-center"
                    style={{
                      width: "fit-content",
                      background: "#F3F3F3",
                    }}
                  >
                    <CardHeader
                      className="d-flex justify-content-between gap-3"
                      style={{ background: "#7A7A7A" }}
                    >
                      <h3 className="text-white">All Routes</h3>
                      <button>
                        <PlusCircleFill /> New Route
                      </button>
                    </CardHeader>
                    <CardBody>
                      <div className="d-flex gap-3 mb-4">
                        <button>Draft</button>
                        <button>Published</button>
                      </div>

                      <Card className="p-2" style={{background: "#D9D9D9"}}>
                        <div className="d-flex justify-content-between gap-5">
                            <h5>Uppal depot</h5>
                            <div className="d-flex gap-3">
                            <h5>5 KM</h5>
                            <h5>Radius</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between gap-5">
                            <p>Uppal depot</p>
                            <div className="d-flex gap-3">
                            <p>5 KM</p>
                            <p>Radius</p>
                            </div>
                        </div>
                      </Card>
                    </CardBody>
                  </Card>
                </div>
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
          {/* <AddSuperAdminTable
            closeAddPopup={() => {
              setCreateModal(false);
              // getTickets();
            }}
          /> */}
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default RouteManager;
