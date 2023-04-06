import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import API from "../../../helpers/API";
// Login Redux States
import {
  LOGIN_USER,
  LOGOUT_USER,
  SOCIAL_LOGIN,
  REGISTER_PUBLIC_USER,
} from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import { postSocialLogin } from "../../../helpers/fakebackend_helper";
import NotificationManager from "../../../Components/Common/NotificationManager";

const fireBaseBackend = getFirebaseBackend();

const postJwtLogin = async (email, password) =>
  await API.post("/api/token/", {
    username: email,
    password: password,
  })
    .then((authUser) => authUser.data)
    .catch((error) => {
      if (error.response.status === 401) {
        return { message: "Incorrect Credentials" };
      }
      return error;
    });

function* loginUser({ payload: { user, history } }) {
  try {
    const loginUser = yield call(postJwtLogin, user.email, user.password);
    if (!loginUser.message) {
      console.log(loginUser);
      sessionStorage.setItem("authUser", JSON.stringify(loginUser));
      localStorage.setItem("jwt", loginUser.access);
      localStorage.setItem("jwtRefresh", loginUser.refresh);

      localStorage.setItem("dark_mode", loginUser.profile.dark_mode);

      localStorage.setItem("profile_pic", loginUser.profile.profile_pic);
      yield put(loginSuccess(loginUser));

      history.push("/dashboard");
    } else {
      yield put(apiError(loginUser.message));
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser() {
  try {
    sessionStorage.removeItem("authUser");
    localStorage.clear();
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(LOGOUT_USER, response));
    } else {
      yield put(logoutUserSuccess(LOGOUT_USER, true));
    }
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response = yield call(fireBaseBackend.socialLoginUser, data, type);
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else {
      const response = yield call(postSocialLogin, data);
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

const postJwtPublicUser = async (email, first_name, mobile, password) =>
  await API.post("/api/public/user/register/", {
    username: email,
    first_name: first_name,
    mobile: mobile,
    password: password,
  })
    .then((authUser) => authUser)
    .catch((error) => {
      if (error.response.status === 401) {
        return { message: "Incorrect Credentials" };
      }
      return error;
    });

function* registerPublicUser({ payload: { user, history } }) {
  try {
    const regUser = yield call(
      postJwtPublicUser,
      user.email,
      user.first_name,
      user.mobile,
      user.password
    );
    if (regUser?.response) {
      yield put(apiError(regUser?.response?.data?.message?.join(" ")));
    } else {
      NotificationManager.success(
        "",
        "Registered successfully.",
        3000,
        null,
        null,
        ""
      );
      history.push("/login");
    }
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeLatest(SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LOGOUT_USER, logoutUser);
  yield takeEvery(REGISTER_PUBLIC_USER, registerPublicUser);
}

export default authSaga;
