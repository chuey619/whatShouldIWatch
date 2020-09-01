# what should i watch
Project 3

Hypothesis: 


Our app will let users have a single place to find movies and shows they can watch online.


UserStories:
When I enter the site I want to be able to sign up
When I sign up I want to be able to give my streaming services
	     I only want to see movies and shows i can watch based on 
the services I have given
   I want to be able to search for movies and shows
   
If I search for a movie or show that I can not watch I want to see that I cant watch it and have a link to sign up for the site where I can watch it
      I want to be able to go to where I can watch the movie or show on its show page
I want to be able to click on the show and see more detail about the show
I want to be able to see who contributed towards the shows making
I want to be able to see how many seasons
I want to be able to like the show like or dislike
I want to be able to add it to a watch later or favorites list


Routes(needs editing):
    Initial page: GET /
Sign into account: GET auth/login
Signout of account: GET auth/logout
Creating user: POST /user/
Creating account: POST /auth/register
Checking user: GET/verify
 Add to favorites list: /:id/favorites
Add to watch later: /:id/water-later
		



WireFrame:
 https://imgur.com/J3e1Llf    




API resource:
primary:https://www.guidebox.com/
Secondary: https://rapidapi.com/utelly/api/utelly 
	

Database(https://imgur.com/zO8wPmn ):
 We will have a table for users and a table for users collections
Movies pulled from the api will only be saved to our db if the user saved them to a collection
MVP:
Able to see certain movies based on what service you have assigned to your account, able to see detail about the movie, and uses utelly API


Moscow Method:
Must Have:
Ability to log in pick out subscription services
Able to tell if user is able to watch based on subscription service 
Ability to search for shows
Ability to add movies  to watch later and favorites list
Ability to delete from watch later and favorites list

Should have:
Ability to display all shows at once 
Tell info about who contributed to the show
Able to like a movie

Could have:
Login to the subscription service 
History search
Autocomplete search

Won’t have:
Won't have a ratings system
Won’t have search by country 

Targeted Users:
Quarantine survivors
People who enjoy watching shows and movies

Problem statement: 
With so many streaming services competing so much for the market it can be hard to find out where to watch a certain show
Are app will focus on all the platforms in order for you to be able to figure out where to make a new sign up for the 7 day free trial based on which show you want to watch and what platform


	

	
	Features: (history searches), (autocomplete searches)

	

 


