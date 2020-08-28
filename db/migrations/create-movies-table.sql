CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    service_id INT,
    FOREIGN KEY (service_id) REFERENCES services(id)
)