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
      };
      this.togglelikeCompletion = this.togglelikeCompletion.bind(this);
      this.addLike = this.addLike.bind(this);
    };

    toggleLikeButton(likeButton) {

    }


      render() {  
        return (
          <div className="like-container">
                              {/* we dont have a view so idk yet what to put */}
     <button onClick={() => this. ('like')}>Like</button> 
      </div>
        )
      }
     
         

            //make a route to database after setState  
              //make a request to the post and delete routes 
              // make post add 1 
              //make delete subtract 1
        }
   
        
}
