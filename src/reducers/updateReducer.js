const INITIAL_STATE = {    
    boxes: Array(9).fill(null),
    xIsNext: true
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'UPDATE_GRID':
            return { boxes: action.payload.boxes, xIsNext: !state.xIsNext}
        case 'RESET':
            return { boxes: action.payload.boxes, xIsNext: action.payload.xIsNext}
        default:
            return state
    }
}
