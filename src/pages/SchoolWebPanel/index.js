import React from "react";
import { Card, Container } from "reactstrap";
import GoogleMapReact from "google-map-react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Colxx } from "../../Components/Common/CustomBootstrap";
import NotificationManager from "../../Components/Common/NotificationManager";
import Select from "react-select";

const SchoolWebPanel = () => {
  //   document.title = "CRM Dashboard";

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const excelOptions = [
    { value: "excel", label: "Excel" },
    { value: "excelFile", label: "Excel File" },
    { value: "pdfFile", label: "PDF File" },
    { value: "wordFile", label: "Word File" },
  ];

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
              className="p-5 rounded-4 text-center"
              style={{
                width: "fit-content",
                background: "#d9d9d9",
                color: "#7A7A7A",
              }}
            >
              <h5>Number of Student</h5>
              <h3 style={{ color: "#fff" }}>#1</h3>
            </Card>

            <Card
              className="p-5 rounded-4 text-center"
              style={{
                width: "fit-content",
                background: "#d9d9d9",
                color: "#7A7A7A",
              }}
            >
              <h5>Number of Buses</h5>
              <h3 style={{ color: "#fff" }}>#2</h3>
            </Card>

            <Card
              className="p-5 rounded-4 text-center"
              style={{
                width: "fit-content",
                background: "#d9d9d9",
                color: "#7A7A7A",
              }}
            >
              <h5>Number of Driver</h5>
              <h3 style={{ color: "#fff" }}>#3</h3>
            </Card>
          </div>

          <div className="d-flex gap-3 mb-4 mt-4">
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={excelOptions[0]}
              name="excel"
              options={excelOptions}
              styles={excelStyles}
            />

            <button style={{padding: "8px", borderRadius: "10px 10px", background: "#F5F5F5", color: "#7A7A7A"}}>Statistics</button>
          </div>

          <div>
            <Card>
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
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SchoolWebPanel;
