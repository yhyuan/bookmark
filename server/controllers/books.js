Book = require('../models/').Book;

module.exports = {
	index(req, res) {
		Book.findAll()
		.then(function (books) {
			res.status(200).json(books);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	},
	
	show(req, res) {
		Book.findById(req.params.id)
		.then(function (book) {
			res.status(200).json(book);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	},

	create(req, res) {
		Book.create(req.body)
		.then(function (newBook) {
			res.status(200).json(newBook);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	},

	update(req, res) {
		Book.update(req.body, {
			where: {
				id: req.params.id
			}
		})
		.then(function (updatedBook) {
			res.status(200).json(updatedBook);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	},

	delete(req, res) {
		Book.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function (deletedBook) {
			res.status(200).json(deletedBook);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	}	
};