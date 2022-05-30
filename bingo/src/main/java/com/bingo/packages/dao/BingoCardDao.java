package com.bingo.packages.dao;

import com.bingo.packages.domain.BingoCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BingoCardDao extends JpaRepository<BingoCard,Long> {
}

