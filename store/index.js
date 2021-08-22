import { createStore } from "~/core";
import { reducers } from "./reducers";

const initialState = {
  count: 0
}

// import { useReduxStore } from '~/core'
// const { store, actions } = useReduxStore()
// store.dispatch(actions.incremented())
export default createStore('root', initialState, reducers)
