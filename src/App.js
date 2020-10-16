import React from 'react';
import logo from './logo.svg';
import './App.css';

function card(p) {
  return <div className="lista-projetos">
    <h3>{p.nome}</h3>
    <p>{p.descricao}</p>
    <p>{p.sinopse}.</p>
  </div>
}

function projetos(cards) {
  return <div className="projetos-lista">
    {cards.map(l => card(l))}
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>

        {projetos([
          {
            nome: 'Counter Strike : GO',
            descricao: ' Jogo Feito Pela Valve.',
            sinopse: 'Um jogo de FPS 5v5 que vai te trazer muita emoção.'
          },

          {
            nome: 'League Of Leagends',
            descricao: ' Jogo Feito Pela Riot.',
            sinopse: ' é um jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra.'
          },
          {
            nome: ' CrossFire',
            descricao: ' Jogo Feito Pela Tencent.',
            sinopse: ' É um jogo de tiro em primeira pessoa online publicado pelo grupo sul-coreano NEOWIZ.'
          },

          {
            nome: 'Word Of Warcraft.',
            descricao: ' Jogo Feito Pela Blizzard.',
            sinopse: 'É um jogo on-line do gênero MMORPG.'
          },

          {
            nome: 'Overwatch',
            descricao: ' Jogo Feito Pela Blizzard.',
            sinopse: ' É um jogo eletrônico multijogador de tiro em primeira pessoa, lançado em 24 de maio de 2016 para Microsoft Windows, PlayStation 4 e Xbox One e em 15 de outubro de 2019 para Nintendo Switch.'
          },
          {
            nome: ' Minecraft',
            descricao: ' Criado pelo desenvolvedor sueco Markus "Notch" Persson e posteriormente desenvolvido e publicado pela Mojang Studios.',
            sinopse: 'Em Minecraft, os jogadores exploram um mundo aberto tridimensional intencionalmente em blocos, pixelizado e gerado proceduralmente, podendo descobrir e extrair matérias-primas, ferramentas artesanais, construir estruturas ou terraplanagens e, dependendo do modo de jogo, podem combater inimigos controlados por computador.'
          },

        ])}

        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gabriel Lindo
        </a>
      </header>
    </div>
  );
}

export default App;
