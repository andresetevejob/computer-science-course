package com.nextu.storage.repository;

import com.nextu.storage.entities.Bucket;
import com.nextu.storage.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BucketRepository extends MongoRepository<Bucket,String> {
}
