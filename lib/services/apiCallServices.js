import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result,'result of refresh');
  if (result?.error && result?.error?.status === 401) {
    const refreshToken = sessionStorage.getItem("refreshToken") !== undefined &&sessionStorage.getItem("refreshToken") !== null? sessionStorage.getItem("refreshToken"): null;
    const refreshResult = await baseQuery(
      {
        url: "/public/refresh-token",
        method: "POST",
        body: {
          data: {
            refreshToken: refreshToken,
          },
        },
        headers: {},
      },
      api,
      extraOptions
    );
    console.log(refreshResult,'refreshResult');

    if (refreshResult?.data) {
      const token = refreshResult.data?.data;
      if (refreshResult.data?.error) {
        sessionStorage.clear();
        window.location.href = "/";
      } else {
        sessionStorage.setItem("accessToken", token?.accessToken);
        args.headers.authorization = `Bearer ${token?.accessToken}`;
        result = await baseQuery(args, api, extraOptions);
      }
    } else if (refreshResult.data.error) {
      window.location.href = "/";
    }
  }
  return result;
};
export const ApiCallServices = createApi({
  reducerPath: "ApiCallServices",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getApiCall: builder.query({
      query: (arg) => ({
        url: arg.endPoint,
        method: arg.method,
        body: arg.data,
        headers: {
          "Access-Control-Allow-Origin": "*",
          authorization:
            sessionStorage.getItem("accessToken") !== undefined &&
            sessionStorage.getItem("accessToken") !== null
              ? `Bearer ${sessionStorage.getItem("accessToken")}`
              : null,
          ...arg.headers,
        },
      }),
    }),
    apiCall: builder.mutation({
      query: (arg) => ({
        url: arg.endPoint,
        method: arg.method,
        body: arg.data,
        headers: {
          "Access-Control-Allow-Origin": "*",
          authorization:
            sessionStorage.getItem("accessToken") !== undefined &&
            sessionStorage.getItem("accessToken") !== null
              ? `Bearer ${sessionStorage.getItem("accessToken")}`
              : null,
          ...arg.headers,
        },
      }),
    }),
  }),
});

export const { useGetApiCallQuery, useApiCallMutation } = ApiCallServices;
