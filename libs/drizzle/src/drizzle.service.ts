import { Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';
import * as schema from '../schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

@Injectable()
export class DrizzleService {
  private db: NodePgDatabase<typeof schema>;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    const connectionString = this.configService.get<string>('DATABASE_URL');
    const pool = new Pool({
      connectionString,
    });

    this.db = drizzle(pool, { schema });
  }

  getDatabase(): NodePgDatabase<typeof schema> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }
    return this.db;
  }
}