/* 
.- First
? Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en
IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - [x] Todos los datos del objeto son obligatorios.
  - [x] Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - [x] Valida que el título no rebase los 100 caracteres.
  - [x] Valida que el director no rebase los 50 caracteres.
  - [x] Valida que el año de estreno sea un número entero de 4 dígitos.
  - [] Valida que el país o paises sea introducidos en forma de arreglo.
  - [] Valida que los géneros sean introducidos en forma de arreglo.
  - [] Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  - [x] Crea un método estático que devuelva los géneros aceptados*.
  - [] Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  - [] Crea un método que devuelva toda la ficha técnica de la película.
  - [] Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada
  - e imprime la ficha técnica de cada película.

- Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family,
- Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula{
    constructor({movieID,title,director,year,country,genres,IMDBRate}){
        this.movieID = movieID;
        this.title = title;
        this.director = director;
        this.year = year;
        this.country = country;
        this.genres = genres;
        this.IMDBRate = IMDBRate;

        this.validateID(movieID);
        this.validateTitle(title);
        this.validateDirector(director);
        this.validateYear(year);
        this.validateCountry(country);
        this.validateGenreOnList(genres);
        this.validateIMDBRate(IMDBRate);
    }

    validateString(prop,value){
        if(!value) return console.warn(`${prop} "${value}" is empty`);
        if(typeof value !== "string") return console.warn(`${prop} "${value}" is not a string!`);
        return true;
    }


    validateID(movieID){
        if(this.validateString("IMDB",movieID)){
            if(!/^([a-z]){2}([0-9]{7})$/.test(movieID)){
                console.error(`The IMDB ID must have the two first chars as number and the other ones as strings`);
            }
        }   
    }

    validateLengthString(prop,value,length){
        if(value.length > length) return console.error(`${prop} ${value} is longer than acepted`);
        return true
    }

    validateTitle(title){
        if(this.validateString("Title", title)){
            this.validateLengthString("Title",title,100)
        }
    }

    validateDirector(director){
        if(this.validateString("Director",director)){
            this.validateLengthString("Director",director,50)
        }
    }

    validateNumber(prop,value){
        if(!value) return console.warn(`${prop} ${value} is empty`);
        if(typeof value !== "number") console.warn(`${prop} ${value} is not a number`);
        return true;
    }

    validateYear(year){
        if(this.validateNumber("Year",year)){
            if(!/^([0-9]){4}$/.test(year)){
                console.warn(`year ${year} is not valid`);
            }
        }
    }

/*
.- Instanceof [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/instanceof ]
? Valida si el objeto en su cadena de prototipo contiene la propiedad indicada del constructor
- Si hacemos un instanceof number, validará que el valor que le estemos dando tenga en su cadena de prototipo la propiedad de number
*/
    validateArray(prop,arr){
        if(!arr) return console.warn(`${prop} ${arr} is empty`);
        if(!arr instanceof Array) return console.warn(`${prop} ${arr} is not an array`);
        if(arr.length === 0) return console.warn(`${prop} ${arr} does not contain data`);
        for (const cad of arr) {
            if(typeof cad !== "string") return console.error(`${cad} is not an string`);
        }
        return true;
    }

    validateCountry(country){
        this.validateArray("Country",country)
    }

    validateGenreOnList(genres){
        if(this.validateArray("Gengres",genres)){
            for (const genre of genres) {
                if(!Pelicula.genresList.includes(genre)){
                    console.error(`Genre(s) ${genres.join(", ")} are invalid`);
                    Pelicula.genresList()
                }
            }
        }

    }

    static get genresList(){
        return ["Action","Adult","Adventure","Animation","Biography","Comedy","Crime", "Documentary" ,"Drama", "Family","Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static gengres(){
        return console.info(`The gengres are: ${Pelicula.genresList.join(", ")}`);
    }

    validateIMDBRate(IMDBRate){
        if(this.validateNumber("Rate",IMDBRate)){
            return (IMDBRate < 0 || IMDBRate > 10)?console.error("The rate must be between 0 and 10") : this.IMDBRate = IMDBRate.toFixed(1)
        }
    }

    getMovieInfo(){
        console.log(`ID: ${this.movieID}\n Title: ${this.title} \n Director: ${this.director} \n Year: ${this.year} \n Countries: ${this.country} \n Genre(s): ${this.genres} \n IMDB Rate: ${this.IMDBRate}`);
    }

}   

const pelis =[{
    movieID:"tt9876543",
    title:"Batman",
    director:"Nolan",
    year:2006,
    country:["MX","FR"],
    genres:["Action","Adventure"],
    IMDBRate:9.5
},
{
    movieID:"tt3456789",
    title:"Demon slayer",
    director:"Koyoharu",
    year:2016,
    country:["JP","MX","USA"],
    genres:["Action","Adventure"],
    IMDBRate:8.99
},
{
    movieID:"tt3547987",
    title:"Sherlock Holmes",
    director:"Ritchie",
    year:2009,
    country:["MX","FR"],
    genres:["Action","Adventure"],
    IMDBRate:10
}];

pelis.forEach(el=> new Pelicula(el).getMovieInfo())