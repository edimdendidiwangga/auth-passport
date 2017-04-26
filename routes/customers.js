const router = require('express').Router();
const customerController = require('../controllers/customers')
let helper = require('../helpers/verify_token')

router.get('/', helper.auth, customerController.getAll)
router.post('/', helper.auth, customerController.insertOne)
router.put('/:id', helper.auth, customerController.updateById)
router.delete('/:id', helper.auth, customerController.deleteById)

module.exports = router;
