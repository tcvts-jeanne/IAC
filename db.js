const instanceIP3 = process.env.INSTANCE_IP_3;
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: `ec2-${instanceIP3}.eu-central-1.compute.amazonaws.com`,
    user: 'root',
    password: 'rootpass',
    database: 'songs_db',
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

module.exports = connection;
