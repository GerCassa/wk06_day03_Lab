const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findAllTitles = function () {
  return this.films.map( (film) => {
    return film.title;
  });
};

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.find((film) => {
    return film.title === title;
  });
  return result;
};

// Cinema.prototype.findByGenre = function (genre) {
//   const result = this.films.filter((film) =>{
//     return film.genre === genre;
//   });
//   return result;
// };

Cinema.prototype.filmYear = function (year) {
  return this.films.some((film)=> {
    return film.year === year
  });
};

Cinema.prototype.filmLength = function (length) {
  return this.films.every( (film) => {
    return film.length >= length;
  });
};

Cinema.prototype.totalLength = function () {
  return this.films.reduce( (total, film) => {
    return total += film.length
  }, 0);
};

Cinema.prototype.findByProperty = function (property, searchProperty) {
  return this.films.filter( (film) => {
    return film[property] === searchProperty;
  });
};

Cinema.prototype.findAllowedFilms = function (age) {
  return this.films.filter( (film) => {
    return film.rating <= age;
  });
};


module.exports = Cinema;
