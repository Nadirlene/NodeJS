export const retornaMensagemAPI = (callback) => {
  const endpoint = "http://localhost:8080/";

  fetch(endpoint)
    .then((r) => r.json())
    .then((data) => callback(data.mensagem))
    .catch(() => callback("N�o foi poss�vel acessar a API"));
};
