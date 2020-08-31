import React from 'react';
import axios from 'axios';
import { response } from 'express';

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
      };
    };


      render() {  
        return (
     <button onClick={this.addLike}> Likes: {this.state.counter} </button>
        )
      }
      addLike = () => {
          let newLike = this.state.counter + 1;
          this.setState({
              counter: newLike
          })
         fetch('/addLike', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(LikeButton),
         })
         .then(res => res.json())
         .then(LikeButton => {
             console.log('liked:', LikeButton);
         })
         .catch((error) => {
             console.error('Error', error);
         })
         

            //make a route to database after setState  
              //make a request to the post and delete routes 
              // make post add 1 
              //make delete subtract 1
        }
   
        
}
