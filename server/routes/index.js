const router = require('express').Router()
const health = require('./health')

router.use('/health', health)

module.exports = router
