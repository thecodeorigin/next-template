import { useStore } from 'react-redux';
import { useState } from 'react'
import rootModule from '~/store'

const useReduxStore = () => {
  const store = useStore()

  const [state, setState] = useState(store.getState())

  store.subscribe(() => setState(store.getState()))

  return { state, store, actions: rootModule.actions }
}

export default useReduxStore