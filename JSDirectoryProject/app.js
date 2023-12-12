class Kisi{
    constructor(ad, soyad ,mail){
        this.ad = ad;
        this.soyad = soyad;
        this.mail = mail;
    }
}

class Util {
    static bosAlanKontrolEt(...alanlar){
        let sonuc = true;
        alanlar.forEach(alan =>{
            if (alan.length === 0) {
                sonuc = false; 
                return false;
            }
        });
        return sonuc;
    } 

    static emailKontrol(email){

            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
    }
}

class Ekran{
    constructor(){
        this.ad = document.getElementById('ad');
        this.soyad = document.getElementById('soyad');
        this.mail = document.getElementById('mail');
        this.buton = document.querySelector('.kaydetGuncelle');
        this.form = document.getElementById('form-rehber');
        this.form.addEventListener('submit',this.kaydetGuncelle.bind(this));
        this.kisiListesi = document.querySelector('.kisi-listesi');
        this.kisiListesi.addEventListener('click', this.guncelleVeyaSil.bind(this));
        //update delete butonlarını içeren tr elementi
        this.secilenSatir = undefined;
        this.depo = new Depo();
        this.kisileriEkranaYazdir();
    }

    alanlariTemizle(){
        this.ad.value = '';
        this.soyad.value = '';
        this.mail.value = '';
    }

    guncelleVeyaSil(e){
        const tiklanan = e.target;
        if (tiklanan.classList.contains('btn--delete')) {
            this.secilenSatir = tiklanan.parentElement.parentElement;
            this.kisiyiEkrandanSil();

        }else if (tiklanan.classList.contains('btn--edit')) {
            this.secilenSatir = tiklanan.parentElement.parentElement;
            this.buton.value = 'Güncelle';
            this.ad.value = this.secilenSatir.cells[0].textContent;
            this.soyad.value = this.secilenSatir.cells[1].textContent;
            this.mail.value = this.secilenSatir.cells[2].textContent;
        }
    }

    kisiyiEkrandaGuncelle(kisi){
        const sonuc = this.depo.kisiGuncelle(kisi, this.secilenSatir.cells[2].textContent);
        if (sonuc) {
            this.secilenSatir.cells[0].textContent = kisi.ad; 
            this.secilenSatir.cells[1].textContent = kisi.soyad;
            this.secilenSatir.cells[2].textContent = kisi.mail;
    
            this.alanlariTemizle();
            this.secilenSatir = undefined;
            this.buton.value = 'Kaydet';
            this.bilgiOlustur('Kisi başarıyla Güncellendi.', true);
        }else{
            this.bilgiOlustur('Mail Zaten Kullanılıyor.', false);
        }

    }

    kisiyiEkrandanSil(){
        this.secilenSatir.remove();
        const silinecekMail = this.secilenSatir.cells[2].textContent;
        this.depo.kisiSil(silinecekMail);

        this.secilenSatir= undefined;
        this.bilgiOlustur('Kisi başarıyla Silindi.', true);
    }

    kisileriEkranaYazdir(){
        this.depo.tumKisiler.forEach(kisi => {
            this.kisiyiEkranaEkle(kisi);
        });
    }

    kisiyiEkranaEkle(kisi){
        const olusturulanTr = document.createElement('tr');
        olusturulanTr.innerHTML = `
            <td>${kisi.ad}</td>
            <td>${kisi.soyad}</td>
            <td>${kisi.mail}</td>
            <td>
                <button class="btn btn--edit"><i class="far fa-edit"></i></button>
                <button class="btn btn--delete"><i class="far fa-trash-alt"></i></button>
            </td>`;

            this.kisiListesi.appendChild(olusturulanTr);
    }

    bilgiOlustur(mesaj, durum){
        const uyarıDiv = document.querySelector('.bilgi');

        uyarıDiv.innerHTML = mesaj;
    
        uyarıDiv.classList.add(durum ? 'bilgi--success' : 'bilgi--error');
    
        setTimeout(function(){
            uyarıDiv.className = 'bilgi';
        } , 2000);
    
    }

    kaydetGuncelle(e){
        e.preventDefault();
        const kisi = new Kisi(this.ad.value ,this.soyad.value ,this.mail.value);
        const sonuc = Util.bosAlanKontrolEt(kisi.ad , kisi.soyad , kisi.mail);
        const emailKontrol = Util.emailKontrol(this.mail.value);
        console.log(this.mail.value + " için mail kontrol sonuc: "+ emailKontrol);

        if (!emailKontrol) {
            this.bilgiOlustur('Geçersiz e-mail adresi.', false);
            return;
        }

        //alanlar dolu
        if (sonuc) {
            if (this.secilenSatir) {  //secilen satir undefined değilse guncellenecektir.
               this.kisiyiEkrandaGuncelle(kisi);

            } else { //secilen satir undefined ise yeni eklenecektir.
                const sonuc = this.depo.kisiEkle(kisi); //depoya/LS ekleme
                console.log("sonuc: " + sonuc + "kaydet guncell içiburası ");
                if (sonuc) {
                    this.bilgiOlustur('Başarıyla Eklendi.', true);
                    this.kisiyiEkranaEkle(kisi); //ekrana ekleme
                    this.alanlariTemizle();
                }else{
                    this.bilgiOlustur(kisi.mail + ' zaten kullanılıyor.', false);
                }
            }
        }else{ //eksik var
            this.bilgiOlustur('Lütfen Boş Alanları Doldurunuz.', false);
        }
    }
}

class Depo{
    //Uygulama yüklendiğinde tüm veriler getirilir.
    constructor(){
        this.tumKisiler = this.kisileriGetir();
    }
    emailEssizMi(mail){
        const sonuc = this.tumKisiler.find(kisi => {
            return kisi.mail === mail;
        });

        //sonuc=true ise mail kullanımdadır => false döndürülecek.
        if (sonuc) {
            console.log(mail +' zaten kullanılıyor.');
            return false;
        }else{
            console.log(mail +' başarılı');
            return true;
        }
    }
    kisileriGetir (){
        let tumKisilerLocal;
        if (localStorage.getItem('tumKisiler') === null) {
            tumKisilerLocal = [];
        } else {
            tumKisilerLocal = JSON.parse(localStorage.getItem('tumKisiler'));
        }
        return tumKisilerLocal;
    }
    kisiEkle (kisi){
        if (this.emailEssizMi(kisi.mail)) {
            this.tumKisiler.push(kisi);
            localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
            return true;
        }else{
            return false;
        }

    }
    kisiSil (mail){
        this.tumKisiler.forEach((kisi,index) => {
            if (kisi.mail === mail) {
                this.tumKisiler.splice(index, 1);
            }
        });
        
        localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
    }
    kisiGuncelle (guncelKisi, mail){

        if (guncelKisi.mail === mail) {
            this.tumKisiler.forEach((kisi,index) => {
                if (kisi.mail === mail) {
                    this.tumKisiler[index] = guncelKisi;
                    localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
                    return true;
                }
            });
            return true;
        }

        if (this.emailEssizMi(guncelKisi.mail)) {
            console.log(guncelKisi + " için kontrol yapılıyor sonuc: guncelleme yapılabilir.");

            this.tumKisiler.forEach((kisi,index) => {
                if (kisi.mail === mail) {
                    this.tumKisiler[index] = guncelKisi;
                    localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
                    return true;
                }
            });
            return true;
        }else{
            console.log("Bu mail kullanımda. ");
            return false;
        }
    }
}

document.addEventListener('DOMContentLoaded', function (e) {
   const ekran = new Ekran(); 
});