import axios from "@/api/axio";

class AuthApi {
  static Edit = (data) => {
    return axios.post(`${base}/edit`, data);
  };

  static Login = (data) => {
    return axios.post(`${base}/login`, data);
  };

  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };

  static Logout = (data) => {
    return axios.post(`${base}/logout`, data, {
      headers: { Authorization: `${data.token}` },
    });
  };

  static Verify = (data) => {
    return axios.post(`${base}/verify`, data);
  };

  static Resend = (data) => {
    return axios.post(`${base}/resend`, data);
  };

  static Rotate = (data) => {
    return axios.post(`${base}/rotate`, data, {
      headers: { Authorization: `${data.token}` },
    });
  };
}

let base = "users";

export default AuthApi;
