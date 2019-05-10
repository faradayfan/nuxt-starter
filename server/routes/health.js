const router = require('express').Router()

router.get('/', (req, res) => {
  res.json({
    status: 'up'
  })
})

module.exports = router
