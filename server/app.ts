import path from 'path';
import express from 'express';

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, '../client')));


app.get('/api', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../client/index.html'));
});


app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
