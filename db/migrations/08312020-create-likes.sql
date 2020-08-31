CREATE TABLE users_likes (
    ID SERIAL PRIMARY KEY,
    user_id INT,
    movie_id INT,
    likes INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);

ALTER TABLE users_likes
ADD CONSTRAINT users_likes UNIQUE (users_id, movie_id);