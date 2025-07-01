
# Express Documentation

https://expressjs.com/en/api.html


# Express Function json format


app.use(express.json()) 

 console.log(req.body)

In Postman we post the data using json format

    {

         "name" :"Nilaj"
       
    }


 # Output 

 PS D:\Node js Tutorial\ExpressFunction> nodemon server.js     
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
listening on port 3000
{ name: 'Nilaj' }


app.use(express.json()) 

 console.log(req.body)

[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
listening on port 3000
Nilaj



# Express Function raw format

app.use(express.raw())

 console.log(req.body.toString)

In Postman Header section content type : application/octet-stream
In Body Type


    {

         "name" :"Nilaj"
       
    }

 # output

 PS D:\Node js Tutorial\ExpressFunction> nodemon raw.js   
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node raw.js`
listening on port 3000

    {

         "name" :"Nilaj"
       
    }


# Express Function Text format

app.use(express.text())

 console.log(req.body)

 In post man content type text 
 Hello


 # output

 PS D:\Node js Tutorial\ExpressFunction> nodemon text.js
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node text.js`
listening on port 3000
Hello


# Express Function static format txt img

app.use(express.static(`${__dirname}/public/`))


In Post Man GEt the http://localhost:3000/Text/text.txt

# Output
in Postman 
Hii Node 


# Express Function router


const router = express.Router();