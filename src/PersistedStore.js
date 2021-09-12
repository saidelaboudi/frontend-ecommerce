import {
    createStore
} from "redux";

import reducers from '../src/redux/reducer/index';

const LOCAL_STORAGE_NAME = 'tesssssttttt';

class PersistedStore {

    // Singleton property
    static DefaultStore = null;

    // Accessor to the default instance of this class
    static getDefaultStore() {
        if (PersistedStore.DefaultStore === null) {
            PersistedStore.DefaultStore = new PersistedStore();
        }

        return PersistedStore.DefaultStore;
    }

    // Redux store
    _store = null;

    // When class instance is used, initialize the store
    constructor() {
        this.initStore()
    }

    // Initialization of Redux Store
    initStore() {
        this._store = createStore(reducers, PersistedStore.loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        this._store.subscribe(() => {
            console.log("hhhhhhlllllllllllllllllllllmmmmmmmmmmmmmmmmpppppppppppppppppppoooooooooooooooo",this._store.getState())
            let serializedState = JSON.stringify(this._store.getState());
            localStorage.setItem(LOCAL_STORAGE_NAME, serializedState);
        });
    }

    // Getter to access the Redux store
    get store() {
        return this._store;
    }

    // Loading persisted state from localStorage, no need to access
    // this method from the outside
    static loadState() {
        try {
            let serializedState = localStorage.getItem(LOCAL_STORAGE_NAME);
            if (serializedState === null) {
                console.log("1")
                return PersistedStore.initialState();
            }
            console.log("2")
            return JSON.parse(serializedState);
        } catch (err) {
            return PersistedStore.initialState();
        }
    }

    // Saving persisted state to localStorage every time something
    // changes in the Redux Store (This happens because of the subscribe() 
    // in the initStore-method). No need to access this method from the outside
    static saveState(state) {
        try {
            console.log("storing ...")
            let serializedState = JSON.stringify(state);
            localStorage.setItem(LOCAL_STORAGE_NAME, serializedState);
        } catch (err) {
            console.log(err)
         }
    }

    // Return whatever you want your initial state to be
    static initialState() {
        return {};
    }
}

export default PersistedStore;