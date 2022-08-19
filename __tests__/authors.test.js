const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('/authors routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Authors.bulkCreate([
        {
          first_name: 'Kameron',
          last_name: 'Hurley',
        },
        {
          first_name: 'Sylvia',
          last_name: 'Plath',
        },
        {
          first_name: 'Neil',
          last_name: 'Gaiman',
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  it('#GET /api/v1/authors should return a list of authors', async () => {
    const resp = await request(app).get('/api/v1/authors');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(3);
  });
  afterAll(async () => {
    await db.sequelize.close();
  });
});
