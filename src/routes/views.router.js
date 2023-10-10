import { Router } from "express";
import Products from '../dao/dbManagers/products.manager.js'
import Carts from '../dao/dbManagers/carts.manager.js'

const router = Router();

const productsManager = new Products();

const cartsManager = new Carts();


router.get('/products', async (req, res) =>{
    const {page = 1 , limit = 5, sort, query} = req.query;
    try{
        const {docs, hasPrevPage, hasNextPage, nextPage, prevPage} = await productsManager.getAll(limit, page, sort, query);
        const products = docs;
        console.log(products)
        res.render('products', {
            products,
            hasPrevPage,
            hasNextPage,
            nextPage,
            prevPage
        }) //renderizo views
    }catch(error){
        console.log(error.message);
        res.status(500).send('ERROR AL CARGAR VIEWS')
    }
});

router.get('/carts/:cid', async (req, res) =>{

    const {cid} = req.params;
    try{
        const carts = await cartsManager.getArray(cid);
        res.send({status: 'sucess', payload: carts});
    }catch(error){
        console.log(error.message);
    }
});

export default router;