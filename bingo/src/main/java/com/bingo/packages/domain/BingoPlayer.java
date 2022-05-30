package com.bingo.packages.domain;


import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;


@Data
@Entity
@Table(name = "player_tb")
public class BingoPlayer implements Serializable {
    private  static  final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idplayer_Tb")
    private Long idPlayer;
    @Column(name = "userName")
    private String userName;
    @Column(name = "userPasword")
    private String userPassword;
    @Column(name = "userEmail")
    private String userEmail;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bingo_card_Tb_id", referencedColumnName = "idbingo_card_Tb")
    private BingoCard bingoCardId;


}
