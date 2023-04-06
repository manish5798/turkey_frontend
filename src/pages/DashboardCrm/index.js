import React from "react";
import { Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";

const DashboardCrm = () => {
  document.title = "CRM Dashboard";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="CRM" pageTitle="Dashboards" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardCrm;
