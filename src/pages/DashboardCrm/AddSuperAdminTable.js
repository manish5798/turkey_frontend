import React, { useEffect, useState } from "react";
import { Row, Button, Label } from "reactstrap";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import { Form } from "react-formik-ui";
import { Colxx, Separator } from "../../Components/Common/CustomBootstrap";
import apiAuth from "../../helpers/ApiAuth";
import NotificationManager from "../../Components/Common/NotificationManager";

const AddSuperAdminTable = (props) => {
  const [is_password_hidden, set_is_password_hidden] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProject = () => {
    setLoading(true);
    apiAuth
      .get("/api/project")
      .then((response) => {
        let data = response.data;
        console.log(response.data);
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <Row mb="4">
        <Colxx lg="12">
          <div className="card">
            <div className="card-body">
              <Formik
                initialValues={{
                  company_name: "",
                  authorized_name: "",
                  package: "",
                  remaining_months: "",
                }}
                validationSchema={Yup.object({
                  company_name: Yup.string()
                    .max(100, "Must be 50 characters or less")
                    .trim()
                    .required("Required"),
                })}
                onSubmit={(values, { resetForm }) => {
                  const url = "/api/customer/";
                  apiAuth
                    .post(url, values)
                    .then((response) => {
                      console.log(response.data);
                      if (response.status === 201) {
                        NotificationManager.success(
                          "",
                          `customer Added Successfully`,
                          3000,
                          null,
                          null,
                          ""
                        );
                        props.closeAddPopup();
                      } else {
                        NotificationManager.error(
                          "",
                          `customer Add Error`,
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
                        `customer Add Error`,
                        3000,
                        null,
                        null,
                        ""
                      );
                    });
                }}
              >
                {({ values, setFieldValue }) => (
                  <Form className="av-tooltip tooltip-label-bottom ">
                    <Row>
                      <Colxx lg="4">
                        {" "}
                        <div className="form-group mb-3">
                          <Label htmlFor="comapny_name">Company Name</Label>
                          <Field
                            className="form-control"
                            name="company_name"
                            placeholder="Company_name"
                            type="text"
                          />
                          <ErrorMessage
                            name="company_name"
                            render={(msg) => (
                              <div className="text-danger">{msg}</div>
                            )}
                          />
                        </div>
                      </Colxx>
                      <Colxx lg="4">
                        {" "}
                        <div className="form-group mb-3">
                          <Label htmlFor="authorized_name">
                            Authorized Name
                          </Label>
                          <Field
                            className="form-control"
                            name="authorized_name"
                            placeholder="Authorized Name"
                            type="text"
                          />
                          <ErrorMessage
                            name="authorized_name"
                            render={(msg) => (
                              <div className="text-danger">{msg}</div>
                            )}
                          />
                        </div>
                      </Colxx>
                      <Colxx lg="4">
                        {" "}
                        <div className="form-group mb-3">
                          <Label htmlFor="package">Package</Label>
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
                      <Colxx lg="4">
                        {" "}
                        <div className="form-group mb-3">
                          <Label htmlFor="remaining_months">
                            No. of Remaining months
                          </Label>
                          <Field
                            className="form-control"
                            name="remaining_months"
                            placeholder="No. of Remaining months"
                            type="text"
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
                        <span className="label">Add</span>
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
                )}
              </Formik>
            </div>
          </div>
        </Colxx>
      </Row>
    </>
  );
};

export default AddSuperAdminTable;
