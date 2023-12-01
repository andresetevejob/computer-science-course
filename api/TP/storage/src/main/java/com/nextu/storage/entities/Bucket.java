package com.nextu.storage.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Version;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.OffsetDateTime;
import java.util.List;

@Document
@Data
public class Bucket {
    @Id
    private String id;
    private String label;
    private String description;
    private OffsetDateTime dateCreated;

    @Version
    private Long version;
    @DocumentReference
    private List<FileData> files;
}
