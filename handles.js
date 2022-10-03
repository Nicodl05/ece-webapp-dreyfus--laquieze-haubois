

const url = require('url')
const fs =require("fs"); // mettre en com et faire la lecture json
const qs = require('querystring')


//let about=require('/about.json')
module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname
    const params = qs.parse(route.query)
    const names = ["Nicolas", "Cyril"];
    let contenu=null;
    const content = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>'+  +'</title>' +
    '    </head>' + 
    '    <body>' +
    '       <p>'+contenu +'</p>' +
    '    </body>' +
    '</html>'
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    let test = 0;
    
    if (path === '/hello' && 'name' in params) {
      for (let i = 0; i < names.length; i++) {
        if (params['name'] === names[i]) {
          switch (i) {
            case 0:
              res.write(content +'\nC\'est ' + params['name'] + '\nC\'est une des personnes du groupe, il adore la programmation et le sport')
              break;
            case 1:
              res.write(content +'\nC\'est ' + params['name'] + '\nC\'est une des personnes du groupe, il adore la programmation et le cafe froid')
              break;
          }
        }
        else
          test++;
      }
      if (test === 2)
        res.write(content +'\nHello ' + params['name'])
    }
    else if (path === '/about') {
     // res.write("hello")
      fs.readFile("./content/about.json","utf-8",(err,jsonString) => {
        if(err){
          console.log("file read failed: ", err);
          return;
        }
           
        try{
        //  const content = JSON.parse(jsonString.toString())
         // contenu=content;
         // res.write(JSON.stringify(content))
          /*const content =JSON.stringify(jsonString)
          for(let i=0; i<content.length;i++){
            console.log(content[i])
          }*/
          
          // 
          ///res.write(content);
          console.log("file data: ", jsonString.toString())
          
        //  console.log("Contenu: ", content)

          //console.log("Title")
        }
        catch(err){
          console.log('Error parsing JSON string ', err)
        }
        
      })


    }
    else if(path==='/'){
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
