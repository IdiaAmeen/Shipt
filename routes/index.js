const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();


router.get('/', (req, res) => res.send('I am gROOT!'));
router.get('/products', controllers.getProducts);
router.post('/products', controllers.createProduct);
router.get('/products/:id', controllers.getProduct);
router.put('/products/:id', controllers.updateProduct);
router.delete('/products/:id', controllers.deleteProduct);


router.post('/sign-up', controllers.signUp); //? works
router.post('/sign-in', controllers.signIn); //? works
router.get('/verify', controllers.verifyUser); //? works
router.post('/change-password', controllers.changePassword)


module.exports = router