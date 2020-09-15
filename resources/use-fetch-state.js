import { useReducer } from 'react'

const fetchStateReducer = (state, action) => {
  switch (action.type) {
    case 'error': {
      return {
        ...state,
        status: 'error',
      }
    }
    case 'success': {
      return {
        ...state,
        status: 'success',
      }
    }
    case 'started': {
      return {
        ...state,
        status: 'loading',
      }
    }
    case 'idle': {
      return {
        ...state,
        status: 'idle',
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const useFetchState = () => {
  const [state, dispatch] = useReducer(fetchStateReducer, {
    status: 'idle',
  })
  return { ...state, dispatch }
}
