import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
    name: 'result',
    initialState:{
        resultStatus: true,
        resultMsg: "",
        showResult: false,
        showLoader: false,
        data: {},
    },
    reducers: {
        setResultStatus: (state, actions) => {
            state.resultStatus = actions.payload
        },
        setResultMsg: (state, actions) => {
            state.resultMsg = actions.payload
        },
        setShowResult: (state, actions) => {
            state.showResult = actions.payload
        },
        setShowLoader: (state, actions) => {
            state.showLoader = actions.payload
        },
        setData: (state, actions) => {
            state.data = actions.payload
        },
    }
})


export const { setResultStatus, setResultMsg, setShowResult, setShowLoader, setData} = resultSlice.actions

export default resultSlice.reducer