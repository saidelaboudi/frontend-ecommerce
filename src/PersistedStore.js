import {
    createStore
} from "redux";

import reducers from '../src/redux/reducer/index';

const LOCAL_STORAGE_NAME = 'tet';

class PersistedStore {

    static DefaultStore = null;

    static getDefaultStore() {
        if (PersistedStore.DefaultStore === null) {
            PersistedStore.DefaultStore = new PersistedStore();
        }

        return PersistedStore.DefaultStore;
    }

    _store = null;

    constructor() {
        this.initStore()
    }

    initStore() {
        this._store = createStore(reducers, PersistedStore.loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        this._store.subscribe(() => {
            let serializedState = JSON.stringify(this._store.getState());
            localStorage.setItem(LOCAL_STORAGE_NAME, serializedState);
        });
    }

    get store() {
        return this._store;
    }

    static loadState() {
        try {
            let serializedState = localStorage.getItem(LOCAL_STORAGE_NAME);
            if (serializedState === null) {
                return PersistedStore.initialState();
            }
            return JSON.parse(serializedState);
        } catch (err) {
            return PersistedStore.initialState();
        }
    }

    static saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem(LOCAL_STORAGE_NAME, serializedState);
        } catch (err) {
            console.log(err)
         }
    }

    static initialState() {
        return {};
    }
}

export default PersistedStore;