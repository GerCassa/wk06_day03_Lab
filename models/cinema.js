const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findAllTitles = function () {
  return this.films.map( (film) => {
    return film.title;
  });
};

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title;
  });
  return result[0];
};

Cinema.prototype.findByGenre = function (genre) {
  const result = this.films.filter((film) =>{
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.filmYear = function (year) {
  return this.films.some((film)=> {
    return film.year === year
  });
};


module.exports = Cinema;
