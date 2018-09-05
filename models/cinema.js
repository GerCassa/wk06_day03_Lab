const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.findTitle = function () {
  return this.films.map( (film) => {
    return film.title;
  });
};

module.exports = Cinema;
