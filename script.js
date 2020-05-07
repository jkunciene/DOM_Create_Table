table = document.querySelector("#container");
button = document.querySelector("#submit");

function on_click(){
    table.innerHTML = "";
    var row_input = parseInt(document.querySelector("#rows").value);
    var collumn_input = parseInt(document.querySelector("#collumns").value);
    var row_counter = 0;
    while (row_input > row_counter){
        var line = document.createElement("tr");
        table.appendChild(line);
        row_counter ++;
    }
    var rows = table.querySelectorAll("tr");
    var collumn_counter = 0;
    while (collumn_input > collumn_counter){
        for (let i = 0; rows.length > i; i++){
            var line = document.createElement("th");
            line.innerText = "bread";
            rows[i].appendChild(line)
        }
        collumn_counter ++;
    }
}

button.addEventListener("click", function(){
    on_click();
})

