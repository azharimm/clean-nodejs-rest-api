const User = require('../models/User');

exports.index = async (req, res) => {
	try{
		const users = await User.find({}).limit(5);
		res.send(users);
	}catch(e){
		res.status(500).send(e);
	}
}

exports.show = async (req, res) => {
	const _id = req.params.id;
	try{
		const user = await User.findOne({_id});
		if(!user){
			return res.status(404).send();
		}else{
			res.send(user);

		}
	}catch(e){
		res.status(500).send(e);
	}
}

exports.store = async (req, res) => {
	const user = req.body;
	const saveUser = new User(user);
	try{
		await saveUser.save();
		res.send(saveUser);
	}catch(e){
		res.status(500).send(e);
	}
}

exports.update = async (req, res) => {
	const _id = req.params.id;
	try{
		const user = await User.findOneAndUpdate({_id}, req.body);
		res.send(user);
	}catch(e){
		res.status(500).send(e);
	}
}

exports.destroy = async (req, res) => {
	const _id = req.params.id;
	try{
		const user = await User.findOneAndDelete({_id});
		res.send(user);
	}catch(e){
		res.status(500).send(e);
	}
}