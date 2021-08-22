import { useStore } from 'react-redux';
import rootModule from '~/store'

const useReduxStore = () => {
  const store = useStore()

  return {
    store,
    actions: rootModule.actions
  }
}

export default useReduxStore