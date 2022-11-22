import { TprdSize } from "../models/prdSize";
import axiosClient from "./config";

export const getAll = (): Promise<TprdSize[]> => {
    return axiosClient.get("/size");
};

export const remove = (id: string): Promise<TprdSize> => {
    return axiosClient.delete(`/size/${id}`);
};

export const add = (size: TprdSize): Promise<TprdSize> => {
    return axiosClient.post("/size", size);
};

export const get = (id: string): Promise<TprdSize> => {
    return axiosClient.get(`/size/${id}`);
};

export const update = (size: TprdSize): Promise<TprdSize> => {
    return axiosClient.put(`/size/${size._id}`, size);
};
