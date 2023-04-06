import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const BreadCrumb = ({
  title,
  pageTitle,
  add_new,
  add_new_label,
  add_new_url,
  add_url_popup,
  createNew,
  history,
  back_button,
}) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">{title}</h4>

            <div className="page-title-right">
              {/* <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link to="#">{pageTitle}</Link>
                </li>
                <li className="breadcrumb-item active">{title}</li>
              </ol> */}

              {back_button ? (
                <div className="top-right-button-container float-right">
                  <Button
                    className="btn btn-light float-right"
                    onClick={history.goBack}
                  >
                    Back
                  </Button>
                </div>
              ) : (
                <></>
              )}

              {add_new ? (
                <div className="top-right-button-container float-right ml-1">
                  {add_url_popup ? (
                    <Button onClick={() => createNew()}>Create</Button>
                  ) : (
                    <NavLink
                      to={add_new_url}
                      className="btn btn-sm btn-primary"
                    >
                      {add_new_label ? add_new_label : "Create"}
                    </NavLink>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumb;
