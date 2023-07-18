const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const { allMovies } = require('./filmes');
const app = express();

app.use(express.json());

// EXIBINDO OS MOVIES
app.get('/movies', async (req, res) => {
  try {
    const movies = await allMovies();
    res.status(200).json(movies);
    console.log('listando filmes');

  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log('não possui filme');
  }
});

// EXIBINDO MOVIES PELA QUERY
app.get('/movies/search', async (req, res) => {
  try {
    // aqui será passado o valor da sua query, que pode ser q, name, movie, etc...
    const { q } = req.query;
    const movies = await allMovies();

    if(q) {
      const moviesFiltered = movies.filter((json) => json.movie.includes(q));
      console.log('possui q');
      return res.status(200).json(moviesFiltered);
    }

    res.status(200).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log('não possui q');
  }
});

// EXIBINDO FILMES PELO ID
app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
  
    const movies = await allMovies();
    const movieId = movies.find((movie) => movie.id === Number(id));
  
    if(!movieId) return res.status(404).json({ message: 'movie not found'})
    
    res.status(200).json(movieId);
  } catch (error) {
    res.status(500).json('Erro no servidor para achar sua busca')
  }
  
});

// INSERINDO UM MOVIE
app.post('/movies', async (req, res) => {
  try {
    const movies = await allMovies();
    const { movie, price } = req.body;

    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMoviesStringified = [...movies, newMovie];
    await fs.writeFile(path.resolve(__dirname, './movies.json'), JSON.stringify(allMoviesStringified));
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: 'não foi possivel inserir os dados!' });
    
  }
});

// EDITANDO UM MOVIE COM O PUT

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // pegar os valores que serão alterados
    const { movie, price } = req.body;
  
    const movies = await allMovies();
    // procurar pelo elemento que vou alterar
    const movieToUpdate = movies.find((movie) => movie.id === Number(id));

    if (!movieToUpdate) {
      return res.status(404).json({ message: 'Filme não encontrado!' });
    }
  
    // Atualizar as informações do filme passando o novo valor
    movieToUpdate.movie = movie;
    movieToUpdate.price = price;
    
    // escrevendo no json a alteração. Se eu passar so o valor do movieToUpdatepdate ele sobrescreve
    await fs.writeFile(path.resolve(__dirname, './movies.json'), JSON.stringify(movies));
    res.status(200).json(movieToUpdate);
  } catch (error) {
    res.status(500).json('Erro no servidor para achar sua busca')
  }
  
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
  
    const movies = await allMovies();
    // já faço a filtragem sem o elemento.
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));

    // validando aqui para ter certeza que se estiver igual da erro
    if (filteredMovies.length === movies.length) {
      return res.status(404).json({ message: 'Filme não encontrado!' });
    }
  
    // escrevendo no json a alteração. Se eu passar so o valor do movieToUpdatepdate ele sobrescreve
    await fs.writeFile(path.resolve(__dirname, './movies.json'), JSON.stringify(filteredMovies));
    res.status(204).json(filteredMovies);
  } catch (error) {
    res.status(500).json('Erro no servidor para achar sua busca')
  }
  
});

module.exports = app;