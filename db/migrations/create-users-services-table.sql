CREATE TABLE users_services (
    id SERIAL PRIMARY KEY,
    user_id INT,
    service_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(service_id) REFERENCES services(id)
);

ALTER TABLE users_services
ADD CONSTRAINT user_service UNIQUE (user_id, service_id);