

const url = require('url')
const qs = require('querystring')
module.exports ={


    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        const names =["Nicolas","Cyril"];
        res.writeHead(200, { 'Content-Type': 'text/plain' });       
        let test=0;
          if(path==='/hello' && 'name' in params){
            for(let i=0;i<names.length;i++){
              if(params['name']===names[i]){
                switch(i){
                  case 0:
                    res.write('C\'est ' + params['name'] + '\nC\'est une des personnes du groupe, il adore la programmation et le sport')
                    break;
                  case 1:
                    res.write('C\'est ' + params['name'] + '\nC\'est une des personnes du groupe, il adore la programmation et le cafe froid')
                    break;
                }                
              }
              else
                test++;
            }
            if(test===2)
              res.write('Hello '+ params['name'])
          }       
          else if(path === '/'){
            res.write('Bonjour tout le monde') 
          }
          else if(path==='/hello') {
            res.write('Bonjour a toi personne anonyme \nComment ca va ?')
          }        
        res.end();
      }
}
 