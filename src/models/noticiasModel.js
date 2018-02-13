//nfomacion por deonde sacaremos la noticias
//http://www.bbc.com/mundo/search/?q=venesuela
//https://es.stackoverflow.com/questions/70874/nodejs-consumir-funciones-que-tiene-de-parametros-res-req-desde-otro-archivo
const request = require("tinyreq");
const cheerio= require("cheerio");
var controller = require("../controllers/seleccionarController");

//-----------------------------------------------------
//-----------------------DEFINIMOS LAS VARIABLES--------------------------------
const url_bbc='http://www.bbc.com/mundo/search/?q=';//definimos el link de donde scaremos las noticias
const lista_bbc=[];//la lista donde estaran las noticias
const paises=['Argentina','Bolivia','Brasil','Chile','Colombia'
,'Costa Rica','Cuba','Ecuador','El Salvador','Guayana+Francesa','Granada','Guatemala','Guayana','Haití','Honduras'
,'Jamaica','México','Nicaragua','Paraguay','Panamá','Perú','Puerto+Rico'
,'Surinam','Uruguay','Venezuela' ];//todos los paises que estaran scrapeando

var bien,mal,Cantidad_noticias,pais_nombre=-1;
//----------------------------------------------------------------
//------------------LA FUNCION QUE SCRAPEARA CON CADA PAIS------------------------
for(var k=0;k<paises.length;k++){//este for es para corerer en cada pais
  var url_pais=url_bbc+paises[k];//sumamoa sle link+ el nombre del pais
  console.log(url_pais);
  request(url_pais, function (err, body) {
    var $ = cheerio.load(body);
      $('.hard-news-unit__headline-link').each(function(i,elem){
        lista_bbc[i]=$(this).text();//esta sacado
        lista_bbc.join(',');
      });
      console.log(lista_bbc);
      bien=0;
      mal=0;
      Cantidad_noticias=0
      pais_nombre=pais_nombre+1
      for (var j = 0; j < lista_bbc.length; j++) {//realizamos la vista de cada titulo de noticias
        titulo=controller.QuitarDiminutivo(lista_bbc[j]);
        titulo=controller.QuitarSignos(titulo);
        verificacion=controller.verificando(titulo);
        if(verificacion<0){mal=mal+1;}
        else{bien =bien+1;}
        Cantidad_noticias=Cantidad_noticias+1;
     }
      console.log('pais :'+paises[pais_nombre]);
      console.log("noticias : "+Cantidad_noticias);
      console.log('positivas : '+bien);
      console.log('negativo : '+mal);
      console.log("-------------------------------------------------");
  });
}

//http://www.elmundo.es/internacional.html?intcmp=MENUHOM24801&s_kw=internacional
//una observacion es que las noticias al pareser son aleatorias y como que 
//va deacuerdo con el titulo del pais es algo malo para esto

//dato interesate ver como funciona cheerio
  