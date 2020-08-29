CREATE SCHEMA `aliaser` ;

CREATE TABLE `aliaser`.`aliases` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(45) NULL,
  `alias` VARCHAR(45) NULL,
  `hitCount` INT NULL,
  `secretCode` INT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `aliaser`.`aliases` 
CHANGE COLUMN `hitCount` `hitCount` INT NULL DEFAULT 0 ;

