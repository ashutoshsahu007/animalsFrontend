import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({});
// axiosInstance.defaults.headers =
const baseurl = "https://node-animalslover-api.onrender.com/api/v1";
// const baseurl = "https://sqss.shop";

export const apiConnector = (method, url, bodyData) => {
  // const token = Cookies.get("token");
  // let temp = {
  //     token:token || null,
  //     ...bodyData
  // }

  const accessToken = Cookies.get("accessToken");
  let headers = {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  };
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  return axiosInstance({
    method: `${method}`,
    url: `${baseurl + url}`,
    data: bodyData,
    headers: headers,
    params: null,
  });
};

// {
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json', // Adjust the content type if necessary
//   }
