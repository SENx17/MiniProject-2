import axios from "axios";

export const getProfileDetail = async () => {
  const profileDetail = await axios.get(
    `${process.env.REACT_APP_BASEURL}/account?api_key=${
      process.env.REACT_APP_APIKEY
    }&session_id=${localStorage.getItem("SID")}`
  );
  return profileDetail.data;
};
