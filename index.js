const express = require('express');
const app = express();

const port = 3000;

app.use(express.json()); // Fala para as reqs do express trabalhar 

const filmes = [
    'Capitão America',
    'Capitã Marvel',
    'O incrivel Hulk',
    'Homem de Ferro',
    'Homem de Ferro 2'
]

// primeira rota
app.get('/', (req, res) => {
    res.send('Hello, Bluemer!')
});
//------------------------------------


// rota dos filmes
app.get('/filmes', (req, res) =>{
    res.send(filmes);
});
//-------------------------------------


// rota do filme individual por id
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = filmes[id];

    if(!filme) {
        res.send('Filme não encontrado');
    }
    res.send(filme);
});
//-------------------------------------


// rota ue cadastra um novo filme.
// LISTA -GET
// CRIAR - POST
// ATUALIZAR - PUT
// DELETAR - DELETE

app.post('/filmes', (req, res) => {
    const filme = req.body.filme;
    const id = filmes.length;

    filmes.push(filme);

    res.send(`Filme adicionado com sucesso: ${filme}. O id do filme é ${id}.`)
});
//--------------------------------------------

    
    // atualizar filme (substituir)
app.put('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = req.body.filme;
    const nomeAnterior = filmes[id];
    filmes[id] = filme;
    res.send(`Filme anterior: ${nomeAnterior}, atualizado para: ${filme}.`);
});
//-------------------------------------------


    // deletar filme
app.delete('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    delete filmes[id];
    res.send('Filme excluido com sucesso');
});
//---------------------------------------------


app.listen(port, function() {
    console.log(`App rodando na porta http://localhost:${port}/`);
});

