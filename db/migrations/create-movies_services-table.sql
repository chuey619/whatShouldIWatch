CREATE TABLE movies_services (
    id SERIAL PRIMARY KEY,
    movie_id INT,
    service_id INT,
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (service_id) REFERENCES services(id)
)
