let BACKEND_SERVER = null;
if (import.meta.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = import.meta.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "http://localhost:5000/api";
  // BACKEND_SERVER = "https://demandexcellence.net/api";
}
export const API_SERVER = BACKEND_SERVER;
export const API_ENDPOINT = "http://api.dataapiconnect.com/api";
