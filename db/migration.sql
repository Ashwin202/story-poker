CREATE DATABASE `sprint_poker` CHARACTER SET `utf8mb4`;

CREATE TABLE `user`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100),
    `full_name` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL UNIQUE KEY,
    `password` VARCHAR(255) NOT NULL,
    `usertype` TINYINT NOT NULL DEFAULT 0,
    `status` TINYINT NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE `game`(
    `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `game_name` VARCHAR(255) NOT NULL UNIQUE KEY, 
    `sprint_number` INT NOT NULL,
    `story_list` VARCHAR(255), 
    `status` TINYINT, 
    `start_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    `end_time` DATETIME DEFAULT NULL, 
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `created_by` INT UNSIGNED NOT NULL,
    `current_story` INT,
    FOREIGN KEY (`created_by`) REFERENCES `user`(id)
);

CREATE TABLE `story`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `story_code` VARCHAR(50) NOT NULL,
    `story_name` VARCHAR(255) NOT NULL,
    `story_description` VARCHAR(255),
    `story_owner` INT UNSIGNED  NOT NULL,
    `story_point` INT, 
    `game_id` INT(11) UNSIGNED NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`story_owner`) REFERENCES `user`(id),
    FOREIGN KEY (`game_id`) REFERENCES `game`(id)
);
