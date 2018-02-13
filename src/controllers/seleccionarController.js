//var model = require("../controllers/seleccionarController");
module.exports = {
    recibiendo: function(lista) {
        for (var j = 0; j < lista.length; j++) {
            console.log(j+' '+lista[j]);
         }
    },
    QuitarDiminutivo: function(lista) {//trasformamos cada palabra en diminutivos
      return lista;
    },
    QuitarSignos: function(lista) {//en esta funcion lo que realizamos el quitar los sgnos y los numeros
        return lista;
    },
    verificando: function(palabra) {// en esta funcion lo que realizamos una puntuacion al titulo y le damos un puntuacion y la debolbemos
        var valoracion=0;
        var palabras=palabra.split(" ");//dividmos la frase por palabras
        for(var i=0;i<palabras.length;i++){//recorremos cada palabra
            //console.log(palabras[i]);
            switch(palabras[i]){//selecionamos cada palabra
                case "muertos":
                    valoracion=valoracion-1;
                break;
                case "virus":
                    valoracion=valoracion-1;
                break;
                case "déficit":
                    valoracion=valoracion-1;
                break;
                case "inflación":
                    valoracion=valoracion-1;
                break;
                case "destruir":
                    valoracion=valoracion-1;
                break;
                case "huelgas":
                    valoracion=valoracion-1;
                break;
                case "manifestaciones":
                    valoracion=valoracion-1;
                break;
                case "pobreza":
                    valoracion=valoracion-1;
                break;
                case "terremoto":
                    valoracion=valoracion-2;
                break;
                case "desolación":
                    valoracion=valoracion-1;
                break;
                case "huracán":
                    valoracion=valoracion-2;
                break;
                case "peligro":
                    valoracion=valoracion-1;
                break;
                case "mueren":
                    valoracion=valoracion-1;
                break;
                case "enfrentamiento":
                    valoracion=valoracion-1;
                break;
                case "instabilidad":
                    valoracion=valoracion-1;
                break;
                case "ilegales":
                    valoracion=valoracion-1;
                break;
                case "devaluación":
                    valoracion=valoracion-1;
                break;
                case "perjuicio":
                    valoracion=valoracion-1;
                break;
                //comiensa lo bueno
                case "crea":
                    valoracion=valoracion+1;
                break;
                case "reduce":
                    valoracion=valoracion+1;
                break;
                case "resuelve":
                    valoracion=valoracion+1;
                break;
                case "deflación":
                    valoracion=valoracion+1;
                break;
                break;
                case "dinero":
                    valoracion=valoracion+1;
                break;
                case "capacita":
                    valoracion=valoracion+1;
                break;
                case "comienza":
                    valoracion=valoracion+1;
                break;
                case "remplasara":
                    valoracion=valoracion+1;
                break;
                case "peruana":
                    valoracion=valoracion+1;
                break;
                case "gana":
                    valoracion=valoracion+1;
                break;
                case "bien":
                    valoracion=valoracion+1;
                break;
                case "cura":
                    valoracion=valoracion+1;
                break;
                case "salva":
                    valoracion=valoracion+1;
                break;
                case "vivio":
                    valoracion=valoracion+1;
                break;
                case "bien":
                    valoracion=valoracion+1;
                break;
            }
        }
        //console.log(valoracion);

        return valoracion;
        //console.log(lista+'-> valoracion : '+valoracion);
        //return "0010101010101010101010101010101000010010101010101010101010101010101010101010101010101010101010101010101010000000001011111";
    }
  }
  



console.log("Estoy dentro--------------------- Controller");