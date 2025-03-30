import { createSlice } from '@reduxjs/toolkit'

export const predictionPageSlice = createSlice({
  name: 'predictionPage',
  initialState: {
    value: "India",
    src: {
        India: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png",
        Malaysia: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/383px-Flag_of_Malaysia.svg.png",
        America: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png",
    }
  },
  reducers: {
    navigatToPage: (state, actions) =>{
        state.value = actions.payload;
    }
  }
})


export const {navigatToPage} = predictionPageSlice.actions

export default predictionPageSlice.reducer