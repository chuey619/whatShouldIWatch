import React from 'react';



class LikeButton extends React.Component {
    state = {
        likes: 0
    };

    Liked = () => {
        this.setState(({ likes }) => ({
            likes: likes + 1
        }));
    };
    render() {
        return (
            <button onClick={this.Liked}>❤️{this.state.likes}</button>
        )
    }
}