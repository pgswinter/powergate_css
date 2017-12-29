import express from 'express'

const server = express();

server.set('view engine', 'ejs');

server.get('/',(req,res)=>{
	res.render('index');
})
server.use(express.static("views")) // Set current patch inside the folder

server.listen(6969,'localhost', () => {
	console.log('Express listening on port', 6969)
})