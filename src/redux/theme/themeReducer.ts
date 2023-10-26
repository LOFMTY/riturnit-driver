import * as themeActionTypes from './themeActions'
import { selectedTheme } from '../../constants'

const initialState = {
  appTheme: selectedTheme,
  error: null,
}

const themeReducer = (state = initialState, action: { type: any; payload: { selectedTheme: any; error: any } }) => {
  switch (action.type) {
    case themeActionTypes.TOGGLE_THEME_BEGIN:
        return {
          ...state,
          error: null
        }

    case themeActionTypes.TOGGLE_THEME_SUCCESS:
      return {
        ...state,
        appTheme: action.payload.selectedTheme
      }

    case themeActionTypes.TOGGLE_THEME_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state;
  }
}

export default themeReducer