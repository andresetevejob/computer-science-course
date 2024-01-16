package com.nextu.javadocker.controllers;

import com.nextu.javadocker.services.StoragService;
import com.nextu.javadocker.utils.FileUtils;
import com.nextu.javadocker.utils.MimeTypeUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/files")
@Slf4j
public class FileController {
    private final StoragService storagService;
    @GetMapping(value = "/find/{name}")
    public ResponseEntity<?> find(@PathVariable String name){
            try {
                File file = this.storagService.load(name);
                var extension = FileUtils.getExtension(file.getName());
                Path path = Paths.get(file.getAbsolutePath());
                ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));
                return ResponseEntity
                        .ok()
                        .contentLength(path.toFile().length())
                        .contentType(MediaType.parseMediaType(MimeTypeUtils.getMimeType(extension)))
                        .body(resource);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
    }
    @PostMapping(value = "/add")
    public ResponseEntity<String> saveFile(@RequestParam MultipartFile file){
        String messageError = "";
        try{
            String fileName = storagService.save(file);
            return ResponseEntity.ok(fileName);
        } catch (Exception e){
            messageError = e.getMessage();
        }
        return ResponseEntity.badRequest().body(messageError);
    }
}
