import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { FeatureCollection, GeoJsonProperties, Point } from "geojson";

const initialState: {
  geojson?: FeatureCollection<Point, GeoJsonProperties>;
  isLoading: boolean;
  error: { status: boolean; message: string };
} = {
  geojson: undefined,
  isLoading: false,
  error: { status: false, message: "" },
};

export const getPoints = createAsyncThunk(
  "adm/getPoints",
  async (cql_filter: string = "clinic", thunkAPI) => {
    try {
      const res: AxiosResponse<FeatureCollection<Point, GeoJsonProperties>> =
        await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/geoserver/e-zaha/ows?service=WFS&version=1.0.0&cql_filter=type='${cql_filter}'&request=GetFeature&typeName=e-zaha:point&maxFeatures=50&outputFormat=application/json`
        );
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ status: true, message: err.message });
    }
  }
);

type State = typeof initialState;

const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPoints.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPoints.fulfilled, (state, action) => {
      state.isLoading = false;
      state.geojson = action.payload;
    });
    builder.addCase(getPoints.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as State["error"];
    });
  },
});

export default pointSlice.reducer;
