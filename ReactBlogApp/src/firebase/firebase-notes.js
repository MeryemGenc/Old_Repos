
//firebase üzerine data ekleme => .ref().set() ile root etkilenir . yeni ekleme yapılırsa eski silinir.
//set()'den sonra geriye 1 promise döner => then()&catch() ile yakalanır
/*database.ref().set({
    title: '1 noo',
    description: 'descriptioon',
    author: {
        name: 'alican',
        surname: 'yaldızz'
    }
}).then(() => {
    console.log('kayıt eklendi.');
    database.ref('tags').set(['angular','vue'
        ]).then(() => {
            console.log('tags done.');
        }).catch((e) => {
            console.log('HATTAA: ', e);
        });
}).catch((e) => {
    console.log('HATTAA: ', e);
});

console.log('çalıştı');*/








//SELECTING (SORGU) => değişiklik =>  olacaksa:on /olmayacaksa:once
//once => veri okunur ve veri tabanı ile bağlantı kopar.
/*database.ref("author/name")
    .once("value")
    .then((snapshot) => {
        const blog = snapshot.val();
        console.log(blog);
    }).catch((e) => {
        console.log('HATTAA: ', e);
    });*/

//selectıng (sorgu) => on
//on kullanıldığı için ilerleyen functionlarda da kullanılabilir. 
/*database.ref()
    .on("value", (snapshot) => {
        const blog = snapshot.val();
        console.log(blog);
    })
setTimeout(() => {
    database.ref("title").set('new titccle2');
}, 3000);
//on => bağlantı koparmak için => sonrasında database bu bağlantı üzerinden kullanılamaz.
setTimeout(() => {
    database.ref().off();
}, 6000);*/








//update-set fark => update güncelleme yapılan alan dışını etkilemez
//olmayan alan update edilirse yeni alan oluşturulur.
// database.ref().update({
//     description: 'NEW DESC',
//     "author/name": "Vedat",
//     "author/sname": "Yanıkt"
// })
// .then(() => {
//     console.log('desc update basarılı.');
// }).catch((e) => {
//     console.log('HATTAA: ', e);
// });


//UPDATE - 2nd way
// database.ref("author").update({
//     name: "Vedat",
//     sname: "Yanıkt"
// })







//DATA SİLME => REMOVE
/*database.ref('title')
    .remove()
    .then(() => {
        console.log('title silme basarılı.');
    }).catch((e) => {
        console.log('HATTAA: ', e);
    });*/

//DATA SİLME => REMOVE
/*database.ref('author/name')
    .remove()
    .then(() => {
        console.log('author/name silme basarılı.');
    }).catch((e) => {
        console.log('HATTAA: ', e);
    });*/

//DATA ROOT SİLME  => REMOVE
/*database.ref()
    .remove()
    .then(() => {
        console.log('root silme basarılı.');
    }).catch((e) => {
        console.log('HATTAA: ', e);
    });*/

//ALTERNATIVE REMOVE
//database.ref("title").set(null);







//sadece title alanını etkiler
//database.ref('title').set('blog title');

//sadece outhor => name alanını etkiler
//database.ref('author/name').set('Yılmaz');

//yeni alan ve içerisine dizi tanımlama
//database.ref('tags').set(['reactjs','javascript','nodejs']);

/////////////////////////////////////////////////////////////////////////////////
//***************************************************************************** */


/*const blogs = {
    101: {
        id: "10",
        title: "A Title"
    },
    102: {
        id: "20",
        title: "A Title"
    },
    103: {
        id: "30",
        title: "A Title"
    }
}

const users = {
    "CanK" : {
        name: "Can",
        surname: "Kaya"
    },
    "AyseY" : {
        name: "Ayse",
        surname: "Yeni"
    },
    "AhmetK" : {
        name: "Ahmet",
        surname: "Kunduz"
    }
}*/




// database.ref("blogs/-MS90E0dGhl3D2HTjqrE").set({
//     id: "7",
//     title: "title 7"
// })

// database.ref("users/AhmetK").once("value").then((snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref("blogs").once("value").then((snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref().set({
//     blogs,
//     users
// });


// database.ref("blogs").push({
//     id: "6",
//     title: "title 6"
// })




// database.ref("products").push({
//     name: "IPhone",
//     price: 1000
// })


// database.ref("products").push({
//     name: "Samsun",
//     price: 2000
// })


// database.ref("products").push({
//     name: "Blackberry",
//     price: 5000
// })