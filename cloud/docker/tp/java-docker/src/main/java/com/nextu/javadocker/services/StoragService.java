package com.nextu.javadocker.services;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.nextu.javadocker.utils.FileUtils;
import com.nextu.javadocker.exceptions.FileContentException;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
@Slf4j
public class StoragService {
    @Value("${filestore}")
    private String SERVER_LOCATION;
    private Path root;
    private final Logger logger = LoggerFactory.getLogger(StoragService.class);

    @PostConstruct
    public void init() {
        try {
            this.root = Paths.get(SERVER_LOCATION);
            Files.createDirectory(root);
        } catch (IOException e) {
            logger.warn("folder upload exits");
        }
    }

    public String save(MultipartFile file) throws FileContentException {
        return copyFile(file);
    }
    private String copyFile(MultipartFile file) throws FileContentException {
            var fileNameDest = FileUtils.generateStringFromDate(FileUtils.getExtension(file.getOriginalFilename()));
            try {
                Files.copy(file.getInputStream(), this.root.resolve(fileNameDest));
                return fileNameDest;
            } catch (Exception e) {
                logger.error("exception happened when saving file {}",e.getMessage());
                throw new FileContentException("Could not store the file. Error: " + e.getMessage());
            }
    }
    public File load(String filename) throws IOException {
        return new File(SERVER_LOCATION + filename);
    }
}
