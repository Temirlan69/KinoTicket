const ProductModel = require('../models/Product');

exports.create = async (req, res) => {

    // console.log(req.body, )
    if ( !req.body.title || !req.files.image) {
        res.status(400).send({message: "Content can not be empty"});
    }
    const image = req.files.image;

    const imageName = new Date().getTime().toString() + image.name;

    const product = new ProductModel({
        image: imageName,
        // username: req.body.username,
        title: req.body.title,
        // body: req.body.body,

    });


    await product.save()
        .then(() => {
            console.log(product);
            image.mv('./assets/img/' + imageName);
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
        });
}

exports.create_form = async (req, res)=>{
    res.render('create');
};

exports.get_all = async (req, res)=>{
    ProductModel.find({}, (err, products)=>{
        console.log(err, products);
        res.render('viewall', {products});
    });
};

exports.get_one = async (req, res)=>{
    ProductModel.find({
        username: req.params.username
    }, (err, products)=>{
        console.log(err, products);
        res.render('views/viewall', {products});
    });
};