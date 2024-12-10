let dados = [
  {
    titulo: "Maca Marks",
    descricao: "skatista local do parigot skaters,old school, raiz e adorador de memes do MC Gorilla",
    instagram: "https://instagram.com/conde_maca",
    tags: "parigo sk8 conde maca lucas todos oz wizard",
    youtube: "https://www.youtube.com/watch?v=rEzyVNQk6oc"
  },
  {
    titulo: "Rogerio - Popoto",
    descricao: "sempre pronto para filmar as trick com seus equipamentos e peripécias, o primeiro a chamar para ir comer um lanche e tomar refri",
    instagram: "https://www.instagram.com/rogeriodedeandrade",
    tags: "rogerio popoto andrade refri tods",
    youtube: "https://www.youtube.com/watch?v=3Iiu4BfHioE"
  },
  {
    titulo: "Rodrigo Oliveira",
    descricao: "Flip de back descendo o caixote foi o maior feito, pouco skate muita conversa, berinha gelada na pista",
    instagram: "https://instagram.com/digocwb",
    tags: "Rodrigo digo oliveira bs flip bera todos",
    youtube: "https://www.youtube.com/watch?v=edRcPMoaji4"
  }
];

function criarListaSkatistas() {
  const lista = document.getElementById('dados');

  dados.forEach(skatista => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = skatista.youtube;
    link.target = "_blank"; // Abre em uma nova aba
    link.textContent = skatista.titulo;
    li.appendChild(link);
    lista.appendChild(li);
  });
}

criarListaSkatistas();