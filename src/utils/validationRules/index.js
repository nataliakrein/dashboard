export const validationRules = (values) => {
  let errors = {};
  if (values.hasOwnProperty("docType")) {
    if (!values.docType) {
      errors.docType = "O campo não pode ficar vazio";
    }
  }

  if (values.hasOwnProperty("docNumber")) {
    const newValue = values.docNumber.replace(/(\.|\/|\-)/g, "");
    if (!values.docNumber) {
      errors.docNumber = "O campo não pode ficar vazio";
    } else if (
      (values.docType === "CPF" && newValue.length !== 11) ||
      (values.docType === "CNPJ" && newValue.length !== 14)
    ) {
      errors.docNumber = "Número de documento invalido";
    } else if (newValue.length !== 14 && newValue.length !== 11) {
      errors.docNumber = "Número de documento invalido";
    }
  }

  if (values.hasOwnProperty("email")) {
    if (!values.email) {
      errors.email = "O campo não pode ficar vazio";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "E-mail invalido";
    }
  }

  if (values.hasOwnProperty("name")) {
    if (!values.name) {
      errors.name = "O campo não pode ficar vazio";
    } else if (
      !/[a-z,A-Z,á,é,í,ó,ú,â,ê,ô,ã,õ,ç,Á,É,Í,Ó,Ú,Â,Ê,Ô,Ã,Õ,Ç,ü,ñ,Ü,Ñ,' ']+/.test(
        values.name
      )
    ) {
      errors.name = "Nome completo/Razão social invalido";
    }
  }

  if (values.hasOwnProperty("date")) {
    const currentDate = new Date();
    const formatDate = new Date(values.date);

    if (!values.date) {
      errors.date = "O campo não pode ficar vazio";
    } else if (formatDate > currentDate) {
      errors.date = "Data invalida";
    }
  }

  if (values.hasOwnProperty("zipCode")) {
    const newZipCode = values.zipCode.replace(/\.|\-/g, "");
    if (!values.zipCode) {
      errors.zipCode = "O campo não pode ficar vazio";
    } else if (newZipCode.length !== 8) {
      errors.zipCode = "CEP invalido";
    }
  }

  if (values.hasOwnProperty("address")) {
    if (!values.address) {
      errors.address = "O campo não pode ficar vazio";
    }
  }

  if (values.hasOwnProperty("number")) {
    if (!values.number) {
      errors.number = "O campo não pode ficar vazio";
    }
  }

  if (values.hasOwnProperty("region")) {
    if (!values.region) {
      errors.region = "O campo não pode ficar vazio";
    }
  }

  if (values.hasOwnProperty("uf")) {
    if (!values.uf) {
      errors.uf = "O campo não pode ficar vazio";
    }
  }

  if (values.hasOwnProperty("city")) {
    if (!values.city) {
      errors.city = "O campo não pode ficar vazio";
    }
  }

  return errors;
};
