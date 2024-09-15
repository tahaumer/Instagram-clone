const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const routes = require('./routes/index');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes')
const logger = require('./middleware/logger')
const connectDB = require('./config/db');
const uploadRoutes = require('./routes/uploads');

require('dotenv').config();
app.set('view engine', 'ejs');

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-auth-token']
}));
app.use('/profile-images', express.static(path.join(__dirname, 'profile-images')));

connectDB();

app.use('/', routes);
app.use('/api', userRoutes);
app.use('/api', uploadRoutes);
app.use('/api', authRoutes)


app.listen(3002, () => {
    console.log('Server is running on port 3002');
});