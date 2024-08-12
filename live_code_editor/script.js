
function run() {
    let html_code = document.querySelector('.html_code textarea').value;
    let css_code =  "<style>" +  document.querySelector('.css_code textarea').value + "</style>" ;
    let js_code = document.querySelector('.js_code textarea').value;
    let output = document.querySelector('.code_editor #result');

    // Storing data in Local Storage
    localStorage.setItem("html_code",html_code);
    localStorage.setItem("css_code",css_code);
    localStorage.setItem("js_code",js_code);
    
    // Executing HTML, CSS & JS code
    output.contentDocument.body.innerHTML = html_code + css_code;
    output.contentWindow.eval(js_code);
}

// Checking if user is typing anything in input field
let html_code = document.querySelector('.html_code textarea').addEventListener('keyup',run);
let css_code = document.querySelector('.css_code textarea').addEventListener('keyup',run);
let js_code = document.querySelector('js_code textarea').addEventListener('keyup',run);

html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
js_code.value = localStorage.js_code;

