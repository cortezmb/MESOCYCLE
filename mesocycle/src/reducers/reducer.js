

const initialState = {
    counter: 0,
    weight: 0,
    movement: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                counter: state.counter + 1
            }

        case 'DECREASE':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'INCREASE_MAX':
            return {
                ...state,
                weight: action.weight.pounds
            }
        case 'ADD_MOVEMENT':
            return {
                ...state,
                movement: action.movement.exercise
            }
        default:
            return state;
    }

}

export default reducer;