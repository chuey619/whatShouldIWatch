
import React, { useState } from 'react';




class LikeButton extends React.Component {
    setstate = {
        likes: 0
    };

    render() {
    return (
        <button onClick={this.Liked}> Likes: {this.state.Movie.Likes}</button>
    )
    }
    Liked = () => {
        let newLike = this.state.Movie.likes + 1
        this.setState({
            likes: newLike
        })
    }
}
export default LikeButton;