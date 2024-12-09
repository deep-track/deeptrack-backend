import { IsNotEmpty, IsString, MaxLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UploadImageDto {
  @ApiProperty({
    description: 'Original filename of the id',
    example: 'id.jpg'
  })
  @IsNotEmpty({ message: 'Filename cannot be empty' })
  @IsString({ message: 'Filename must be a string' })
  @MaxLength(255, { message: 'Filename is too long' })
  @Matches(/\.(jpg|jpeg|png)$/i, { 
    message: 'Only image files (jpg, jpeg, png) are allowed' 
  })
  filename: string;

}