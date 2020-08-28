INSERT INTO users 
(username, email, password_digest)
VALUES
('test001', 'test1@test.com', 'abcdef'),
('test002', 'test2@test.com', 'abcdefg'),
('test003', 'test3@test.com', 'abcdefgh');

INSERT INTO services
(name)
VALUES
('netflix'),
('hulu'),
('amazon prime');

INSERT INTO movies 
(title, service_id)
VALUES 
('test_movie1', 1),
('test_movie2', 1),
('test_movie3', 2),
('test_movie4', 2),
('test_movie5', 3),
('test_movie6', 3);

INSERT INTO users_services 
(user_id, service_id)
VALUES
(3, 1),
(4, 2),
(5, 3);

INSERT INTO movies_services
(movie_id, service_id)
VALUES
(1 , 1),
(1, 2),
(2, 1),
(2, 3);


SELECT movies.* FROM users_services JOIN movies
ON users_services.service_id = movies.service_id
WHERE users_services.user_id = 3;


