package com.demoproject.springboot_reactjs.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class entityController {

    @GetMapping("/{name}")
    public String greeting(@PathVariable("name") String name) {
        return "Welcome " + name;
    }
}
