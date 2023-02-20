-- Active: 1676900243788@@127.0.0.1@3306

CREATE TABLE courses (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL
);

INSERT INTO courses (id, name)
VALUES
("c001", "Javascript"),
("c002", "React"),
("c003", "Typescript");

CREATE TABLE lessons (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    amount INTEGER NOT NULL,
    level TEXT NOT NULL,
    course_id TEXT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

INSERT INTO lessons (id, amount, level, course_id)
VALUES
("l001", "10", "easy", "c001"),
("l002", "15", "hard", "c002"),
("l003", "12", "medium", "c003");


DROP TABLE courses;
DROP TABLE lessons;

SELECT * FROM lessons;