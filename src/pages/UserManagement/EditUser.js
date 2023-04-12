import React, { useEffect, useState } from "react";
import { Row, Button, Label } from "reactstrap";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import { Form } from "react-formik-ui";
import { Colxx, Separator } from "../../Components/Common/CustomBootstrap";
import apiAuth from "../../helpers/ApiAuth";
import NotificationManager from "../../Components/Common/NotificationManager";

const EditUser = (props) => {
  console.log(props.customerData, "customerData");
  return (
    <>
      {props.customerData ? (
        <Row mb="4">
          <Colxx lg="12">
            <div className="card">
              <div className="card-body">
                <Formik
                  initialValues={{
                    company_name: props.userData?.company_name
                      ? props.userData?.company_name
                      : "",
                    authorized_name: props.userData?.authorized_name
                      ? props.userData?.authorized_name
                      : "",
                    package: props.userData?.package
                      ? props.userData?.package
                      : "",
                    remaining_months: props.userData?.remaining_months
                      ? props.userData?.remaining_months
                      : "",
                  }}
                  validationSchema={Yup.object({
                    company_name: Yup.string()
                      .max(100, "Must be 100 characters or less")
                      .trim()
                      .required("Required"),
                    authorized_name: Yup.string()
                      .max(100, "Must be 100 characters or less")
                      .trim()
                      .required("Required"),
                    package: Yup.string()
                      .max(100, "Must be 100 characters or less")
                      .trim()
                      .required("Required"),
                    remaining_months:  Yup.string().required("Required"),
                  })}
                  onSubmit={(values, { resetForm }) => {
                    const url = `/api/customer/${props.customerData?.id}/`;
                    apiAuth
                      .patch(url, values)
                      .then((response) => {
                        if (response.status === 200) {
                          NotificationManager.success(
                            "",
                            `customer Updated Successfully`,
                            3000,
                            null,
                            null,
                            ""
                          );
                          props.closeAddPopup();
                        } else {
                          NotificationManager.error(
                            "",
                            `customer Update Error`,
                            3000,
                            null,
                            null,
                            ""
                          );
                        }
                      })
                      .catch((error) => {
                        NotificationManager.error(
                          "",
                          `customer Update Error`,
                          3000,
                          null,
                          null,
                          ""
                        );
                      });
                  }}
                >
                  <Form className="av-tooltip tooltip-label-bottom ">
                    <Row>
                      <Colxx lg="6">
                        <div className="form-group mb-3">
                          <Label htmlFor="company_name">Company Name</Label>
                          <Field
                            className="form-control"
                            name="company_name"
                            type="text"
                            placeholder="Company Name"
                          />

                          <ErrorMessage
                            name="company_name"
                            render={(msg) => (
                              <div className="text-danger">{msg}</div>
                            )}
                          />
                        </div>
                      </Colxx>
                      <Colxx lg="6">
                        <div className="form-group mb-3">
                          <Label htmlFor="authorized_name">
                            authorized Name
                          </Label>

                          <Field
                            className="form-control"
                            name="authorized_name"
                            type="text"
                            placeholder="Authorized Name"
                          />

                          <ErrorMessage
                            name="authorized_name"
                            render={(msg) => (
                              <div className="text-danger">{msg}</div>
                            )}
                          />
                        </div>
                      </Colxx>

                      <Colxx lg="6">
                        {" "}
                        <div className="form-group mb-3">
                          <Label htmlFor="first_name">Package</Label>
                          <Field
                            className="form-control"
                            name="package"
                            placeholder="Package"
                            type="text"
                          />
                          <ErrorMessage
                            name="package"
                            render={(msg) => (
                              <div className="text-danger">{msg}</div>
                            )}
                          />
                        </div>
                      </Colxx>

                      <Colxx lg="6">
                        {" "}
                        <div className="form-group mb-3">
                          <Label htmlFor="remaining_months">
                            No. of Remaining moths
                          </Label>
                          <Field
                            className="form-control"
                            name="remaining_months"
                            placeholder="No. of Remaining months"
                            type="number"
                          />
                          <ErrorMessage
                            name="remaining_months"
                            render={(msg) => (
                              <div className="text-danger">{msg}</div>
                            )}
                          />
                        </div>
                      </Colxx>
                    </Row>

                    <Separator className="mb-4 mt-4" />
                    <div className="d-flex justify-content-between">
                      <Button
                        type="submit"
                        color="primary"
                        className={`btn-shadow btn-multiple-state  ${
                          props.loading ? "show-spinner" : ""
                        }`}
                        size="lg"
                      >
                        <span className="spinner d-inline-block">
                          <span className="bounce1" />
                          <span className="bounce2" />
                          <span className="bounce3" />
                        </span>
                        <span className="label">Update</span>
                      </Button>{" "}
                      <Button
                        className="btn btn-light float-right"
                        type="reset"
                        onClick={() => props.closeAddPopup()}
                      >
                        {" "}
                        Cancel{" "}
                      </Button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </Colxx>
        </Row>
      ) : (
        <></>
      )}
    </>
  );
};

export default EditUser;
