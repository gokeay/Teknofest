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
            gonderButton.classList.remove("pink-button");
            gonderButton.classList.add("green-button");
        }
    });

    
});
