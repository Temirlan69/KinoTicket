const BookModel = require('../models/booking')
// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.author && !req.body.name) {
        res.status(400).render('index', {mydata: "Content can not be empty!"})
    }

    const book = new BookModel({
        author: req.body.author,
        name: req.body.name,
        nickname: req.body.nickname,
        number: req.body.number,

    });

    await book.save()
        .then(() => {
            res.render('after')
        })
    .catch(err => {
        console.log(err)
});
};
// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const book = await BookModel.find({});
        console.log("Working")
        res.status(200).render('index', {mydata: book})
    } catch(error) {
        console.log("Working")
        res.status(404).render('index', {mydata: error.message})
    }
};
// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.query.email}).exec(); //change params to query
        res.status(200).render('index', {mydata: "user :"+ user.name +" "+user.nickname +" "
                + user.number +" "+ user.email
        })
    } catch(error) {
        res.status(404).render('index', {mydata: error.message})
    }
};
// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await UserModel.deleteOne({email: req.query.email}).then(data => {
        if (!data) {
            res.status(404).render('index', {mydata: "User not found"}).redirect('/')

        } else {
            res.render('index', {mydata: "user "+data.nickname+" deleted succesfully!"})
        }
    }).catch(err => {
        res.status(500).render('index', {mydata: err.message})
    });
};