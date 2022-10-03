const url = require('url')

const fs =require("fs"); // mettre en com et faire la lecture json
const qs = require('querystring');
const { Script } = require('vm');


function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return value;
  }
  return value;
}

//let about=require('/about.json')
module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname
    const params = qs.parse(route.query)
    const names = ["Nicolas", "Cyril"];
    let contenu=null;
    console.log("hello")
    const foo ={
      "title": "About",
    "content": "Content Lab2",
    "author": "Nicolas Dreyfus--Laquièze et Cyril Haubois",
    "date": "02/10/2022",
    };
    const content = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    
    'meta name="viewport" content="width=device-width, initial-scale=1.0">'
    '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
    '        <title>'+  +'</title>' +
    '    </head>' + 
    '    <body>' +
    '       <script type="text/javascript">' 
   '          fetch("about.json")'
   '            .then(response => response.json())'
   '              .then(data => {'
   '                 for (var i = 0; i<data.items.length; i++){ '
   '                    let title = data.items[i].title;'
   '                    let content = data.items[i].content;'
    '                   let author = data.items[i].author;'
    '                   let date = data.items[i].date;'
    '                     document.querySelector("#tb1").innerHTML += `'
    '                     <tr>'
    '                      <td>$[title]</td>'
    '                      <td>$[content]</td>'
    '                      <td>$[author]</td>'
    '                       <td>$[date]</td>'
    '                       </tr>`;'
   '}'
   '})'    
    '</script>'
   
    '    </body>' +
    '</html>';
    res.writeHead(200, { 'Content-Type':  'text/html' });   
    let test = 0;    
    if (path === '/hello' && 'name' in params) {
      for (let i = 0; i < names.length; i++) {
        if (params['name'] === names[i]) {
          switch (i) {
            case 0:
              res.write(content +'\nC\'est ' + params['name'] + '\nC\'est une des personnes du groupe, il adore la programmation et le sport');
              break;
            case 1:
              res.write(content +'\nC\'est ' + params['name'] + '\nC\'est une des personnes du groupe, il adore la programmation et le cafe froid');
              break;
          }
        }
        else
          test++;
      }
      if (test === 2)
        res.write(content +'\nHello ' + params['name']);
    }
    else if (path === '/about') {
      res.write("hello")
      fs.readFile("./content/about.json","utf-8",(err,jsonString) => {   
        if(err){
          console.log("file read failed: ", err);
          return;
        } 
      try{     
          const about_content=JSON.stringify(jsonString.toString())  
          console.log(about_content[10] +" ")
          res.write(about_content[10])
         // document.getElementsById("author").
         // console.log(JSON.stringify(foo,replacer))
          //res.write(JSON.stringify(foo,replacer))    
          //res.write(jsonString.toString())
        
      }
      catch(err){
        console.log("Error parsing Json string", err)
      } 
    }) 
    }
    else if(path=== '/'){
      res.write(content +'\nBonjour tout le monde')
    }
    else if (path === '/hello') {
      
      res.write(content +'\nBonjour a toi personne anonyme \nComment ca va ?')
      
    }
    else {
      res.write('Error 404')
    }
    res.end();
  }
}
