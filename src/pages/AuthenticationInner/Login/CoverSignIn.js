import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Input, Label, Row, Button } from "reactstrap";
import AuthSlider from "../authCarousel";
import { Formik, Form, Field } from "formik";
import { apiError, loginUser } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import NotificationManager from "../../../Components/Common/NotificationManager";

const CoverSignIn = (props) => {
  const dispatch = useDispatch();
  const { logError } = useSelector((state) => ({
    logError: state.Login.error,
  }));
  const [showPassword, setShowPassword] = useState(false);
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
                <Card className="overflow-hidden">
                  <Row className="g-0">
                    <AuthSlider />

                    <Col lg={6}>
                      <div className="p-lg-5 p-5">
                        <div className="text-center mt-5 mb-5">
                          <h5>LOGIN</h5>
                          <p className="text-muted">
                            It is a long established fact that a reader readable
                            content of a page when looking at its layout.
                          </p>
                        </div>

                        <div className="mt-4">
                          <Formik
                            initialValues={{
                              email: "manish@darsa.ai",
                              password: "efgH123$",
                            }}
                            onSubmit={(values) => {
                              dispatch(loginUser(values, props.history));
                            }}
                          >
                            {({ errors, touched }) => (
                              <Form className="av-tooltip tooltip-label-bottom">
                                <div className="mb-4">
                                  {/* <Label htmlFor="email" className="form-label">
                                    Username
                                  </Label> */}
                                  <Field
                                    className="form-control"
                                    name="email"
                                    placeholder="Email ID / Phone Number :-"
                                    validate={validateEmail()}
                                    style={{background: "#EEEEEE", borderRadius: "10px"}}
                                  />
                                  {errors.email && touched.email && (
                                    <div className="invalid-feedback d-block">
                                      {errors.email}
                                    </div>
                                  )}
                                </div>

                                <div className="mb-3">
                                  {/* <Label
                                    className="form-label"
                                    htmlFor="password-input"
                                  >
                                    Password
                                  </Label> */}
                                  <div className="position-relative auth-pass-inputgroup mb-3">
                                    <Field
                                      className="form-control"
                                      type={showPassword ? "text" : "password"}
                                      name="password"
                                      placeholder="Enter Password:-"
                                      validate={validatePassword()}
                                      style={{background: "#EEEEEE", borderRadius: "10px"}}
                                    />

                                    <div
                                      className={[
                                        "btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted pt-2",
                                      ].join(" ")}
                                      onClick={(e) => {
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
                                {/* <div className="mb-3">
                                  <ReCAPTCHA
                                    sitekey="6Leh5cQgAAAAAHpzzpmfjLfoKujP0xGYiNEfrQoR"
                                    onChange={(e) => {
                                      console.log("Captcha", e);
                                    }}
                                  />
                                </div> */}

                                <div className="form-check mb-5">
                                  <Input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="auth-remember-check"
                                    style={{background: "#D9D9D9"}}
                                  />
                                  <Label
                                    className="form-check-label text-muted"
                                    htmlFor="auth-remember-check"
                                  >
                                    Remember me
                                  </Label>
                                  <div className="float-end">
                                    <Link
                                      to="/auth-pass-reset-cover"
                                      className="text-muted"
                                    >
                                      Forgot password?
                                    </Link>
                                  </div>
                                </div>

                                <div className="mt-4 text-center mb-5">
                                  <Button
                                    // color="success"
                                    // className="w-100"
                                    type="submit"
                                    style={{background: "#7A7A7A", border: "#7A7A7A", width: "230px", height: "40px", borderRadius: "10px"}}
                                  >
                                    Login
                                  </Button>
                                </div>

                                {/* <div className="mt-4 text-center">
                                  <div className="signin-other-title">
                                    <h5 className="fs-14 mb-4 title">
                                      Sign In with
                                    </h5>
                                  </div>

                                  <div>
                                    <Button
                                      color="primary"
                                      className="btn-icon me-1"
                                    >
                                      <i className="ri-facebook-fill fs-16"></i>
                                    </Button>
                                    <Button
                                      color="danger"
                                      className="btn-icon me-1"
                                    >
                                      <i className="ri-google-fill fs-16"></i>
                                    </Button>
                                    <Button
                                      color="dark"
                                      className="btn-icon me-1"
                                    >
                                      <i className="ri-github-fill fs-16"></i>
                                    </Button>
                                    <Button color="info" className="btn-icon">
                                      <i className="ri-twitter-fill fs-16"></i>
                                    </Button>
                                  </div>
                                </div> */}
                              </Form>
                            )}
                          </Formik>
                        </div>

                        {/* <div className="mt-5 text-center">
                          <p className="mb-0">
                            Don't have an account ?{" "}
                            <a
                              href="/auth-signup-cover"
                              className="fw-bold text-primary text-decoration-underline"
                            >
                              {" "}
                              Signup
                            </a>{" "}
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
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <p className="mb-0">
                    &copy; {new Date().getFullYear()} Velzon.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </footer> */}
      </div>
    </React.Fragment>
  );
};

export default CoverSignIn;
