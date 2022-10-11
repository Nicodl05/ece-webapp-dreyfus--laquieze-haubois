let db = {
    articles: [
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'My article',
        content: 'Content of the article.',
        date: '04/10/2022',
        author: 'Liz Gringer'
      },
      // ...
    ],
    comments: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      // ...
    ]
  }
const express = require('express')
const router = express.Router()
const names = ["Nicolas", "Cyril"];
router.route('/').get((req, res) => {
    res.send('Hello World!');
})
router.route('/hello').get((req,res) =>
{
    const name = req.query.name;
    console.log(name);
    switch(name){
        case "Nicolas":
            console.log(name);
            res.send('\nC\'est ' + name + '\nC\'est une des personnes du groupe, il adore la programmation et le sport.');
            console.log(name);
            break;
        case "Cyril":
            console.log(name);
            res.send('C\'est ' + name  + 'C\'est une des personnes du groupe, il adore la programmation et le cafe froid.');
            break;
         default:
            if(!name){
                res.send("Bonjour à toi personne anonyme")
            }
            else
                res.send("Bonjour à toi "+ name);
            break;
    }
})
router.route('/about').get((req,res) =>{
    var json_data = require('./content/about.json')
    try{
        res.send(json_data);
    }
    catch(err){
        console.log("Error parsing Json string", err)
    }
});
router.route('/articles').post((req,res) => {
    const article = req.body;
    console.log(article);
    db.articles.push(article);
    res.send(db.articles);
})
router.route('/articles').get((req,res) => {
    res.send(db.articles);
})
router.route('/articles/:articleId').get((req,res) => {
    const articleId = req.params.articleId;
    console.log(articleId);
    const article = db.articles.find(article => article.id === articleId);
    console.log(article);
    res.send(article);
    //res.send("Found")
})




module.exports = router;