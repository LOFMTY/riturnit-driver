import { lightTheme, darkTheme } from '../../constants'

export const TOGGLE_THEME_BEGIN = 'TOGGLE_THEME_BEGIN'
export const TOGGLE_THEME_SUCCESS = 'TOGGLE_THEME_SUCCESS'
export const TOGGLE_THEME_FAILURE = 'TOGGLE_THEME_FAILURE'

export const toggleThemeBegin = () => ({
  type: TOGGLE_THEME_BEGIN
})

export const toggleThemeSuccess = (selectedTheme: { name: string; backgroundColor: string; textColor: string; statsBackgroundColor: string; subTextColor: string; tabBackgroundColor: string; tabIndicatorBackgroundColor: string; directionButton: string; tabIndicator: string; iconButton: string; driverMessageBackgroundColor?: string; chatImage: string; bottomSheet: string; buttonText: string; mapStyle: ({ elementType: string; stylers: { color: string }[]; featureType?: undefined } | { featureType: string; elementType: string; stylers: { color: string }[] })[] | { elementType: string; stylers: { visibility: string }[] }[] }) => ({
  type: TOGGLE_THEME_SUCCESS,
  payload: {selectedTheme}
})

export const toggleThemeFailure = (error: { error: string }) => ({
  type: TOGGLE_THEME_FAILURE,
  payload: {error}
})

export function toggleTheme(themeType: any) {
  return (dispatch: (arg0: { type: string; payload?: { selectedTheme: any } | { error: any } }) => void) => {
    dispatch(toggleThemeBegin())

    switch (themeType) {
      case 'dark': 
        dispatch(toggleThemeSuccess(darkTheme))
        break;
      
      case 'light': 
        dispatch(toggleThemeSuccess(lightTheme))
        break;
      
      default:
        dispatch(toggleThemeFailure({ error: 'Invalid theme type' })) 
        break;
    }
  }
}