const express = require('express');
const bodyParser = require('body-parser');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/shop', shopRoutes);

app.use('/admin', adminRoutes);

app.get('/add-product', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Add Product</title>
    </head>
    <body>
      <h1>Add Product</h1>
      <form action="/add-product" method="POST">
        <label for="product">Product:</label>
        <input type="text" id="product" name="product" required />
        <br /><br />
        <!-- New input for product size -->
        <label for="size">Product:</label>
        <input type="text" id="size" name="size" required />
        <br /><br />
        <button type="submit">Add Product</button>
      </form>
    </body>
  </html>
`);
});

app.post('/add-product', (req, res) => {

  const productName = req.body.product;
  const productSize = req.body.size;

  console.log(req.body);
  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);

  res.send('<h2>Product added! Check the console for details.</h2>');
});

app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});