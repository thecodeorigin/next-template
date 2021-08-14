import { createSlice, configureStore } from '@reduxjs/toolkit'
import dev from './utils/dev'

// import { useReduxStore } from '~/core'
// const { state, store, actions } = useReduxStore()
// store.dispatch(actions.incremented())
const createStore = (name, state, reducers) => {
  const slice = createSlice({
    name,
    initialState: state,
    reducers,
  })
  
  const store = configureStore({
    reducer: slice.reducer
  })

  dev.log(`Redux ${name} store is created |`, 'Redux toolkit slice:', slice)

  return {
    store,
    actions: slice.actions
  }
}

export default createStore