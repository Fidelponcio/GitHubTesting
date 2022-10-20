document.querySelector("button").onclick=function(){
    const tabla= 
    `
    <table class="tablita">
            <tr>
                <td>celda1</td>
                <td>celda2</td>
                <td>celda3</td>
                </tr>
                <tr>
                <td>celda4</td>
                <td>celda5</td>    
                </tr>
        </table>
    `
    document.querySelector("section").innerHTML = tabla;
}