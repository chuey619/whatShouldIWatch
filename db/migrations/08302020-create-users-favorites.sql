CREATE TABLE users_favorites (
    ID SERIAL PRIMARY KEY,
    user_id INT,
    movie_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);

ALTER TABLE users_favorites 
ADD CONSTRAINT users_favorite UNIQUE (user_id, movie_id);