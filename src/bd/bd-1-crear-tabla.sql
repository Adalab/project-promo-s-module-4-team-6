CREATE TABLE projects (
id_project int primary key auto_increment,
name varchar(100) not null,
slogan varchar(1024) not null,
`desc` varchar(1024) not null,
repo varchar(1024) not null,
demo varchar(1024) not null,
technologies varchar(1024) not null,
image longtext not null,
photo longtext not null
);

CREATE TABLE autors (
id_autor int primary key auto_increment,
job varchar(1024) not null,
autor varchar(1024) not null
);

INSERT INTO projects (name, slogan, `desc`, repo, demo, technologies, image, photo) VALUE
('Project 1' , 'Slogan project 1' , 'desc project 1','https://github.com/Adalab/project-promo-s-module-3-team-6', 'https://github.com/Adalab/project-promo-s-module-3-team-6', 'react', 'https://bit.ly/3TOZeGJ', 'https://cdn-icons-png.flaticon.com/512/147/147144.png'),
('Project 2' , 'Slogan project 2' , 'desc project 2', 'https://github.com/Adalab/project-promo-s-module-3-team-6', 'https://github.com/Adalab/project-promo-s-module-3-team-6', 'react', 'https://bit.ly/3TOZeGJ', 'https://cdn-icons-png.flaticon.com/512/147/147144.png'),
('Project 3' , 'Slogan project 3' , 'desc project 3', 'https://github.com/Adalab/project-promo-s-module-3-team-6', 'https://github.com/Adalab/project-promo-s-module-3-team-6', 'react', 'https://bit.ly/3TOZeGJ', 'https://cdn-icons-png.flaticon.com/512/147/147144.png'),
('Project 4' , 'Slogan project 4' , 'desc project 4', 'https://github.com/Adalab/project-promo-s-module-3-team-6', 'https://github.com/Adalab/project-promo-s-module-3-team-6', 'react', 'https://bit.ly/3TOZeGJ', 'https://cdn-icons-png.flaticon.com/512/147/147144.png');

INSERT INTO autors ( autor, job) VALUE
('Autor 1' , 'job autor 1'),
('Autor 2' , 'job autor 2'),
('Autor 3' , 'job autor 3'),
('Autor 4' , 'job autor 4');