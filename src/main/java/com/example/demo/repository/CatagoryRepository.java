package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Catagory;

public interface CatagoryRepository extends JpaRepository<Catagory, Long> {
Catagory findByName(String name);
}
