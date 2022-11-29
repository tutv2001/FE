import { Tcmt } from "../models/cmt";
import axiosClient from "./config";


export const getAll = (): Promise<Tcmt[]> => {
  return axiosClient.get("/comment");
};

export const remove = (id: string): Promise<Tcmt> => {
  return axiosClient.delete(`/comment/${id}`);
};

export const add = (comment: Tcmt): Promise<Tcmt> => {
  return axiosClient.post("/comment", comment);
};

export const get = (id: string): Promise<Tcmt> => {
  return axiosClient.get(`/comment/${id}`);
};

export const getByProduct = (id: string): Promise<Tcmt[]> => {
  return axiosClient.get(`/comment/getByProduct/${id}`);
};