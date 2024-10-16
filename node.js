const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const fs = require('fs');

const app = express();

const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.get('/html',(req,res) => {
    fs.appendFile('mynewfile1.json', `{
    "name": "andrey",
    "age": 0,
    "decs": ""
}`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    // fs.appendFile('absecond.json', 'Hello content!', function(req,res) {
    //     // res.writeHead(200,{'Content-type':'text/html'})
    //     // res.write(data);
    //     return res.end();
    // })
    // fs.readFile('absecond.json', function(err,data) {
    //     if (err) throw err
    //     res.writeHead(200,{'Content-type':'text/html'});
    //     res.write(data);
    //     return res.end();
    // })
})


app.engine('hbs', hbs.engine);
app.set('view engine' ,'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('main');
})


let port = 3000;
app.listen(port, () => {
    console.log(`the server has just been started http://localhost:${port}`)
});