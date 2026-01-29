import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('/ (GET)', () => {
    it('should return Hello World message', () => {
      return request(app.getHttpServer()).get('/').expect(200).expect({
        Hello: 'World',
      });
    });
  });

  describe('/items/:id (GET)', () => {
    it('should return item with id only', () => {
      return request(app.getHttpServer()).get('/items/5').expect(200).expect({
        item_id: 5,
        q: null,
      });
    });

    it('should return item with id and query parameter', () => {
      return request(app.getHttpServer())
        .get('/items/10?q=test')
        .expect(200)
        .expect({
          item_id: 10,
          q: 'test',
        });
    });
  });

  describe('Error handling', () => {
    it('should return 404 for non-existent routes', () => {
      return request(app.getHttpServer())
        .get('/non-existent-route')
        .expect(404);
    });
  });
});
