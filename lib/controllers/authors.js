const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await db.Authors.findAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await db.Authors.findByPk(req.params.id, {
        include: db.Books,
      });
      if (!data) next();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .post('/:id/books', async (req, res, next) => {
    try {
      const data = await db.Books.create({
        ...req.body,
        author_id: req.params.id,
      });
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
