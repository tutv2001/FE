import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, getByProduct, remove } from "../Api/comment";
import { Tcmt } from "../models/cmt";


type CmtState = {
  comments: Tcmt[];
  comment: Tcmt | {};
};

const initialState: CmtState = {
  comments: [],
  comment: {},
};

export const getCmt = createAsyncThunk("comment/getCmt", async () => {
  const response = await getAll();
  return response;
});

export const deleteCmt = createAsyncThunk("comment/deleteCmt", async (id: string) => {
  const res = await remove(id);
  return res;
});

export const addCmt = createAsyncThunk("comment/addCmt", async (Cmt: Tcmt, { dispatch }) => {
  const res = await add(Cmt);
  await dispatch(getCommentsByProduct(Cmt.productId!)).unwrap();
});

export const getACmt = createAsyncThunk("comment/getNew", async (id: any) => {
  const res = await get(id);
  return res;
});

export const getCommentsByProduct = createAsyncThunk("comment/getCommentsByProduct", async (id: string) => {
  const comments = await getByProduct(id);

  return comments;
});

// export const updateNews = createAsyncThunk("comment/updateNew", async (news: any) => {
//   const res = await update(news);
//   return res;
// });

const newsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCmt.fulfilled, (state, { payload }) => {
      state.comments = payload as any;
    });

    builder.addCase(deleteCmt.fulfilled, (state, { payload }) => {
      state.comments = state.comments.filter((item) => item._id !== payload?._id);
    });

    builder.addCase(getACmt.fulfilled, (state, { payload }) => {
      state.comment = payload as Tcmt;
    });

    builder.addCase(getCommentsByProduct.fulfilled, (state, { payload }) => {
      state.comments = payload;
    });

    // builder.addCase(updateNews.fulfilled, (state, { payload }) => {
    //   state.news = state.news = state.news.map((item) => (item._id === payload?._id ? payload : item)) as News[];
    // });
  },
});

export default newsSlice.reducer;