import { IsNotEmpty, IsString, MaxLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UploadImageDto {
  @ApiProperty({
    description: 'Original filename url',
    example: 'https://front-id.aws'
  })
  @IsNotEmpty({ message: 'Filename cannot be empty' })
  @IsString({ message: 'Filename must be a string' })
  @MaxLength(255, { message: 'Filename is too long' })
  filename: string;

}