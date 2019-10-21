const express = require('express');
const app = express();
require('./db/connection');
const PORT = process.env.PORT || 3334;
const userRoute = require('./routes/users');

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Users API');
});

app.use('/users', userRoute);

app.listen(PORT, ()=>console.log(`App running on port ${PORT}`));