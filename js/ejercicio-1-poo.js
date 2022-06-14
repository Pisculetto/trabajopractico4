let auto = {
    Marca: 'Fiat',
    Modelo: 'Uno',
    Color: 'Negro',
    Estado: false,

    estadoAuto(){

        if(confirm("Desea prender el auto?") == true){ 
    
        auto.Estado = 'Encendido';
        }

        else
        {
            auto.Estado = 'Apagado'
        }
        
    }
}

auto.estadoAuto();

let ejemplo = Object.keys(auto);

for(let i = 0 ; i < ejemplo.length-1; i++){

    document.write(`${ejemplo[i]}: ${auto[ejemplo[i]]}<br>`)

}

