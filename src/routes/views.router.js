import { Router } from "express";
import Products from '../dao/dbManagers/products.manager.js'
import Carts from '../dao/dbManagers/carts.manager.js'

const router = Router();

const productsManager = new Products();

const cartsManager = new Carts();


router.get('/products-view', async (req, res) =>{
    try{
        const products = await productsManager.getAll();
        res.render('products', {products}) //renderizo views
    }catch(error){
        console.log(error.message);
    }
});

router.get('/carts-view', async (req, res) =>{
    try{
        const carts = await cartsManager.getAll();
        res.render('carts', {carts}) //renderizo views
    }catch(error){
        console.log(error.message);
    }
});

export default router;