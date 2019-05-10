export const CHANGE_COLOR = 'CHANGE_COLOR'

export const changeColor = (color) => {
    return {
      type: CHANGE_COLOR,
      payload: color
    }
}

