// !  In this project you will build an adventure game using reducers, state, and actions.


// ? The state will represent, well, the state of the game. 

// ? : It contains the player’s inventory, distance travelled, and time on the road. 
// TODO:  (Payloads)

//! Each event in the game is represented as an action. 


//! Players can gather supplies, travel, and–if they play risky–sometimes tip over the wagon carrying their supplies.
// TODO: action types

const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200

}

const reducer = (state = initialWagonState, action) => {

    switch (action.type) {
        case 'gather': {
            return {
                ...state,
                supplies: state.supplies + 15,
                distance: state.distance,
                days: state.days + 1
            }

        }
        case 'travel': {

            if (state.supplies - (20 * action.payload) < 0) {
                return state
            } else {
                return {
                    ...state,
                    supplies: state.supplies - (20 * action.payload),
                    distance: state.distance + (10 * action.payload),
                    days: state.days + action.payload
                }

            }
        }
        case 'tippedWagon': {
            return {
                ...state,
                supplies: state.supplies - 30,
                distance: state.distance,
                days: state.days + 1
            }
        }
        case 'sell': {
            if (state.supplies - 20 < 0) {
                return state
            } else {
                return {
                    ...state,
                    supplies: state.supplies - 20,
                    distance: state.distance,
                    days: state.days,
                    cash: state.cash + 5

                }

            }
        }
        case 'buy': {
            if (state.cash - 15 < 0) {
                return state
            } else {
                return {
                    ...state,
                    supplies: state.supplies + 25,
                    distance: state.distance,
                    days: state.days,
                    cash: state.cash - 15

                }

            }
        }

        case 'theft': {
            if (state.cash / 2 < 0) {
                return state
            } else {
                return {
                    ...state,
                    supplies: state.supplies,
                    distance: state.distance,
                    days: state.days,
                    cash: state.cash / 2

                }

            }
        }

        default: {
            return state
        }

    }
}



// TODO: Playing! 

let wagon = reducer({ supplies: 90, distance: 10, days: 3, cash: 85 }, { type: 'sell' })

console.log(wagon)