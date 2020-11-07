import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  styles = {
    fontFamily: "",
  };

  renderTags() {
    if (this.state.movies.length) return "There are no movies";

    return;
  }
  deleteMovie(movie) {
    let movieIndex = this.state.movies.indexOf(movie);
    this.state.movies.splice(movieIndex, 1);
    this.setState({ movies: this.state.movies });
  }
  render() {
    return (
      <div className="container">
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.deleteMovie(movie)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
