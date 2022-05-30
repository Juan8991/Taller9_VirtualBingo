package com.bingo.packages.domain;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "game_Tb")
public class BingoGame implements Serializable {
    private  static  final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idgame_Tb", nullable = false)
    private Integer idGame_Tb;

    @Column(name = "game_state")
    private Boolean gameOver;

    @Column(name = "game_winner", length = 50)
    private String idWinner;

}
