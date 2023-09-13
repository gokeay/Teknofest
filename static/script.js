document.addEventListener("DOMContentLoaded", function() {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");
    const gonderButton = document.getElementById("gonderButton");

    form1.addEventListener("change", function() {
        if (document.querySelector("select[name='yerBilgisi']").value) {
            form2.style.display = "block";
            // form1.style.display = "none";
        }
    });

    form2.addEventListener("change", function() {
        if (document.querySelector("select[name='durumBilgisi']").value) {
            form3.style.display = "block";
            // form2.style.display = "none";
        }
    });

    
    form2.addEventListener("change", function() {
        if (document.querySelector("select[name='durumBilgisi']").value == 'damacanaBilgisi') {
            damacanaRow.style.display = 'flex';
            damacanaAdet.style.display = 'block';
        }
    });

    form3.addEventListener("change", function() {
        const fileInput = document.querySelector("input[type='file']");
        if (fileInput && fileInput.files.length > 0) {
            form4.style.display = "block";
            // form3.style.display = "none";
        }
    });

    form4.addEventListener("change", function() {
        const numberInput = document.querySelector("input[type='number']");
        if (numberInput && numberInput.value !== "") {
            gonderButton.disabled = false;
            gonderButton.classList.remove("green-button");
            gonderButton.classList.add("pink-button");
        }
    });

    document.getElementById('gonderButton').addEventListener('click', function() {
        document.getElementById('successAlert').style.display = 'block';
        // buraya verı akısıyle ılgılı kodlar yazılcaka
    });

    document.getElementById('krizButton').addEventListener('click', function() {
        document.getElementById('krizButton1').style.display = 'block';
        document.getElementById('krizButton2').style.display = 'block';
        document.getElementById('krizButton3').style.display = 'block';
        // buraya verı akısıyle ılgılı kodlar yazılcaka
    });

    document.getElementById('krizButton').addEventListener('click', function() {
        document.querySelectorAll('.btn-group .btn').forEach(function(button) {
            button.classList.remove('d-none');
        });
    });


    document.querySelectorAll('.btn-group .btn').forEach(function(button) {
        button.addEventListener('click', function() {
            // Görünmez içeriği göster
            document.getElementById('hiddenContent').classList.remove('d-none');
        });
    });
    
    // kriz bilgisini alır ve kriz içerigini yeniden görünmez yapar
    document.getElementById('sendButton').addEventListener('click', function() {
        // Burada yazılan mesajı alabilirsiniz
        var message = document.getElementById('textBox').value;
        console.log('Gönderilen Mesaj:', message);
        // İleti gönderildikten sonra gizleme veya başka bir işlem yapma burada gerçekleştirilebilir
        document.getElementById('hiddenContent').classList.add('d-none');
        document.querySelectorAll('.btn-group .btn').forEach(function(button) {
            button.classList.add('d-none'); });

    });

    document.getElementById('damacanaAdetInput').addEventListener('input', function() {
        var adet = document.getElementById('damacanaAdetInput').value;
        if (adet > 0) {
            form3.style.display = "block";
        }
    });
    
    
});
