import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post';

class AllPost extends Component{
    render(){
        /*We have imported the Post component inside AllPost and used the Array.prototype.map function to loop over each of the individual posts inside this.props.posts and pass it down to the Post component with the key as post.id and the post itself. */
        return (
            <div>
                <h1>AllPost</h1>
                {this.props.posts.map((post) => <Post key={post.id} post={post} /> )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);