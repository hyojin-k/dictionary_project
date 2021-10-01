import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import word from './modules/word';

// 미들웨어 묶기
const middlewares = [thunk];
// 리듀서들 묶기
const rootReducer = combineReducers({word});
// 리듀서 외 옵션들 묶기
const enhancer = applyMiddleware(...middlewares)

// 스토어 만들기
const store = createStore(rootReducer, enhancer);

export default store;