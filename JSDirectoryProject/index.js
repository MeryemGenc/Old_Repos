//Arayuz Elementleri Secme
const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const mail = document.getElementById('mail');
const form = document.getElementById('form-rehber');
const kisiListesi = document.querySelector('.kisi-listesi');

//Event Listener Tanımlamaları
form.addEventListener('submit',kaydet);
kisiListesi.addEventListener('click', kisiIslemleriniYap);

//tüm kişiler için dizi
const tumKisilerDizisi = [];
let secilenSatir = undefined;

function kisiIslemleriniYap(event){

    if (event.target.classList.contains('btn--delete')) {
        const silinecekTr = event.target.parentElement.parentElement;
        const silinecekMail = event.target.parentElement.previousElementSibling.textContent;
        rehberdenSil(silinecekTr,silinecekMail);
    }if (event.target.classList.contains('btn--edit')) {
        document.querySelector('.kaydetGuncelle').value = 'Güncelle';
        const secilenTR = event.target.parentElement.parentElement;
        const guncellenecekMail = secilenTR.cells[2].textContent;

        ad.value = secilenTR.cells[0].textContent;
        soyad.value = secilenTR.cells[1].textContent;
        mail.value = secilenTR.cells[2].textContent;

        secilenSatir = secilenTR;
    }
}

function rehberdenSil(silinecekTrElement,silinecekMail){
    silinecekTrElement.remove();
    console.log(silinecekTrElement,silinecekMail);

    /*tumKisilerDizisi.forEach((kisi, index) =>{
        if (kisi.mail === silinecekMail) {
            tumKisilerDizisi.splice(index,1);
        }
    });*/

    const silinmeyecekKisiler = tumKisilerDizisi.filter(function(kisi, index){
        return kisi.mail !== silinecekMail;
    })

    tumKisilerDizisi.length = 0;
    tumKisilerDizisi.push(...silinmeyecekKisiler);

    alanlariTemizle();
    document.querySelector('.kaydetGuncelle').value = 'Kaydet';
}

function kaydet(e){
    e.preventDefault();

    const eklenecekKisi = {
        ad: ad.value,
        soyad: soyad.value,
        mail: mail.value
    }

    const sonuc = verileriKontrolEt(eklenecekKisi);
    if (sonuc.durum) {
        if (secilenSatir) {
            kisiyiGuncelle(eklenecekKisi);
        }else{
            kisiyiEkle(eklenecekKisi);
        }

    }else{
        bilgiOlustur(sonuc.mesaj, sonuc.durum);
    }

}

function kisiyiGuncelle(kisi){
    //kisi = güncellenecek değerler

    for (let i = 0; i < tumKisilerDizisi.length; i++) {
        if (tumKisilerDizisi[i].mail === secilenSatir.cells[2].textContent) {
            tumKisilerDizisi[i] = kisi;
            break;
        }
    }

    secilenSatir.cells[0].textContent = kisi.ad;
    secilenSatir.cells[1].textContent = kisi.soyad;
    secilenSatir.cells[2].textContent = kisi.mail;

    document.querySelector('.kaydetGuncelle').value = 'Kaydet';
    secilenSatir = undefined;

    console.log(tumKisilerDizisi);
}

function kisiyiEkle(eklenecekKisi){

    const olusturulanTrElementi = document.createElement('tr');
    olusturulanTrElementi.innerHTML = `
        <td>${eklenecekKisi.ad}</td>
        <td>${eklenecekKisi.soyad}</td>
        <td>${eklenecekKisi.mail}</td>
        <td>
            <button class="btn btn--edit"><i class="far fa-edit"></i></button>
            <button class="btn btn--delete"><i class="far fa-trash-alt"></i></button>
        </td>`;

        kisiListesi.appendChild(olusturulanTrElementi);

        tumKisilerDizisi.push(eklenecekKisi);

        bilgiOlustur('Kişi Rehbere Kaydedildi.',true);
}

function verileriKontrolEt(kisi){
    //Objelerde in Kullanımı
    for(const deger in kisi){
        if (kisi[deger]) {
            console.log(kisi[deger]);
        }else{
            const sonuc = {
                durum: false,
                mesaj: 'Boş Alan Bırakmayınız.'
            }
            return sonuc;
        }
    }
    alanlariTemizle();
    const sonuc = {
        durum: true,
        mesaj: 'Kaydedildi'
    }
    return sonuc;
}

function bilgiOlustur(mesaj, durum){
    const olusturulanBilgi = document.createElement('div');
    olusturulanBilgi.textContent = mesaj;
    olusturulanBilgi.className = 'bilgi';
    
    // if (durum) {
    //     olusturulanBilgi.classList.add('bilgi--success');
    // } else {
    //     olusturulanBilgi.classList.add('bilgi--error');
    // }

    olusturulanBilgi.classList.add(durum ? 'bilgi--success' : 'bilgi--error');
    document.querySelector('.container').insertBefore(olusturulanBilgi, form);

    setTimeout(function(){
        const silinecekDiv = document.querySelector('.bilgi');
        if (silinecekDiv) {
            silinecekDiv.remove();
        }
    } , 2000);

}

function alanlariTemizle(){
    ad.value = '';
    soyad.value = '';
    mail.value = '';
}


