import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Images {
  urls: { [x: string]: string }
  alt: string
  id: string,
  loading: boolean,
  approvedImages?: Array<string>,
  rejectedImages?: Array<string>,
  error?:string
}
interface ImagePayload { urls: { [x: string]: string }, id: string, alt: string }
export const initialState: Images = {
  urls: {},
  id: '',
  alt: '',
  approvedImages: [],
  rejectedImages: [],
  loading: false,
  error:''
}

export const appImageSlice = createSlice({
  name: 'appImageSlice',
  initialState,
  reducers: {
    setImageData: (state, action: PayloadAction<ImagePayload>) => {
      const { urls, id, alt } = action.payload;
      const { rejectedImages } = state;
      if (!rejectedImages?.includes(id)) {
        state.alt = alt;
        state.id = id;
        state.urls = urls; 
      }
      state.loading = false;
    },
    setApprovedImages: (state, action: PayloadAction<{ url: string }>) => {
      const { url } = action.payload;
      state.approvedImages = [...state.approvedImages || [], url];
      state.urls = {};
    },
    reset: (state) => {
      state.alt = '';
      state.approvedImages = [];
      state.id = '';
      state.urls = {};
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
    setRejectedImages: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.rejectedImages = [...state.rejectedImages || [], id];
      state.urls={}
    },
    setError:(state,action:PayloadAction<{error:string}>) => {
      const {error} = action.payload;
      state.error = error;
      state.loading = !state.loading;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImageData, setApprovedImages, reset, toggleLoading, setRejectedImages, setError } = appImageSlice.actions

export default appImageSlice.reducer