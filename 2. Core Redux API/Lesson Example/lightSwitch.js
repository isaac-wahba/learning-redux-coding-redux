import { createStore } from "redux";


const toggle = () => {
    return {
        type: 'toggle'
    }
}

const initialState = 'on';
const lightSwitchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'toggle':
            return state === 'on' ? 'off' : 'on';
        default:
            return state;
    }
}

const store = createStore(lightSwitchReducer);

// console.log(store.getState()); // Prints 'on'

// store.dispatch(toggle());
// console.log(store.getState()); // Prints 'off'

// store.dispatch(toggle());
// console.log(store.getState()); // Prints 'on'

//? New 

const reactToChange = () => {
    console.log(`The light was switched ${store.getState()}!`);
}
const unsubscribe = store.subscribe(reactToChange);

store.dispatch(toggle());
// reactToChange() is called, printing:
// 'The light was switched off!'

store.dispatch(toggle());
// reactToChange() is called, printing:
// 'The light was switched on!'

unsubscribe();
// reactToChange() is now unsubscribed

store.dispatch(toggle());
// no print statement!

console.log(store.getState()); // Prints 'off'