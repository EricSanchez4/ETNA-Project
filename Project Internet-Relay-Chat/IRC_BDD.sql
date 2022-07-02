CREATE TABLE users (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        nickname VARCHAR(80) NOT NULL,
        slot_id VARCHAR(255) NULL,
        password VARCHAR(20) NOT NULL,
        avatar VARCHAR(255) NULL,
        is_admin boolean NOT NULL DEFAULT 0,
        UNIQUE(nickname)
    );

    CREATE TABLE rooms (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        name VARCHAR(80) NOT NULL
    );

    CREATE TABLE messages (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        user_id INT NOT NULL,
        room_id INT NOT NULL,
        date TIMESTAMP NOT NULL,
        content TEXT NOT NULL,
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id),
        CONSTRAINT fk_room_id FOREIGN KEY (room_id) REFERENCES rooms(id)
    );

    CREATE TABLE connections (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        user_connection_id INT NOT NULL,
        room_connection_id INT NOT NULL,
        CONSTRAINT fk_user_connection_id FOREIGN KEY (user_connection_id) REFERENCES users(id),
        CONSTRAINT fk_room_connection_id FOREIGN KEY (room_connection_id) REFERENCES rooms(id)
    );

    CREATE TABLE friends (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        user_id1 INT NOT NULL,
        user_id2 INT NOT NULL,
        CONSTRAINT fk_user_id1 FOREIGN KEY (user_id1) REFERENCES users(id),
        CONSTRAINT fk_user_id2 FOREIGN KEY (user_id2) REFERENCES users(id)
    );
