const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users', {
	useNewUrlParser : true,
	useUnifiedTopology: true,
	useFindAndModify: false
}, (err)=>{
	if(!err){
		console.log('Connection successful');
	}else{
		console.log('No Connection');
	}
});