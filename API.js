document.querySelector("#DDD").addEventListener("change", buscaDDD);
function buscaDDD(evento) {
	fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
	.then(resposta => resposta.json())
	.then(dados => {
		const listaCidades = dados.cities;
		const lista = document.querySelector(`#Lista`);
		lista.innerText = "";
		listaCidades.forEach(cidade => {
			linha = document.createElement('li')
			linha.textContent = cidade;
			lista.appendChild(linha);
		});
	});
}
