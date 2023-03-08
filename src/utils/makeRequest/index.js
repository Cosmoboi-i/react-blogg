import axios from "axios";
import { BASE_BACKEND_URL } from "../../constants/apiEndPoints";
import { ERROR_ROUTE } from "../../constants/paths";

export default async function makeRequest(
  endPoint,
  dynamicConfig = {},
  navigate
) {
  try {
    const params = {
      url: BASE_BACKEND_URL + endPoint.url,
      method: endPoint.method,
      ...dynamicConfig,
    };

    console.log("CHECK");

    const { data } = await axios(params);
    console.log(data);

    return data;
  } catch (e) {
    if (navigate) {
      const status = e.response?.status;
      if (status) navigate(`${ERROR_ROUTE}/:${status}`);
      else navigate(ERROR_ROUTE);
    }
  }
}
