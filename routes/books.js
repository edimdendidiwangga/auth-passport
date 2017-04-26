const router = require('express').Router();
const bookController = require('../controllers/books')
let helper = require('../helpers/verify_token')

router.get('/', helper.auth, bookController.getAll)
router.post('/', helper.auth, bookController.insertOne)
router.put('/:id', helper.auth, bookController.updateById)
router.delete('/:id', helper.auth, bookController.deleteById)

module.exports = router;
