import { DrizzleAsyncProvider } from '@app/lib-drizzle/drizzle.provider';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as sc from '../../../libs/lib-drizzle/schema';

@Injectable()
export class ImagesAppService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof sc>,
  ) {}

  async detectai(filename: string) {
    try {
      const insertedImage = await this.db.insert(sc.images)
        .values({
          imageurl: filename
        })
        .returning();

      return {
        status: 200,
        data: insertedImage[0],
        message: "Image added to Database"
      };
      
    } catch (error) {
      console.error('Error inserting imageurl to db:', error);
      return {
        status: 500,
        data: null,
        message: "Error Inseting imageurl to db"
      };
    }
  }
}