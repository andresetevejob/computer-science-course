package com.nextu.storage.services;

import com.nextu.storage.dto.BucketDTO;
import com.nextu.storage.entities.Bucket;
import com.nextu.storage.repository.BucketRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Slf4j
@Service
public class BucketService {
  private final BucketRepository bucketRepository;


  public void create(BucketDTO bucketDTO){
      Bucket bucket = new Bucket();
      bucket.setLabel(bucketDTO.getLabel());
      bucket.setDescription(bucket.getDescription());
      Bucket bucketResult = bucketRepository.save(bucket);
      bucketDTO.setId(bucketResult.getId());
  }

  public Bucket findById(String id){
      return  bucketRepository.findById(id).orElseGet(null);
  }
}
