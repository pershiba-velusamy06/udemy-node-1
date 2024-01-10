
const RequestResponseFun = (req, res) => {
    // if(req.url==='/'){
    //     res.setHeader('Content-Type','text/html')

    //     res.write('<html>')
    //     res.write('<head><title>My first node page</title></head>')
    //     res.write('<body><form action="/message" method="POST"><h1>Please enter a message</h1></br><input type="text"/><button>Submit</button> </form></body>')
    //     res.write('</html>')
    //    return res.end()
    // }else{
    //     res.setHeader('Content-Type','text/html')

    //     res.write('<html>')
    //     res.write('<head><title>My first node page</title></head>')
    //     res.write('<body><h1>Hello welcome to node server</h1></body>')
    //     res.write('</html>')
    //     res.end()

    // }




    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write(
            '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
      }
      if (req.url === '/create-user') {
        const body = [];
      
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/users" method="POST"> <h1>User created successfully</h1><button type="submit">Go to user</button></form> </body>');
        res.write('</html>');
     
        res.end();
      }

}

module.exports = RequestResponseFun;