package com.sopra.TPVolAngular.web.controller.rest;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.annotation.JsonView;
import com.sopra.TPVolAngular.model.Passager;
import com.sopra.TPVolAngular.model.view.JsonViews;
import com.sopra.TPVolAngular.repositories.PassagerRepository;

@CrossOrigin(origins= {"*"})
@RestController
@RequestMapping("/rest/passager")
public class PassagerRestController {

	@Autowired
	private PassagerRepository passagerRepository;
	
	@RequestMapping("")
	public ModelAndView home() {
		return new ModelAndView("redirect:/client/");
	}
	
	@JsonView(JsonViews.Common.class)
	@GetMapping(path = {"/",""})
	public ResponseEntity<List<Passager>> findAll(){
		return new ResponseEntity<>(passagerRepository.findAll(), HttpStatus.OK);
	}
	
	@JsonView(JsonViews.Common.class)
	@GetMapping(value = "/{id}")
	public ResponseEntity<Passager> findById(@PathVariable(name = "id") Long id){
		ResponseEntity<Passager> response = null;
		Optional<Passager> opt = passagerRepository.findById(id);
		if (opt.isPresent()) {
			response = new ResponseEntity<>(opt.get(), HttpStatus.OK);
		} else {
			response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return response;
	}
	
	@PostMapping(path = {"/", ""})
	public ResponseEntity<Void> createPassager(@Valid @RequestBody Passager passager, BindingResult br,
			UriComponentsBuilder uCB){
		ResponseEntity<Void> response = null;
		if (br.hasErrors()) {
			response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else {
			passagerRepository.save(passager);
			HttpHeaders header = new HttpHeaders();
			header.setLocation(uCB.path("/rest/reservation/{id}").buildAndExpand(passager.getIdPassager()).toUri());
			response = new ResponseEntity<Void>(HttpStatus.CREATED);
		}
		return response;
	}
	
	@PutMapping(path = { "/", "" })
	@JsonView(JsonViews.Common.class)
	public ResponseEntity<Passager> update(@Valid @RequestBody Passager passager, BindingResult br){
		ResponseEntity<Passager> response = null;
		if (br.hasErrors() || passager.getIdPassager() == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		Optional<Passager> opt = passagerRepository.findById(passager.getIdPassager());
		if (opt.isPresent()) {
			Passager reservationEnBase = opt.get();
			reservationEnBase.setAdresse(passager.getAdresse());
			reservationEnBase.setIdPassager(passager.getIdPassager());
			reservationEnBase.setNom(passager.getNom());
			reservationEnBase.setPrenom(passager.getPrenom());
			reservationEnBase.setReservations(passager.getReservations());
			passagerRepository.save(reservationEnBase);
			return new ResponseEntity<Passager>(reservationEnBase, HttpStatus.OK);
		} else {
			response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return response;	
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable(name = "id") Long id) {
		Optional<Passager> opt = passagerRepository.findById(id);
		ResponseEntity<Void> response = null;
		if (opt.isPresent()) {
			passagerRepository.delete(opt.get());
			response = new ResponseEntity<>(HttpStatus.OK);
		} else {
			response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return response;
	}
}
