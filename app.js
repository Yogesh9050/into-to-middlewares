const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));

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
          <label for="product">Product Name:</label>
          <input type="text" id="product" name="product" required />
          <br /><br />
          <!-- New input for product size -->
          <label for="size">Product Size:</label>
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

  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);

  res.send('<h2>Product added! Check the console for details.</h2>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
