import { configureStore } from '@reduxjs/toolkit'
import siderbarReducer from '../redux/sidebar/siderbarSlice'
import predictionPageReducer  from './predicitonPage/predictionPageSlice'
import resultReducer from './result/resultSlice'

export default configureStore({
  reducer: {
    sidebar: siderbarReducer,
    predictionPage: predictionPageReducer,
    result: resultReducer,
  }
})