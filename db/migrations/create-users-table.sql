CREATE TABLE users_services (
    id SERIAL PRIMARY KEY,
    user_id INT,
    service_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(service_id) REFERENCES services(id)
);