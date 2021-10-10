const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user.route');
const faqRoutes = require('./routes/faq.route');

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/admin/faq', faqRoutes);

// simple route
app.get("/", (req, res) => {
  res.json({
    success: 1,
    message: "This is RESTful API working."
  });
});


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

