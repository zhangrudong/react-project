import {createStore,combineReducers} from 'redux'
import home from '@/views/home/store' //导入home组件下的 store.js
const reducer = combineReducers({
  home
});
const store = createStore(reducer)
export default store;