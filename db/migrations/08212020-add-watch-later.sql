CREATE TABLE users_watch_later (
    id SERIAL PRIMARY KEY,
    user_id INT,
    movie_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    UNIQUE (movie_id, user_id)
);