CREATE SCHEMA IF NOT EXISTS bingo_DB DEFAULT CHARACTER SET utf8 ;
USE bingo_DB ;

-- -----------------------------------------------------
-- Table game_Tb
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS game_Tb (
  idgame_Tb INT NOT NULL AUTO_INCREMENT,
  game_state VARCHAR(15) NULL,
  game_winner VARCHAR(15) NULL,
  PRIMARY KEY (idgame_Tb),
  UNIQUE INDEX idgame_Tb_UNIQUE (idgame_Tb ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.bingo_card_Tb
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS bingo_card_Tb (
  idbingo_card_Tb INT NOT NULL AUTO_INCREMENT,
  bingo_card_Numbers VARCHAR(3) NULL,
  PRIMARY KEY (idbingo_card_Tb))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table player_Tb
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS player_Tb (
  idplayer_Tb VARCHAR(100) NOT NULL,
  bingo_card_Tb_id INT NOT NULL,
  userName VARCHAR(20) NULL,
  userPasword VARCHAR(60) NULL,
  userEmail VARCHAR(45) NULL,
  PRIMARY KEY (idplayer_Tb, bingo_card_Tb_id),
  INDEX fk_player_Tb_bingo_card_Tb_idx (bingo_card_Tb_id ASC) VISIBLE,
  CONSTRAINT fk_player_Tb_bingo_card_Tb
    FOREIGN KEY (bingo_card_Tb_id)
    REFERENCES bingo_card_Tb (idbingo_card_Tb)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.waiting_Room_Tb
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS waiting_Room_Tb (
  idwaiting_Room_Tb INT NOT NULL AUTO_INCREMENT,
  player_Tb_id VARCHAR(100) NOT NULL,
  player_Tb_bingo_card_Tb_id INT NOT NULL,
  game_Tb_id INT NOT NULL,
  PRIMARY KEY (idwaiting_Room_Tb, player_Tb_id, player_Tb_bingo_card_Tb_id, game_Tb_id),
  UNIQUE INDEX idwaiting_Room_Tb_UNIQUE (idwaiting_Room_Tb ASC) VISIBLE,
  INDEX fk_waiting_Room_Tb_player_Tb1_idx (player_Tb_id ASC, player_Tb_bingo_card_Tb_id ASC) VISIBLE,
  INDEX fk_waiting_Room_Tb_game_Tb1_idx (game_Tb_id ASC) VISIBLE,
  CONSTRAINT fk_waiting_Room_Tb_player_Tb1
    FOREIGN KEY (player_Tb_id , player_Tb_bingo_card_Tb_id)
    REFERENCES player_Tb (idplayer_Tb , bingo_card_Tb_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_waiting_Room_Tb_game_Tb1
    FOREIGN KEY (game_Tb_id)
    REFERENCES game_Tb (idgame_Tb)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;