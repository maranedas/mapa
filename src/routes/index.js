const router = require('express').Router();

//rutas
router.get('/', (req, res) => {
    res.render('index'); //res = respuesta
});

module.exports = router;