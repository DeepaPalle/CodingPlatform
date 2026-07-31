package com.example.codingplatform.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@Tag(name = "Swagger Demo", description = "Sample APIs for Swagger")
public class SwaggerDemoController {

    @GetMapping("/hello")
    @Operation(summary = "Hello API")
    public String hello() {
        return "Welcome to Coding Platform";
    }

    @PostMapping("/register")
    @Operation(summary = "Register User")
    public String register() {
        return "User Registered Successfully";
    }

    @PostMapping("/login")
    @Operation(summary = "Login User")
    public String login() {
        return "Login Successful";
    }

    @GetMapping("/problems")
    @Operation(summary = "Get All Problems")
    public String problems() {
        return "Problem List";
    }

    @PostMapping("/submissions")
    @Operation(summary = "Submit Solution")
    public String submit() {
        return "Submission Successful";
    }
}