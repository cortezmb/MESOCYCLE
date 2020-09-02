

const initialState = {
    counter: 0,
    weight1: 0,
    weight2: 0,
    inclinePushMovement: [
        {
            name: ""
        }
    ],
    chestIsolationMovement: [
        {
            name: ""
        }
    ]
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
        case 'INCREASE_MAX_INCLINE_PUSH':
            return {
                ...state,
                weight1: action.weight1.pounds
            }
        case 'INCREASE_MAX_CHEST_ISOLATION':
            return {
                ...state,
                weight2: action.weight2.pounds
            }
        case 'ADD_INCLINE_PUSH':
            return {
                ...state,
                inclinePushMovement: action.movement
            }
        case 'ADD_CHEST_ISOLATION':
            return {
                ...state,
                chestIsolationMovement: action.movement
            }
        default:
            return state;
    }

}

export default reducer;