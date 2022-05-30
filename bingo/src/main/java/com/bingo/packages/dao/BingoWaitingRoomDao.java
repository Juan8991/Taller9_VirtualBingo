package com.bingo.packages.dao;

import com.bingo.packages.domain.BingoWaitingRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BingoWaitingRoomDao extends JpaRepository<BingoWaitingRoom,Long> {
}
