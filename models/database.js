var pg = require('pg');
var connectionString = 'postgres://mprdvnytfpbjff:oNO_8m4C1qsDe02XX86lCrr9TZ@ec2-184-72-240-189.compute-1.amazonaws.com:5432/d4at4i3ua739me';

var client = new pg.Client(connectionString);
client.connect();

var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });