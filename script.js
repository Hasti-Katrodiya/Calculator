let inp_String = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            inp_String = eval(inp_String);
            document.querySelector('.input').value = inp_String;
        } else if (e.target.innerHTML === "C") {
            inp_String = "";
            document.querySelector('.input').value = inp_String;
        }
        else if (e.target.innerHTML === "CL") {
            inp_String = inp_String.slice(0, -1);
            document.querySelector('.input').value = inp_String;
        }

        else {
            inp_String = inp_String + e.target.innerHTML;
            document.querySelector('.input').value = inp_String;
        }
    });
});
