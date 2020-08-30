const iState = {
    events: []
}

const reducer = (state = iState, action) => {
    if (action.type === 'CHANGE_EVENTS') {
        return {
            events: action.payload
        }
    }
    return state;
}

export default reducer;