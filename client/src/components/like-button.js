


class LikeButton extends React.Component {
    state = {
        likes: 0
    };

    render() {
    return (
        <button onClick={this.Liked}> Likes: {this.state.likes}</button>
    )
    }
}