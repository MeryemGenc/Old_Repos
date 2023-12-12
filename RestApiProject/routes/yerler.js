//const yer = require("../models/yer");

var     express         = require('express'),
        router          = express.Router(),
        Yer             = require('../models/yer');


//DB ye JSON data gönderme
router.get('/', (req,res) => {
    Yer.find()
    .then((yerlerDB) => {
        res.json(yerlerDB);
    })
    .catch((err) => {
        console.log(err),
        res.send(err);
    });
});


// DB ye yeni yer ekleme rout'u
router.post('/', (req,res)=> {
    console.log(req.body);
    Yer.create(req.body)
    .then((yeniYer)=> {
        res.status(201).json(yeniYer);
    })
    .catch((err) => {
        console.log('*****************EERRRR******************');
        console.log(err);
        res.send(err);
    });
});

// Show Route
router.get('/:yerID', (req,res)=> {
    Yer.findById(req.params.yerID)
    .then((bulunanYer)=> {
        res.json(bulunanYer);
    })
    .catch((err) => {
        console.log('*****************EERRRR******************');
        console.log(err);
        res.send(err);
    });
});


// Update Route
router.put('/:yerID', (req,res)=> {
    Yer.findByIdAndUpdate({_id:req.params.yerID},req.body, {new:true})
    .then((yer)=> {
        res.json(yer);
    })
    .catch((err) => {
        console.log('***************** EERRRR ******************');
        console.log(err);
        res.send(err);
    });
});


// Delete Route
router.delete('/:yerID', (req,res)=> {
    Yer.remove({_id:req.params.yerID})
    .then(()=> {
        res.json({mesaj: 'Kayit basari ile silindi.'});
    })
    .catch((err) => {
        console.log('***************** EERRRR ******************');
        console.log(err);
        res.send(err);
    });
});







module.exports = router;









