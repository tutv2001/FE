import { Tuser } from "../models/user";
import axiosClient from "./config";

export const getAll = (): Promise<Tuser[]> => {
    return axiosClient.get("/users");
};

export const remove = (id: string): Promise<Tuser> => {
    return axiosClient.delete(`/users/${id}`);
};

export const add = (user: Tuser): Promise<Tuser> => {
    return axiosClient.post("/users", user);
};

export const get = (id: string): Promise<Tuser> => {
    return axiosClient.get(`/users/${id}`);
};

export const update = (user: Tuser): Promise<Tuser> => {
    return axiosClient.put(`/users/${user._id}`, user);
};
export const changePass = (user: any): Promise<any> => {
    return axiosClient.put(`/users/changepassword/${user._id}`, user);
};
// 
export const getProfile = (token:any) => {
    const url = `/user/my-profile`;
    const header = {
      headers: {
        Authorization: `${token}`,
      },
    };
    return axiosClient.get(url, header);
  };