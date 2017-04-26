const router = require('express').Router();
const transactionController = require('../controllers/transactions')
let helper = require('../helpers/verify_token')

router.get('/', helper.auth, transactionController.getAll)
router.post('/', helper.auth, transactionController.insertOne)
router.put('/:id', helper.auth, transactionController.updateById)
router.delete('/:id', helper.auth, transactionController.deleteById)

module.exports = router;
