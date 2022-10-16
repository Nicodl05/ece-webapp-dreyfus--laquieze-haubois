import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import data from '../data.json';
function Articles() {
    return (
        <div>
            <head><h1>Articles</h1></head>
        <body> <p>This is the articles page</p> </body>
        
            </div>
            
    )
    }
    
    export default Articles
    const newdata = data.map((data) => {
        return (
            <div>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
            </div>
        )
    })