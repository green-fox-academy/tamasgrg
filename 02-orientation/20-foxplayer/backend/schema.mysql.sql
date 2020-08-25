CREATE SCHEMA `foxplayer` ;

CREATE TABLE `foxplayer`.`playlists` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `playlist` TINYTEXT NULL,
  `system` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`));

CREATE TABLE `foxplayer`.`tracks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `path` TINYTEXT NULL,
  `playlist_id` INT NULL,
  PRIMARY KEY (`id`));