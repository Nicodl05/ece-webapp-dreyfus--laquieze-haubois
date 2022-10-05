const url = require('url')

const qs = require('querystring');
const { Script } = require('vm');
module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname
    const params = qs.parse(route.query)
    const names = ["Nicolas", "Cyril"];
    let contenu=null;
    const content="";
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
      var json_data = require('./content/about.json') 
      try{     
          for( var elem in json_data){
            console.log(elem + ": " +json_data[elem] +" <br>")
            res.write(elem + ": " +json_data[elem] +" <br>");
          }
      }
      catch(err){
        console.log("Error parsing Json string", err)
      }
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
