const scriptURL = 'https://script.google.com/macros/s/AKfycbxAGv6AlAAZlF_mMaBntfZP53u2hRn-F_BhHwMhAuvSKhVUpd0VARfFX8a9QlEA7mua/exec'
const form = document.forms['contactform']
const success = document.getElementById('success');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            success.innerHTML = "Form submitted succesfully";
            setTimeout(function () {
                success.innerHTML = "";
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})


// animations in the webapp

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.add('hidden');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});