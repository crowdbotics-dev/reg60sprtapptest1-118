import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_smala_list = createAsyncThunk(
  "smalas/api_v1_smala_list",
  async payload => {
    const response = await apiService.api_v1_smala_list(payload)
    return response.data
  }
)
export const api_v1_smala_create = createAsyncThunk(
  "smalas/api_v1_smala_create",
  async payload => {
    const response = await apiService.api_v1_smala_create(payload)
    return response.data
  }
)
export const api_v1_smala_retrieve = createAsyncThunk(
  "smalas/api_v1_smala_retrieve",
  async payload => {
    const response = await apiService.api_v1_smala_retrieve(payload)
    return response.data
  }
)
export const api_v1_smala_update = createAsyncThunk(
  "smalas/api_v1_smala_update",
  async payload => {
    const response = await apiService.api_v1_smala_update(payload)
    return response.data
  }
)
export const api_v1_smala_partial_update = createAsyncThunk(
  "smalas/api_v1_smala_partial_update",
  async payload => {
    const response = await apiService.api_v1_smala_partial_update(payload)
    return response.data
  }
)
export const api_v1_smala_destroy = createAsyncThunk(
  "smalas/api_v1_smala_destroy",
  async payload => {
    const response = await apiService.api_v1_smala_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const smalasSlice = createSlice({
  name: "smalas",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_smala_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_smala_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_smala_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_smala_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_smala_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_smala_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_smala_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_smala_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_smala_list,
  api_v1_smala_create,
  api_v1_smala_retrieve,
  api_v1_smala_update,
  api_v1_smala_partial_update,
  api_v1_smala_destroy,
  slice: smalasSlice
}
