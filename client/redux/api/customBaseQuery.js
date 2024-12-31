import { fetchBaseQuery } from "@reduxjs/toolkit/query";
;
export const Url = "http://localhost:4000";

const baseQuery = fetchBaseQuery({
  baseUrl: Url,
  // credentials: "include", // include cookies
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});
const customBaseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const { error } = result;
  if (error && (error?.status === 401 || error?.originalStatus === 401)) {
    // try to get a new token
    // const refreshResult = await baseQuery('/refreshToken', api, extraOptions)
    // if (refreshResult.data) {
    //   // store the new token
    //   api.dispatch(tokenReceived(refreshResult.data))
    //   // retry the initial query
    //   result = await baseQuery(args, api, extraOptions)
    // }
    api.dispatch({ type: "auth/logOut" });
  }
  return result;
};

export default customBaseQuery;
