import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();/* will prevent the page from refreshing.*/

        /*https://reactjs.org/docs/refs-and-the-dom.html
         grab the value of the title and the message from the inputs using refs 
         */
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }
        /*With that in place we can easily access dispatch 
        in our components so let’s use it.*/
        this.props.dispatch({
            type: 'ADD_POST', data
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
        /*
            Remember that connect() gives you access to dispatch as a prop.
                Here once we have captured the data from the form we dispatch
                the action using this.props.dispatch() passing in the data object
                with a type of ‘ADD_POST’.
            */
    }

    render(){
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit} >
                    <input required 
                        type="text" 
                        ref={(input) => this.getTitle = input }
                        placeholder="Enter Post Title " /> 
                    <br /><br />
                    <textarea required 
                        ref={(input)=> this.getMessage = input}
                        rows="5" cols="28" 
                        placeholder="Enter Post" />
                    <br />
                    <br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
/*connect() function 
    We know that our state lives inside this object called
     the store and this store has it’s own set of methods
     for getting the current state of our application, 
     updating the state of our application and subscribing for changes.

    We need dispatch whenever we want to pass some action
    to the reducer to tell some sort of event has happened
    and then the reducer can decide what to do with the state. 

    That is what connect() allows you to do.
     connect() returns a function which takes in your current component
     as an argument and returns a new component with dispatch method
     as it’s prop.

     Basic syntax
     export default connect()(component-name)

*/
/*export default PostForm;*/
export default connect()(PostForm);


/*  connect can do more. 
    It can give you access to your state which is living 
    inside your store object. 
    To get access to your state, we need to use a special function
    called mapStateToProps 
            (This function does exactly what it is named, 
                map the state from the store object 
                to the props object in your components).
    */