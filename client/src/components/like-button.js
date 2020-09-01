import React from 'react';



class LikeButton extends React.Component {
    state = {
        likes: 0
    };
    
    handleClick = () => {
        this.setState(({ likes }) => ({
            likes: likes + 1
        }));
    };
    render() {
        return <button onClick={this.handleClick}>{this.state.count}</button>
    }
}