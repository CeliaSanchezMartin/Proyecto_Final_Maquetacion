//Me traigo la clase Movie, de js para poder usarla.
class Movie{
    
    //constructor.
    constructor (title, releaseYear,actors, nacionality,director, writer, lenguage, plataform, isMCU, mainCharacterName, producer, distributor, genre, foto)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nacionality = nacionality;
        this.director = director;
        this.writer = writer;
        this.lenguage = lenguage;
        this.plataform = plataform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genre = genre;
        this.foto = foto; //Añadimos la foto

    }

    //Método publico que muestre todos los datos de las peliculas.
    printAll()
    {
        console.log("Title: "+ this.title +
                    "\n Release Year: " + this.releaseYear +
                    "\n Actors: " + this.actors +   
                    "\n Nacionality: " + this.nacionality +
                    "\n Director: " + this.director +
                    "\n Writer: " + this.writer +
                    "\n Language: " + this.language +
                    "\n Plataform: " + this.plataforma +
                    "\n MCU: " + this.isMCU +
                    "\n Main Character: " + this.mainCharacterName + 
                    "\n Producer: " + this.producer +
                    "\n Distributor: " + this.distributor +
                    "\n Genre: " + this.genre);
    }
}

let memory = [];

function addFilm(){
    memory = [];
    let myObject = new Movie(
        document.getElementById("title").value,
        document.getElementById("year").value,
        /*document.getElementById("actors").value,*/
        document.getElementById("nacionality").value,
        document.getElementById("director").value,
        document.getElementById("writer").value,
        /*document.getElementById("languaje").value,*/
        document.getElementById("platform").value,
        document.getElementById("isMCU").value,
        document.getElementById("mainCharacterName").value,
        document.getElementById("producer").value,
        document.getElementById("distributor").value,
        document.getElementById("genre").value,
    );

    memory.push(myObject);
    showFilms();
    console.log(memory);
}

function showFilms(){
    for(let i = 0; i < memory.length; i++){
    document.getElementById("contenedorMovies").innerHTML += 
    `<div class="col-2 border border-5  w-25 ms-5 me-5 mb-5 "> 
    <img src="`+ memory[i].foto + `class="w-100" />
    <div class="pt-3 ps-3 pe-3" style="font-size: 120%;">
    <p><span class="fw-bold">Title: </span> ` + memory[i].title +`</p> 
    <p> <span class="fw-bold"> Year: </span> ` + memory[i].releaseYear + `</p>
    <p > <span class="fw-bold">Nacionality: </span> ` + memory[i].nacionality + `</p>  
    <p> <span class="fw-bold"> Director: </span> ` + memory[i].director + `</p> 
    <p> <span class="fw-bold"> Writer: </span> ` + memory[i].writer+ `</p> 
    <p> <span class="fw-bold">Languaje: </span>`+ memory[i].language + `</p> 
    <p> <span class="fw-bold">Platform: </span> ` + memory[i].plataform + `</p> 
    <p> <span class="fw-bold">Is MCU: </span> ` + memory[i].isMCU + `</p> 
    <p> <span class="fw-bold"> Main Character: </span> ` + memory[i].mainCharacterName + `</p> 
    <p> <span class="fw-bold">Producer: </span>` + memory[i].producer + `</p> 
    <p> <span class="fw-bold">Distibutor: </span>` + memory[i].distributor + `</p> 
    <p> <span class="fw-bold">Genre: </span>` + memory[i].genre + `</p> 
    </div> 
    </div > `
    }

}
