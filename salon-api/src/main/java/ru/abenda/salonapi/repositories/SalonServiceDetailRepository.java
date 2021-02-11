package ru.abenda.salonapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ru.abenda.salonapi.entities.SalonServiceDetail;

public interface SalonServiceDetailRepository extends JpaRepository<SalonServiceDetail, Long> {

}
