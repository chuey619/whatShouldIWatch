



class LikeButton extends React.Component {
    state = {
        likes: 0
    };

    render() {
    return (
        <button onClick={this.Liked}> Likes: {this.state.likes}</button>
    )
    }
    Liked = () => {
        let newCount = this.state.likes + 1
        this.setState({
            count: newCount
        })
    }
}