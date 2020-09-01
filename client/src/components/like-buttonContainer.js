import React from 'react';


// I want the button to be unique to each user and movie
// I want the button to change true when clicked
// then for it to recognize that and put the counter up
// the counter has to be connected to movies
// the counter is the only one connected to the database the button is connected to the counter

class LikeContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
      this.setView = this.setView.bind(this);
      this.togglelikeCompletion = this.togglelikeCompletion.bind(this);
      this.addLike = this.addLike.bind(this);
    };


    componentDidMount() {
      this.getAllLikes();
    }

    getAllLikes() {
      fetch('movie/movie_id/likes')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          counter: res.data.likes,
        })
      })
    }

    

      addLike(likeData) {
        this.setState({view: 'counter'});
        fetch('/:id/likes', {
          method: 'POST',
          body: JSON.stringify(likeData),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => res.json())
        .then(res => {
          this.getAllLikes();
        })
      }

      toggleLike(likesId) {
        const likeUpdate = this.state.likes({ view: ''})
      }

      render() {
        return (
          <div className="like-container">
            <h2>like</h2>
            <div className="likebuttons">
              <button onClick={() => this.setView('counter')}>Like</button>
            </div>
          </div>
        )
      }
     
         

            //make a route to database after setState  
              //make a request to the post and delete routes 
              // make post add 1 
              //make delete subtract 1
        
   
        
}
