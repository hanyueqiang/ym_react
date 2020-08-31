import { GET_USER_INFO } from "@/redux/actionTypes/user";
import api from "@/request/api";

export const getUserInfo = (payload: object): object => ({
  type: GET_USER_INFO,
  payload,
});

export function fetchUserInfo() {
  return async (dispatch: Function) => {
    const { data } = await Axios.get(api.getUserInfo);
    dispatch(getUserInfo(data.data));
  };
}
