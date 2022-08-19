const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await db.Books.findAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await db.Books.findByPk(req.params.id);
      if (!data) next();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .post('/authors', async (req, res, next) => {
    try {
      console.log('REQ.BODY', req.body);
      const data = await db.Authors.create(req.body);
      console.log('DATA', data);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
// .post('/:id/authors', async (req, res, next) => {
//   try {
//     const data = await db.Authors.Create({
//       ...req.body,
//       id: req.params.id,
//     });
//     res.json(data);
//   } catch (e) {
//     next(e);
//   }
// });
