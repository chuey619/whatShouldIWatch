import React from 'react';


// I want the button to be unique to each user and movie
// I want the button to change true when clicked
// then for it to recognize that and put the counter up
// the counter has to be connected to movies
// the counter is the only one connected to the database the button is connected to the counter

class LikeButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        counter: 0,
        view: 'counter',
      };
      this.togglelikeCompletion = this.togglelikeCompletion.bind(this);
      this.addLike = this.addLike.bind(this);
    };

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
          this.
        })
      }
     
         

            //make a route to database after setState  
              //make a request to the post and delete routes 
              // make post add 1 
              //make delete subtract 1
        
   
        
}
