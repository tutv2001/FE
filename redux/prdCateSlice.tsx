import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../Api/prdCateApi";
import { TprdCate } from "../models/prdCate";



type prdCateState = {
    prdCates: TprdCate[];
    prdCate: TprdCate | {};
};

const initialState: prdCateState = {
    prdCates: [],
    prdCate: {},
};

export const getprdCates = createAsyncThunk("prdCate/getprdCates", async () => {
    const response = await getAll();

    return response;
});

export const deleteprdCate = createAsyncThunk("prdCate/deleteprdCate", async (id: string) => {
    const res = await remove(id);

    return res;
});

export const addprdCate = createAsyncThunk("prdCate/addprdCate", async (prdCate: any) => {
    const res = await add(prdCate);

    return res;
});

export const getprdCate = createAsyncThunk("prdCate/getprdCate", async (id: any) => {
    const res = await get(id);

    return res;
});

export const updateprdCate = createAsyncThunk("prdCate/updateprdCate", async (prdCate: any) => {
    const res = await update(prdCate);

    return res;
});

const prdCateSlice = createSlice({
    name: "prdCate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getprdCates.fulfilled, (state, { payload }) => {
            state.prdCates = payload || [];
        });

        builder.addCase(deleteprdCate.fulfilled, (state, { payload }) => {
            state.prdCates = state.prdCates.filter((item) => item._id !== payload?._id);
        });

        builder.addCase(addprdCate.fulfilled, (state, { payload }) => {
            state.prdCates.push(payload as TprdCate);
        });

        builder.addCase(getprdCate.fulfilled, (state, { payload }) => {
            state.prdCate = payload as TprdCate;
        });

        builder.addCase(updateprdCate.fulfilled, (state, { payload }) => {
            state.prdCates = state.prdCates = state.prdCates.map((item) => (item._id === payload?._id ? payload : item)) as TprdCate[];
        });
    },
});

export default prdCateSlice.reducer;