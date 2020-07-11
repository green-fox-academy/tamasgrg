CREATE SCHEMA `reddit` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci ;


CREATE TABLE `reddit`.`posts` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `timestamp` INT NULL,
  `score` INT NULL,
  `owner` VARCHAR(45) NULL,
  `vote` INT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `reddit`.`posts` (`id`, `title`, `url`, `timestamp`, `score`, `owner`, `vote`) VALUES ('25', 'Dear JavaScript', 'http://9gag.com', '1494339525', '791', 'null', '1');
INSERT INTO `reddit`.`posts` (`id`, `title`, `url`, `timestamp`, `score`, `owner`, `vote`) VALUES ('74', 'Crockford', 'http://9gag.com', '1494138425', '567', 'kristof4', '-1');