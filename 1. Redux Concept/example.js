// TODO: Redux Simple Example : State - Actions - Reducer Functions

// ! 1. State: 
// ! ==========

const initialState = ['Take Five', 'Claire de Lune', 'Respect'];



// ? 2. Actions: 
// ? ============

const addNewSong = {
    type: 'songs/addSong',
    payload: 'Halo'
};

const removeSong = {
    type: 'songs/removeSong',
    payload: 'Take Five'
};

const removeAll = {
    type: 'songs/removeAll'
}



// * 3. Reducer Function: 
// * =====================

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'songs/addSong': {
            return [...state, action.payload]
        }
        case 'songs/removeSong': {
            const newState = state.filter(song => song != action.payload)
            return newState
        }
        case 'songs/removeAll': {
            return action.payload
        }
        default:
            return state
    }
}


