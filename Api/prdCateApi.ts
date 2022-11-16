import { TprdCate } from "../models/prdCate";
import axiosClient from "./config";

export const getAll = (): Promise<TprdCate[]> => {
    return axiosClient.get("/Cateproduct");
};

export const remove = (id: string): Promise<TprdCate> => {
    return axiosClient.delete(`/Cateproduct/${id}`);
};

export const add = (prdCate: TprdCate): Promise<TprdCate> => {
    return axiosClient.post("/Cateproduct", prdCate);
};

export const get = (id: string): Promise<TprdCate> => {
    return axiosClient.get(`/Cateproduct/${id}`);
};

export const update = (prdCate: TprdCate): Promise<TprdCate> => {
    return axiosClient.put(`/Cateproduct/${prdCate._id}`, prdCate);
};

