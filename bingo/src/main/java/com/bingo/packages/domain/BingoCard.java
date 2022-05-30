package com.bingo.packages.domain;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@Table(name = "bingo_card_tb")
public class BingoCard implements Serializable {

    private  static  final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idbingo_card_Tb")
    private Long idBingoCard;

    @Column(name="bingo_card_Numbers")
    private int playerCard;


}
