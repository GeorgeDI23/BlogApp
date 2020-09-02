package com.zipcode.gjblog.blogservice;

import com.amazonaws.util.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class S3EngineService {

    private String s3Bucket;
    private AmazonS3 s3client;

    @Autowired
    public S3EngineService(AmazonS3 s3client, String s3Bucket) {
        this.s3client = s3client;
        this.s3Bucket = s3Bucket;
    }

    public void insertBase64IntoS3Bucket(String imageKey, String base64String){
        try{
            File imageFile = convert64toFile(base64String);
            this.s3client.putObject(
                    this.s3Bucket,
                    "Image/"+imageKey+".jpg",
                    imageFile
            );
        } catch (Exception e){
            Logger.getLogger("insertObjectIntoS3Bucket").log(Level.WARNING,e.toString());
        }
    }

    public String getS3ItemAsBase64(String imageKey){
        try {
            String key = "Image/"+imageKey+".jpg";
            S3Object s3object = this.s3client.getObject(this.s3Bucket, key);
            return convertS3ObjectToBase64(s3object);
        } catch (Exception e){
            Logger.getLogger("getS3ItemAsBase64").log(Level.WARNING,e.toString());
        }
        return "";
    }

    public String convertS3ObjectToBase64(S3Object s3object){
        try {
            S3ObjectInputStream inputStream = s3object.getObjectContent();
            byte[] bytes = IOUtils.toByteArray(inputStream);
            return Base64.getEncoder().encodeToString(bytes);
        } catch (IOException e){
            Logger.getLogger("convertS3ObjectToBase64").log(Level.WARNING,e.toString());
        }
        return "";
    }

    public static File convert64toFile(String encodedString){
        try {
            File tempFile = File.createTempFile("image", "jpg", null);
            FileOutputStream fos = new FileOutputStream(tempFile);
            fos.write(Base64.getDecoder().decode(encodedString));
            fos.close();
            return tempFile;
        }catch (IOException e){
            Logger.getLogger("Convert64toFile").log(Level.WARNING,e.toString());
            return null;
        }
    }


}
