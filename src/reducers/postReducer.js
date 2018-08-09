/*Here we are using ES6 default-parameter syntax to create empty array.*/
const postReducer = (state = [] , action ) => {
/*
    Now the question is how does the reducer go about producing
    the new state for the application. 
    
    Well that is pretty simple,
        it first checks which type of action was dispatched 
        and based on it returns the new state. 
*/
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        default:
            return state;
    }

}
export default postReducer;
/*
Now what the heck is the reducer?

    Well it’s nothing but a function that takes the current
    state and an action that was dispatched as 
    it’s parameters and returns the new state.

    So next time when you see the term reducer thrown
    around remember that it’s just a function that gives you
    new state for your components.

*/