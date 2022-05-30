package com.bingo.packages.dao;

import com.bingo.packages.domain.BingoPlayer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BingoPlayerDao extends JpaRepository<BingoPlayer,Long> {
}
