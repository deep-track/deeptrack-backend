import { Module } from '@nestjs/common';
import { DrizzleAsyncProvider, drizzleProvider } from './drizzle.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  })],
  providers: [...drizzleProvider],
  exports: [DrizzleAsyncProvider],
})
export class LibDrizzleModule {}
