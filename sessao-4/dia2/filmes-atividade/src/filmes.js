const fs = require('fs').promises;
const path = require('path');


const allMovies = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './movies.json'));
    const response = JSON.parse(data);
    // console.log(response);
    return response;
  } catch(e) {
    console.error('erro na leitura');
  }
};

// allMovies();

module.exports = { allMovies };