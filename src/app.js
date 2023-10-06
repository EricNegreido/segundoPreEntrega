import express from 'express';
import cartsRouter from './routes/carts.router.js';
import productsRouter from './routes/products.router.js';
import viewsRouter from './routes/views.router.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import __dirname from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/products', productsRouter);

try {
    await mongoose.connect('mongodb+srv://ericnegreidooo:NwhiTotw0VIjgLVp@cluster47300ap.yetvntr.mongodb.net/ecommerce?retryWrites=true&w=majority');
    console.log('BDD conectada');
} catch (error) {
    console.log(error.menssage);
    
};


app.listen(8080, () => console.log('server running'));

