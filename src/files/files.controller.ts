import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UploadFileDto } from './dto/upload-file.dto';
import { Response } from 'express';
import { FileService } from './services/file/file.service';

@Controller('api/files')
export class FilesController {

    constructor(
        private fileService: FileService,
    ){}

    @Post('upload-file')
    async uploadFile(@Body() body: UploadFileDto, @Res() res: Response) {
        try {
            const response = await this.fileService.uploadFile(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
          throw error  
        }
    }

}
