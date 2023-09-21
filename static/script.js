document.addEventListener("DOMContentLoaded", function() {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");
    // const form5 = document.getElementById("form5");
    // const form6 = document.getElementById("form6");
    const gonderButton = document.getElementById("gonderButton");
    // const krizButton = document.getElementById("krizButton");
    // const krizButton1 = document.getElementById("krizButton1");
    // const krizButton2 = document.getElementById("krizButton2");
    // const krizButton3 = document.getElementById("krizButton3");
    const sendButton = document.getElementById("sendButton");

    const damacanaSelect = document.getElementById("damacanaSelect");
    const damacanaInput = document.getElementById("damacanaInput");
    const successAlert = document.getElementById("successAlert");

    const radio3 = document.getElementById('radio3');
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const secilenDegerIkramlikTeslim = document.getElementById('secilenDegerIkramlikTeslim');
    const secilenDegerIkramlikBitti = document.getElementById('secilenDegerIkramlikBitti');
    const secilenDegerCayBitti = document.getElementById('secilenDegerCayBitti');
    const secilenDegerKahveBitti = document.getElementById('secilenDegerKahveBitti');
    const secilenDegerSogukBitti = document.getElementById('secilenDegerSogukBitti');
    const radioCay1 = document.getElementById('radioCay1');
    const radioCay2 = document.getElementById('radioCay2');
    const radioKahve1 = document.getElementById('radioKahve1');
    const radioKahve2 = document.getElementById('radioKahve2');
    const radioSoguk1 = document.getElementById('radioSoguk1');
    const radioSoguk2 = document.getElementById('radioSoguk2');
    

    radio3.addEventListener('change', function() {
        secilenDegerIkramlikTeslim.style.display = this.checked ? 'block' : 'none';
        secilenDegerIkramlikBitti.style.display = 'none';
    });

    radio1.addEventListener('change', function() {
        if (this.checked) {
        secilenDegerIkramlikTeslim.style.display = 'none';
        secilenDegerIkramlikBitti.style.display = 'none';

        }
    });

    radio2.addEventListener('change', function() {
        if (this.checked) {
        secilenDegerIkramlikTeslim.style.display = 'none';
        secilenDegerIkramlikBitti.style.display = this.checked ? 'block' : 'none';
        }
    });



    radioCay1.addEventListener('change', function() {
        if (this.checked) {
            secilenDegerCayBitti.style.display = 'none';
        }
    });

    radioCay2.addEventListener('change', function() {
        if (this.checked) {
            secilenDegerCayBitti.style.display = this.checked ? 'block' : 'none';
        }
    });



    radioKahve1.addEventListener('change', function() {
        if (this.checked) {
            secilenDegerKahveBitti.style.display = 'none';
        }
    });

    radioKahve2.addEventListener('change', function() {
        if (this.checked) {
            secilenDegerKahveBitti.style.display = this.checked ? 'block' : 'none';
        }
    });


    radioSoguk1.addEventListener('change', function() {
        if (this.checked) {
            secilenDegerSogukBitti.style.display = 'none';
        }
    });

    radioSoguk2.addEventListener('change', function() {
        if (this.checked) {
            secilenDegerSogukBitti.style.display = this.checked ? 'block' : 'none';
        }
    });



    // radio2.addEventListener('change', function() {
    //     secilenDegerDiv.style.display = this.checked ? 'none';
    // });

    
    // // form1 ve form2 deki inputlar degistiginde checkForms calısır ve form3 u aktıf eder
    // form1.addEventListener("input", function() {
    //     checkForms();
    // });

    form2.addEventListener("input", function() {
        checkForms();
    });

    // Form 2'de dosya seçildiğinde
    form3.addEventListener("change", function() {
        if (this.querySelector('input[type="file"]').files.length > 0) {
            form4.style.display = "block";
        }
    });

    form4.addEventListener("change", function() {
        if (this.querySelector('input[type="file"]').files.length > 0) {
            gonderButton.disabled = false;
        }
    });

    gonderButton.addEventListener("click", function() {
        document.getElementById('successAlert').style.display = 'block';
    });

    // gonderButton.addEventListener('click', function() {
    //     const saat = document.querySelector('#form1 input[name="saat"]').value;
    //     const yerBilgisi = document.querySelector('#form2 select[name="yerBilgisi"]').value;
    //     const damacanaBilgisi = document.querySelector('#form3 select[name="damacanaBilgisi"]').value;
    //     const adetGirDamacana = document.querySelector('#form3 input[placeholder="Adet gir"]').value;
    //     const doluDamacana = document.querySelector('#form3 input[placeholder="Dolu damacana sayısı"]').value;
    //     const bosDamacana = document.querySelector('#form3 input[placeholder="Boş damacana sayısı"]').value;
    //     const yemekBilgisi = document.querySelector('#form4 select[name="yemekBilgisi"]').value;
    //     const adetGirYemek = document.querySelector('#form4 input[placeholder="Adet gir"]').value;
    //     const garsonSayisi = document.querySelector('#form5 input[placeholder="Garson sayısı gir"]').value;

    //     console.log("Saat: " + saat);
    //     console.log("Yer Bilgisi: " + yerBilgisi);
    //     console.log("Damacana Bilgisi: " + damacanaBilgisi);
    //     console.log("Adet Gir (Damacana): " + adetGirDamacana);
    //     console.log("Dolu Damacana: " + doluDamacana);
    //     console.log("Boş Damacana: " + bosDamacana);
    //     console.log("Yemek Bilgisi: " + yemekBilgisi);
    //     console.log("Adet Gir (Yemek): " + adetGirYemek);
    //     console.log("Garson Sayısı: " + garsonSayisi);
    //     document.getElementById('successAlert').style.display = 'block';
    //     // buraya verı akısıyle ılgılı kodlar yazılcaka
    // });

    // const fs = require('fs');
    // const dosyaYolu = 'saatBilgisi.txt'; // Oluşturulacak dosyanın yolu

    // fs.writeFile(dosyaYolu, saat, yerBilgisi, damacanaBilgisi, adetGirDamacana, doluDamacana, bosDamacana, yemekBilgisi, adetGirYemek, garsonSayisi,  (hata) => {
    //     if (hata) throw hata;
    //     console.log('Dosya oluşturuldu ve veri kaydedildi!');
    // });


    // sorun var butonuna basıldıgında sorun yazmak ıcın text kutusu acılır
    sendButton.addEventListener('click', function() {
        document.getElementById('hiddenContent').classList.remove('d-none');
    });
    
    // kriz bilgisini alır ve kriz içerigini yeniden görünmez yapar
    sendButton.addEventListener('click', function() {
        // Burada yazılan mesajı alabilirsiniz
        var message = document.getElementById('textBox').value;
        console.log('Gönderilen Mesaj:', message);
        // İleti gönderildikten sonra gizleme veya başka bir işlem yapma burada gerçekleştirilebilir
        document.getElementById('hiddenContent').classList.add('d-none');
        document.querySelectorAll('.btn-group .btn').forEach(function(button) {
            button.classList.add('d-none'); });
        document.getElementById('krizAlert').style.display = 'block';

    });


    // checkbox ta kutu secildiyse bu bilgi ile baska bir sey yapmak icin
    // document.querySelector('input[placeholder="Boş Damacana Adedi"]').addEventListener("input", function() {
    //     const nextElement = this.nextElementSibling;
    //     if (this.value.trim() !== "") {
    //         nextElement.style.display = "block";
    //     } else {
    //         nextElement.style.display = "none";
    //     }
    // });

    
    // form1 ve form2 deki inputlar degistiginde checkForms calısır ve form3 u aktıf eder
    function checkForms() {
        // const validForm1 = checkForm1();
        const validForm2 = checkForm2();

        if (validForm2) {
            form3.style.display = "block";
        } else {
            form3.style.display = "none";
        }
    }

    // function checkForm1() {
    //     // form1'in geçerli olup olmadığını kontrol et
    //     return form1.querySelector('input[name="saat"]').value.trim() !== "";
    // }

    function checkForm2() {
        // form2'nin geçerli olup olmadığını kontrol et
        return form2.querySelector('select[name="yerBilgisi"]').value !== "alanSecimi";
    }
    
});


// form2.addEventListener("change", function() {
//     const selectedOption = this.querySelector('select[name="yerBilgisi"]').value;
//     gonderButton.dataset.selectedOption = selectedOption;
//     gonderButton.disabled = selectedOption === "alanSecimi";
// });

// gonderButton.addEventListener("click", function() {
//     const selectedOption = this.dataset.selectedOption;
//     // Seçilen seçeneği burada kullanabilirsiniz
//     console.log("Seçilen seçenek: " + selectedOption);
// });