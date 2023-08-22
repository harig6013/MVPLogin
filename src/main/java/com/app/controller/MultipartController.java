package com.app.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.entity.MultipartEntity;
import com.app.repository.MultipartRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "check")

public class MultipartController {

    @Autowired
    MultipartRepository imageRepository;

    @PostMapping("/upload")
    public MultipartEntity uplaodImage(@RequestParam("myFile") MultipartFile file) throws IOException {

        MultipartEntity img = new MultipartEntity( file.getOriginalFilename(),file.getContentType(),file.getBytes() );


        final MultipartEntity savedImage = imageRepository.save(img);


        System.out.println("Image saved");


        return savedImage;


    }
}
