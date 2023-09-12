// HTML içindeki input alanına bir id ekleyin (örneğin, id="saatInput")
// Bu id ile input alanını JavaScript'ten seçeceğiz.

document.addEventListener('DOMContentLoaded', function() {
    const saatInput = document.getElementById('saatInput');

    saatInput.addEventListener('input', function() {
        const saatDeğer = this.value;
        if (saatDeğer.length === 2) {
            this.value += '.';
        }
    });
});

// function submitCrisis() {
//     var crisisInfo = document.getElementById('crisis-info').value;
//     var infoContainer = document.querySelector('.kriz-info');

//     if (crisisInfo.trim() !== '') {
//         infoContainer.innerHTML = '<p>' + crisisInfo + '</p>';
//     }
// }

