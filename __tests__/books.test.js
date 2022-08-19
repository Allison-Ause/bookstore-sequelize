const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('/books routes', () => {
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
      ]);

      await db.Books.bulkCreate([
        {
          title: 'Stars Are Legion',
          genre: 'Sci-Fi',
          publisher: 'Tor',
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Gods War',
          genre: 'Horror',
          publisher: 'Tor',
          author_id: 1,
        },
        {
          title: 'The Mirror Empire',
          genre: 'Sci-Fi',
          publisher: 'Tor',
          author_id: 1,
        },
        {
          title: 'The Bell Jar',
          genre: 'Drama',
          publisher: 'Random House',
          author_id: 2,
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  it('#GET /api/v1/books should return a list of books', async () => {
    const resp = await request(app).get('/api/v1/books');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(4);
  });
  it('#GET /:id returns single book', async () => {
    const res = await request(app).get('/api/v1/books/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      title: 'Stars Are Legion',
      genre: 'Sci-Fi',
      publisher: 'Tor',
      author_id: 1,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
  it('#POST /authors adds an author to the table', async () => {
    const newAuthor = {
      first_name: 'Tessa',
      last_name: 'Bailey',
    };

    const res = await request(app)
      .post('/api/v1/books/authors')
      .send(newAuthor);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(Number),
      ...newAuthor,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
  afterAll(async () => {
    await db.sequelize.close();
  });
});

//   it('#GET /restaurant/:id should return the restaurant detail with nested reviews', async () => {
//     const resp = await request(app).get('/api/v1/restaurants/1');
//     expect(resp.status).toBe(200);
//     expect(resp.body).toEqual({
//       address: '1314 NW Glisan St Ste A, Portland, OR 97209-2717',
//       close: '5:00',
//       cost: 3,
//       createdAt: expect.any(String),
//       cuisine: 'Peruvian',
//       description:
//         'Andina draws inspiration from the native culinary traditions of Peru, as well as from the contemporary cooking by some of Peru’s leading chefs. Owner Doris Rodriguez de Platt, collaborates with Andina’s kitchen team to develop a menu that celebrates her family’s Andean roots, interweaving the ideas and techniques of both Criollo and Novo-Andean cuisines. The kitchen sources native and local ingredients to create dishes at once traditionally rooted and personally inspired. Founded in 2003, Andina emerged as one of the region’s leading Peruvian restaurants and continues to generate wide appeal within the food communities in and around Portland, and much further afield',
//       id: 1,
//       image:
//         'https://media-cdn.tripadvisor.com/media/photo-o/07/f6/b4/aa/lunch.jpg',
//       name: 'Andina Restaurant',
//       open: '9:00',
//       updatedAt: expect.any(String),
//       website: 'http://www.andinarestaurant.com/',
//       Reviews: [],
//     });
//   });
//   it('#POST /restaurants/:id/reviews should create a new review if user logged in', async () => {
//     const [agent, user] = await registerAndLogin();
//     const resp = await agent
//       .post('/api/v1/restaurants/1/reviews')
//       .send({ stars: 5, detail: 'Amazing!' });
//     expect(resp.status).toBe(200);
//     expect(resp.body).toEqual({
//       id: user.id,
//       detail: 'Amazing!',
//       restaurantId: 1,
//       stars: 5,
//       userId: 1,
//       createdAt: expect.any(String),
//       updatedAt: expect.any(String),
//     });
//   });
//   it('#POST /restaurants/:id/reviews should return a 401 if not authenticated', async () => {
//     const resp = await request(app)
//       .post('/api/v1/restaurants/1/reviews')
//       .send({ stars: 5, detail: 'Amazing!' });
//     expect(resp.status).toBe(401);
//   });
// });
//
