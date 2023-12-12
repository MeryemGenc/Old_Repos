var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gezilecekYerler');
mongoose.set('debug',true);


mongoose.Promise = mongoose.Promise;

var yerSchema = new mongoose.Schema({
    isim:{
        type:String,
        required: 'Yer imi bos gecilemez.'
    },
    ziyaret:{
        type:Boolean,
        default:false
    },
    olusturulmaTarihi:{
        type:Date,
        default:Date.now
    }
});


module.exports = mongoose.model('yer', yerSchema);
