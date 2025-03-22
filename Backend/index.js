const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require('./models/Users')
const Cart = require('./models/CartItem')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Anupam:Anu23@clusterfirst.wyae5.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFirst").then(() => {
  console.log("Mongodb Connected.")
}).catch((err) => {
  console.log(err)
})

app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  UsersModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ name: user.name, role: user.role })
        }
        else {
          res.json("The password is incorrect")
        }
      } else {
        res.json("No record existed.")
      }
    })
    .catch(err => res.json({ error: "server error" }))
})

app.post('/Signup', (req, res) => {
  UsersModel.create(req.body)
    .then(myusers => res.json(myusers))
    .catch(err => res.json(err))
})

app.post('/api/checkout', async (req, res) => {
  try {
    const { user, items, totalPrice } = req.body;
    const newCart = new Cart({ user, items, totalPrice });
    await newCart.save();
    res.status(201).json({ message: 'Cart saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Cart.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(3000, () => {
  console.log("Server is running on here on 3000 ")
})