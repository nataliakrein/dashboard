const axios = require("axios");

export const getCEPRequest = async (cep) => {
  const newCep = cep.replace(/\.|\-/g, "");
  return axios.get("https://viacep.com.br/ws/" + newCep + "/json/");
};
