import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FileService } from './services/file/file.service';
import { S3Provider } from './provider/s3/s3.provider';

@Module({
  controllers: [FilesController],
  providers: [FileService, S3Provider]
})
export class FilesModule {}
