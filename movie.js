export class Movie{
    
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
        this.plataforma = plataforma;
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