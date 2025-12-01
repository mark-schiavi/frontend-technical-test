import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getData from '../api';

// Get a list of vehicles asynchronously...
export const getVehicles = createAsyncThunk(
  'vehicles/getVehicles',
  async (_, { rejectedValue }) => {
    try {
      const vehicles = await getData();
      return vehicles;
    } catch (error) {
      return rejectedValue(error.message || 'Failed to fetch vehicles');
    }
  }
);

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicles: [],
    selectedVehicle: null,
    loading: true,
    error: null,
  },
  /* eslint-disable no-param-reassign */
  reducers: {
    setSelectedVehicle: (state, action) => {
      state.selectedVehicle = action.payload;
    },
    clearSelectedVehicle: (state) => {
      state.selectedVehicle = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
        state.error = null;
      })
      .addCase(getVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch vehicles';
      });
  },
});

export const { setSelectedVehicle, clearSelectedVehicle } = vehiclesSlice.actions;

export const selectVehicles = (state) => state.vehicles;

export default vehiclesSlice.reducer;
