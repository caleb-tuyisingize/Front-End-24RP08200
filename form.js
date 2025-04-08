document.getElementById("myForm").addEventListener("submit", function(event) {
    let inputs = document.querySelectorAll("#myForm input[type='text']");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            alert("Uzuza neza we sha.");
            inputs[i].focus();
            event.preventDefault(); // prevent form submission
            return;
        }
    }
});