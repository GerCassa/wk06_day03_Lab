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

module.exports = Cinema;
