package com.bingo.packages.dao;

import com.bingo.packages.domain.BingoGame;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BingoGameDao extends JpaRepository<BingoGame,Long> {
}
