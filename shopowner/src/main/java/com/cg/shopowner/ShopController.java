package com.cg.shopowner;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShopController {
	
	@Autowired
    private ShopService service;
	
	
	//retrieval
	@GetMapping("/shops")
	public List<Shop> list(){
		return service.listAll();
	}
	
	
	//retrieval by id
	@GetMapping("/shops/{id}")
	public ResponseEntity <Shop> get(@PathVariable Integer id){
		try {
			Shop shop = service.get(id);
			return new ResponseEntity<Shop>(shop,HttpStatus.OK);
		} 
		catch (Exception e) {
			return new ResponseEntity<Shop>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	//create
	@PostMapping("/shops")
	public void add(@RequestBody Shop shop) {
		service.save(shop);
	}
	
	//update
	@PutMapping("/shops/{id}")
	public ResponseEntity<?> update(@RequestBody Shop shop,@PathVariable Integer id){
		try {
			Shop existShop = service.get(id);
			service.save(shop);
			return new ResponseEntity <> (HttpStatus.OK);
		} 
		catch (Exception e) {
			return new ResponseEntity<> (HttpStatus.NOT_FOUND);
		}
	}

	
	@DeleteMapping("/shops/{id}")
	public void delete(@PathVariable Integer id) {
		service.delete(id);
	}

}
