import { useReducer } from 'react'
import { type Language, type Action, type State, type FromLanguage } from '../types'
import { AUTO_LANGUAGE } from '../constants'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state: State, action: Action) {
  const { type } = action

  if (type === 'SWAP_LANGUAGE') {
    if (state.fromLanguage === AUTO_LANGUAGE) {
      return state
    }
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      fromText: state.result,
      result: '',
      loading: state.fromText !== ''
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload,
      result: '',
      loading: state.fromText !== ''
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload,
      result: '',
      loading: state.fromText !== ''
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      fromText: action.payload,
      loading: action.payload !== '',
      result: ''
    }
  }

  if (type === 'SET_RESULT_TEXT') {
    return {
      ...state,
      result: action.payload,
      loading: false
    }
  }

  return state
}

export function useStore () {
  const [
    {
      fromLanguage,
      toLanguage,
      fromText,
      result,
      loading
    }, dispatch
  ] = useReducer(reducer, initialState)

  const interchangeLanguage = () => { dispatch({ type: 'SWAP_LANGUAGE' }) }
  const setFromLanguage = (language: FromLanguage) => { dispatch({ type: 'SET_FROM_LANGUAGE', payload: language }) }
  const setToLanguage = (language: Language) => { dispatch({ type: 'SET_TO_LANGUAGE', payload: language }) }
  const setFromText = (text: string) => { dispatch({ type: 'SET_FROM_TEXT', payload: text }) }
  const setResultText = (text: string) => { dispatch({ type: 'SET_RESULT_TEXT', payload: text }) }

  console.log({
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  })

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResultText
  }
}
