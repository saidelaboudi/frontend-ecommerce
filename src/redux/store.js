import { createStore } from "redux";
import reducers from "./reducer/index";
import PersistedStore from "../PersistedStore";

const store = createStore(
    reducers,
    PersistedStore.loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    PersistedStore.saveState(store.getState());
}); 



export default store;