const express = require('express');
require('dotenv').config();

const inventoryRoutes = require('./routes/inventoryRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');

const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use('/inventory', inventoryRoutes);
app.use('/warehouses', warehouseRoutes);

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            name: 'instock server',
            version: '0.1.0'
        }
    });

});
app.listen(PORT, () => {
    console.log(`Hello! My server is listening on ${PORT}`);
});