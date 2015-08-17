import { CHANGE_ADDRESSEE } from './greetings_actions';
import { createStore }      from 'redux';


const ADDRESSEE_TRANSITIONS = {
    'world': 'Alpha',
    'Alpha': 'Beta',
    'Beta' : 'Gamma',
    'Gamma': 'world'
}


/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your project.
 */
function greeting(state = 'world', action) {
    return ( action.type === CHANGE_ADDRESSEE ? ADDRESSEE_TRANSITIONS[state] : state );
}


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let greetingsStore = createStore(greeting);


// You can subscribe to the updates manually, or use bindings to your view layer.
// greetingsStore.subscribe( () => console.log(greetingsStore.getState()) );


// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// greetingsStore.dispatch({ type: 'ADDRESSEE' });
// // 'Alpha'
// greetingsStore.dispatch({ type: 'BLAH' });
// // 'Alpha'
// greetingsStore.dispatch({ type: 'ADDRESSEE' });
// // 'Beta'


export default greetingsStore;
