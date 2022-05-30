package com.bingo.packages.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@Table(name = "waiting_room_Tb")
public class BingoWaitingRoom implements Serializable {
    private  static  final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idwaiting_Room_Tb", nullable = false)
    private Integer idwaiting_Room_Tb;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_Tb_id", nullable = false)
    private ArrayList<BingoPlayer> bingoPlayer;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "game_Tb_id", referencedColumnName = "idgame_Tb")
    private BingoGame bingoGame;


}
