import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router-dom";

const initialState = {
  isLoading: false,
  featureImageList: [],
};

export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async () => {
    const response = await axios.get(
      `https://e-commerce-server-1-vca8.onrender.com/api/common/feature/get`
    );

    return response.data;
  }
);

export const addFeatureImage = createAsyncThunk(
  "common/addFeatureImage",
  async (uploadedImageUrl, { rejectWithValue }) => {
    if (!uploadedImageUrl) {
      return rejectWithValue({ message: "Image URL is missing" });
    }

    try {
      const response = await axios.post("https://e-commerce-server-1-vca8.onrender.com/api/common/feature", {
        image: uploadedImageUrl,
      });

      if (response.data?.success) {
        return response.data;
      } else {
        return rejectWithValue({ message: "Invalid response from server" });
      }
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data?.message || "Upload failed",
      });
    }
  }
);
const commonSlice = createSlice({
  name: "commonFeature",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      })
      .addCase(addFeatureImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFeatureImage.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addFeatureImage.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default commonSlice.reducer;
