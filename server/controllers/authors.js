Author = require('../models/').Author;
Book = require('../models/').Book;

module.exports = {
	index(req, res) {
		Author.findAll({
			include: Book
		})
		.then(function (authors) {
			res.status(200).json(authors);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	},
	
	show(req, res) {
		Author.findById(req.params.id, {
			include: Book
		})
		.then(function (author) {
			res.status(200).json(author);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	},

	create(req, res) {
		Author.create(req.body)
		.then(function (newAuthor) {
			res.status(200).json(newAuthor);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	},

	update(req, res) {
		Author.update(req.body, {
			where: {
				id: req.params.id
			}
		})
		.then(function (updatedAuthor) {
			res.status(200).json(updatedAuthor);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	},

	delete(req, res) {
		Author.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function (deletedAuthor) {
			res.status(200).json(deletedAuthor);
		})
		.catch(function (error) {
			res.status(500).json(error);
		})
	}	
};