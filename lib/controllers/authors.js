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
      const data = await db.Authors.findByPk(req.params.id);
      if (!data) next();
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
