import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sdjbdsj_list = createAsyncThunk(
  "sDjbdsjs/api_v1_sdjbdsj_list",
  async payload => {
    const response = await apiService.api_v1_sdjbdsj_list(payload)
    return response.data
  }
)
export const api_v1_sdjbdsj_create = createAsyncThunk(
  "sDjbdsjs/api_v1_sdjbdsj_create",
  async payload => {
    const response = await apiService.api_v1_sdjbdsj_create(payload)
    return response.data
  }
)
export const api_v1_sdjbdsj_retrieve = createAsyncThunk(
  "sDjbdsjs/api_v1_sdjbdsj_retrieve",
  async payload => {
    const response = await apiService.api_v1_sdjbdsj_retrieve(payload)
    return response.data
  }
)
export const api_v1_sdjbdsj_update = createAsyncThunk(
  "sDjbdsjs/api_v1_sdjbdsj_update",
  async payload => {
    const response = await apiService.api_v1_sdjbdsj_update(payload)
    return response.data
  }
)
export const api_v1_sdjbdsj_partial_update = createAsyncThunk(
  "sDjbdsjs/api_v1_sdjbdsj_partial_update",
  async payload => {
    const response = await apiService.api_v1_sdjbdsj_partial_update(payload)
    return response.data
  }
)
export const api_v1_sdjbdsj_destroy = createAsyncThunk(
  "sDjbdsjs/api_v1_sdjbdsj_destroy",
  async payload => {
    const response = await apiService.api_v1_sdjbdsj_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sDjbdsjsSlice = createSlice({
  name: "sDjbdsjs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_sdjbdsj_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdjbdsj_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdjbdsj_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdjbdsj_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdjbdsj_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdjbdsj_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdjbdsj_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdjbdsj_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_sdjbdsj_list,
  api_v1_sdjbdsj_create,
  api_v1_sdjbdsj_retrieve,
  api_v1_sdjbdsj_update,
  api_v1_sdjbdsj_partial_update,
  api_v1_sdjbdsj_destroy,
  slice: sDjbdsjsSlice
}
