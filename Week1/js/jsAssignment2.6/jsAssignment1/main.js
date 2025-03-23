function trackMovies() {
  let movies = [];
  let numMovies = parseInt(prompt("Enter the number of movies you want to rate:"));

  if (isNaN(numMovies) || numMovies <= 0) {
      alert("Invalid number of movies.");
      return;
  }

  for (let i = 0; i < numMovies; i++) {
      let title = prompt("Enter the movie title:");
      let rating = parseInt(prompt("Enter the rating (1-5):"));

      if (!title || isNaN(rating) || rating < 1 || rating > 5) {
          alert("Invalid input. Please enter a valid title and rating between 1 and 5.");
          i--;
          continue;
      }

      movies.push({ title, rating });
  }

  movies.sort((a, b) => b.rating - a.rating);
  let highestRated = movies[0];

  let output = "<h3>Sorted Movies (Highest to Lowest Rating)</h3><ul>";
  movies.forEach(movie => {
      output += `<li>${movie.title} - Rating: ${movie.rating}</li>`;
  });
  output += "</ul>";
  output += `<h3>Highest Rated Movie: ${highestRated.title} (Rating: ${highestRated.rating})</h3>`;

  document.getElementById("output").innerHTML = output;
}
