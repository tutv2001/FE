import { TprdAmount } from "../models/prdAmount";
import axiosClient from "./config";

export const getAll = (): Promise<TprdAmount[]> => {
    return axiosClient.get("/prd_amount");
};

export const remove = (id: string): Promise<TprdAmount> => {
    return axiosClient.delete(`/prd_amount/${id}`);
};

export const add = (amount: TprdAmount): Promise<TprdAmount> => {
    return axiosClient.post("/prd_amount", amount);
};

export const get = (id: string): Promise<TprdAmount> => {
    return axiosClient.get(`/prd_amount/${id}`);
};

export const update = (amount: TprdAmount): Promise<TprdAmount> => {
    return axiosClient.put(`/prd_amount/${amount._id}`, amount);
};
