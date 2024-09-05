import { Injectable } from '@nestjs/common';
import { UploadFileDto } from 'src/files/dto/upload-file.dto';
import { S3Provider } from 'src/files/provider/s3/s3.provider';

@Injectable()
export class FileService {

    constructor(
        private s3Provider: S3Provider
    ){}

    uploadFile(body: UploadFileDto){
        return this.s3Provider.uploadFile(body)
    }
}
