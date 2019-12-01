package com.example.demo.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;
import javax.websocket.server.PathParam;
import javax.xml.ws.Response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.resource.HttpResource;

import com.example.demo.model.Catagory;
import com.example.demo.repository.CatagoryRepository;

@RestController
@RequestMapping("/api")
public class CatagoryController {
	private CatagoryRepository catagoryRepository;

	public CatagoryController(CatagoryRepository catagoryRepository) {
		super();
		this.catagoryRepository = catagoryRepository;
	}
	@GetMapping("/catagories")
	Collection<Catagory> catagories(){
		
		return catagoryRepository.findAll();
		
	}
	
	@GetMapping("/catagory/{id}")
	ResponseEntity<?> getCatagory(@PathVariable Long id){
		Optional<Catagory> catagory=catagoryRepository.findById(id);
		return catagory.map(response->ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
		
	}
	
	@PostMapping("/catagory")
	ResponseEntity<Catagory> createCatagory(@Valid @RequestBody Catagory catagory)throws URISyntaxException {
		Catagory result=catagoryRepository.save(catagory);
		
		return ResponseEntity.created(new URI("/api/catagory"+result.getId())).body(result);
		
	}
	
	@PutMapping("/catagory/{id}")
	ResponseEntity<Catagory> updateCatagory(@Valid @RequestBody Catagory catagory){
		Catagory result=catagoryRepository.save(catagory);
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping("/catagory/{id}")
	ResponseEntity<?> deleteCatagory(@PathVariable Long id){
		catagoryRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
}
