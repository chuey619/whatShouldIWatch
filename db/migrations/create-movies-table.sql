CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    service_id INT,
    likes INT,
    FOREIGN KEY (service_id) REFERENCES services(id)
)

ALTER TABLE movies 
ADD CONSTRAINT one_movie UNIQUE(ref_id);