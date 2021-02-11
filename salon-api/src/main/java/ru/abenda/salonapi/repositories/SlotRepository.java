package ru.abenda.salonapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ru.abenda.salonapi.entities.Slot;

public interface SlotRepository extends JpaRepository<Slot, Long> {

}
