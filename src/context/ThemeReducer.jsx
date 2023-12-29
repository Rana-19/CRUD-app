export const ThemeReducer = (state, action) => {
    if (action.type === "CHANGE_THEME") {
        return {
            ...state,
            isDark: state.isDark ? false : true
        }


    }
}