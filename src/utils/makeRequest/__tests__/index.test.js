import makeRequest from "..";
import axios from "axios";
import {
  GET_BLOG_DATA,
  UPDATE_BLOG_DATA,
  BASE_BACKEND_URL,
} from "../../../constants/apiEndPoints";
import { mockCardList } from "../../../__mocks__/main";
import { mockReq, mockRes } from "../../../__mocks__/makeRequest";
import { ERROR_ROUTE } from "../../../constants/paths";

jest.mock("axios");

describe("makeRequest", () => {
  it("should make an API call with appropriate request options and return response body when only end point is specified", async () => {
    axios.mockResolvedValueOnce({ data: mockCardList });

    const mockParams = {
      url: BASE_BACKEND_URL + GET_BLOG_DATA.url,
      method: GET_BLOG_DATA.method,
    };

    expect(axios).not.toBeCalled();

    const response = await makeRequest(GET_BLOG_DATA);

    expect(axios).toBeCalledWith(mockParams);
    expect(response).toEqual(mockCardList);
  });

  it("should make an API call with appropriate request options and return response body when end point and request body is specified", async () => {
    axios.mockResolvedValueOnce({ data: mockRes });

    const mockEndPoint = UPDATE_BLOG_DATA(1);

    const mockParams = {
      url: BASE_BACKEND_URL + mockEndPoint.url,
      method: mockEndPoint.method,
      ...mockReq,
    };

    expect(axios).not.toBeCalled();

    const response = await makeRequest(mockEndPoint, mockReq);

    expect(axios).toBeCalledWith(mockParams);
    expect(response).toEqual(mockRes);
  });

  it("should navigate to error page when axios encounters an error with status code specified", async () => {
    axios.mockRejectedValueOnce({ response: { status: 500 } });
    const navigate = jest.fn();

    const mockEndPoint = UPDATE_BLOG_DATA(1);

    await makeRequest(mockEndPoint, mockReq, navigate);

    expect(navigate).toBeCalledTimes(1);
    expect(navigate).toBeCalledWith(`${ERROR_ROUTE}/:500`);
  });

  it("should navigate to error page when axios encounters an error with status code not specified", async () => {
    axios.mockRejectedValueOnce({});
    const navigate = jest.fn();

    const mockEndPoint = UPDATE_BLOG_DATA(1);

    await makeRequest(mockEndPoint, mockReq, navigate);

    expect(navigate).toBeCalledTimes(1);
    expect(navigate).toBeCalledWith(ERROR_ROUTE);
  });
});
 