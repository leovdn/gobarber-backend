import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';
import { string } from '@hapi/joi';
import ICacheProvider from '../models/ICacheProvider';

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  public async recover(key: string): Promise<string | null> {
    const data = await this.client.get(key);

    return data;
  }

  public async invalidade(ket: string): Promise<void> {}
}