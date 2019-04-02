export const updateGrid = (grid) => {
    return{
        type: "UPDATE_GRID",
        payload: grid
    }
}

export const resetGrid = (initial) => {
    return{
        type: "RESET",
        payload: initial
    }
}
