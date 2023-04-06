import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "reactstrap";

import AuthSlider from "../authCarousel";
import { Formik, Form, Field } from "formik";
import { apiError, registerPublicUser } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import NotificationManager from "../../../Components/Common/NotificationManager";

const CoverSignUp = (props) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { logError } = useSelector((state) => ({
    logError: state.Login.error,
  }));

  useEffect(() => {
    if (logError) {
      NotificationManager.error("", logError, 3000, null, null, "");
      dispatch(apiError(""));
    }
  }, [logError]);

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter your email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    let regExp = new RegExp(
      "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$"
    );

    if (!value) {
      error = "Please enter your password";
    } else if (value.length < 6) {
      error = "Value must be longer than 5 characters";
    } else if (!regExp.test(value)) {
      error =
        "Password must have at least One Uppercase, One Number, One Lowercase, And One Special Character";
    }

    return error;
  };

  return (
    <React.Fragment>
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        <div className="auth-page-content overflow-hidden pt-lg-5">
          <Container>
            <Row>
              <Col lg={12}>
                <Card className="overflow-hidden m-0">
                  <Row className="justify-content-center g-0">
                    <AuthSlider />

                    <Col lg={6}>
                      <div className="p-lg-5 p-4">
                        <div className="text-center">
                          <h5>ADD SCHOOL</h5>
                          <p className="text-muted">
                            It is a long established fact that a reader readable
                            content of a page when looking at its layout. <i className="fas fa-heart"></i>
                          </p>
                        </div>

                        <div className="mt-4">
                          <Formik
                            initialValues={{
                              email: "manish@darsa.ai",
                              password: "efgH123$",
                              first_name: "Manish",
                              mobile: undefined,
                            }}
                            onSubmit={(values) => {
                              values.mobile = values.mobile
                                ? values.mobile
                                : undefined;
                              dispatch(
                                registerPublicUser(values, props.history)
                              );
                            }}
                          >
                            {({ errors, touched }) => (
                              <Form className="av-tooltip tooltip-label-bottom">
                                <div className="mb-2">
                                  {/* <label
                                    htmlFor="useremail"
                                    className="form-label"
                                  >
                                    Email <span className="text-danger">*</span>
                                  </label> */}
                                  <Field
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email ID:-"
                                    validate={validateEmail()}
                                    style={{
                                      background: "#EEEEEE",
                                      borderRadius: "10px",
                                    }}
                                  />
                                  {errors.email && touched.email && (
                                    <div className="invalid-feedback d-block">
                                      {errors.email}
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <Button
                                    className="float-end mb-1"
                                    style={{
                                      background: "#7A7A7A",
                                      border: "#7A7A7A",
                                    }}
                                  >
                                    Generate Password
                                  </Button>
                                </div>

                                <div className="mb-3">
                                  {/* <label
                                    className="form-label"
                                    htmlFor="password-input"
                                  >
                                    Password{" "}
                                    <span className="text-danger">*</span>
                                  </label> */}
                                  <div className="position-relative auth-pass-inputgroup">
                                    <Field
                                      className="form-control"
                                      type={showPassword ? "text" : "password"}
                                      name="password"
                                      placeholder="Enter Password:-"
                                      validate={validatePassword()}
                                      style={{
                                        background: "#EEEEEE",
                                        borderRadius: "10px",
                                      }}
                                    />

                                    <div
                                      className={[
                                        "btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted pt-5",
                                      ].join(" ")}
                                      onClick={() => {
                                        setShowPassword((prev) => !prev);
                                      }}
                                      id="password-addon"
                                    >
                                      <i
                                        className={[
                                          showPassword
                                            ? "ri-eye-close-line"
                                            : "ri-eye-fill",
                                          "align-middle",
                                        ].join(" ")}
                                      ></i>
                                    </div>

                                    {errors.password && touched.password && (
                                      <div className="invalid-feedback d-block">
                                        {errors.password}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <Row>
                                    <Col>
                                      <Field
                                        className="form-control float-start"
                                        name="firstName"
                                        placeholder="First Name:-"
                                        style={{
                                          background: "#EEEEEE",
                                          borderRadius: "10px",
                                        }}
                                      />
                                    </Col>
                                    <Col>
                                      <Field
                                        className="form-control float-end"
                                        name="lastName"
                                        placeholder="Last Name:-"
                                        style={{
                                          background: "#EEEEEE",
                                          borderRadius: "10px",
                                        }}
                                      />
                                    </Col>
                                  </Row>
                                </div>

                                <div className="mb-3">
                                  <Field
                                    className="form-control"
                                    name="schoolName"
                                    placeholder="School Name:-"
                                    style={{
                                      background: "#EEEEEE",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </div>

                                <div className="mb-3">
                                  <Row>
                                    <Col>
                                      <Field
                                        className="form-control float-start"
                                        name="contact"
                                        placeholder="Contact:-"
                                        style={{
                                          background: "#EEEEEE",
                                          borderRadius: "10px",
                                        }}
                                      />
                                    </Col>
                                    <Col>
                                      <Field
                                        className="form-control float-end"
                                        name="contactNo"
                                        placeholder="Contact No:-"
                                        style={{
                                          background: "#EEEEEE",
                                          borderRadius: "10px",
                                        }}
                                      />
                                    </Col>
                                  </Row>
                                </div>

                                <div className="mb-3">
                                  <Field
                                    className="form-control"
                                    name="address"
                                    placeholder="Address:-"
                                    style={{
                                      background: "#EEEEEE",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </div>

                                <div className="mb-3">
                                  <Field
                                    as="select"
                                    className="form-control text-muted"
                                    name="city"
                                    style={{
                                      background: "#EEEEEE",
                                      borderRadius: "10px",
                                    }}
                                  >
                                    <option value="" className="">Select City:-</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="hyderabad">Hyderabad</option>
                                  </Field>
                                </div>

                                <div className="mb-5">
                                  <Row>
                                    <Col>
                                      <Field
                                        className="form-control float-start"
                                        name="state"
                                        placeholder="State:-"
                                        style={{
                                          background: "#EEEEEE",
                                          borderRadius: "10px",
                                        }}
                                      />
                                    </Col>
                                    <Col>
                                      <Field
                                        className="form-control float-end"
                                        name="country"
                                        placeholder="Country:-"
                                        style={{
                                          background: "#EEEEEE",
                                          borderRadius: "10px",
                                        }}
                                      />
                                    </Col>
                                  </Row>
                                </div>

                                <div className="text-center">
                                  <Button
                                    // color="success"
                                    // className="w-100"
                                    type="submit"
                                    style={{
                                      background: "#7A7A7A",
                                      border: "#7A7A7A",
                                      width: "230px",
                                      height: "40px",
                                      borderRadius: "10px",
                                    }}
                                  >
                                    Add School
                                  </Button>
                                </div>

                                {/* <div className="mt-4 text-center">
                                  <div className="signin-other-title">
                                    <h5 className="fs-13 mb-4 title text-muted">
                                      Create account with
                                    </h5>
                                  </div>

                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-icon waves-effect waves-light me-1"
                                    >
                                      <i className="ri-facebook-fill fs-16"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-icon waves-effect waves-light me-1"
                                    >
                                      <i className="ri-google-fill fs-16"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-dark btn-icon waves-effect waves-light me-1"
                                    >
                                      <i className="ri-github-fill fs-16"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-info btn-icon waves-effect waves-light"
                                    >
                                      <i className="ri-twitter-fill fs-16"></i>
                                    </button>
                                  </div>
                                </div> */}
                              </Form>
                            )}
                          </Formik>
                        </div>

                        {/* <div className="mt-5 text-center">
                          <p className="mb-0">
                            Already have an account ?{" "}
                            <Link
                              to="/auth-signin-cover"
                              className="fw-semibold text-primary text-decoration-underline"
                            >
                              {" "}
                              Signin
                            </Link>{" "}
                          </p>
                        </div> */}
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <footer className="footer">
          <Container>
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <p className="mb-0">
                    &copy; {new Date().getFullYear()} Velzon. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </footer> */}
      </div>
    </React.Fragment>
  );
};

export default CoverSignUp;
