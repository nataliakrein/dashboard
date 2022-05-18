export const useMask = (value) => {
  const docNumberMask = (docType, docNumber) => {
    if (docType === "CPF" || docNumber.length === 14) {
      let newDocNumber = docNumber.replace(/\D/g, "");
      newDocNumber = newDocNumber.replace(/^(\d{3})(\d)/g, "$1.$2");
      newDocNumber = newDocNumber.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
      newDocNumber = newDocNumber.replace(
        /^(\d{3})\.(\d{3})\.(\d{3})(\d)/,
        "$1.$2.$3-$4"
      );
      newDocNumber = newDocNumber.replace(
        /^(\d{3})\.(\d{3})\.(\d{3})\/(\d{2})(\d)/,
        "$1.$2.$3-$4"
      );
      return newDocNumber.substring(0, 14);
    } else if (docType === "CNPJ" || docNumber.length === 18) {
      let newDocNumber = docNumber.replace(/\D/g, "");
      newDocNumber = newDocNumber.replace(/^(\d{2})(\d)/, "$1.$2");
      newDocNumber = newDocNumber.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      newDocNumber = newDocNumber.replace(/\.(\d{3})(\d)/, ".$1/$2");
      newDocNumber = newDocNumber.replace(/(\d{4})(\d)/, "$1-$2");
      return newDocNumber.substring(0, 18);
    } else if (docType === "") {
      const newDocNumber = docNumber.replace(/[^\d]/g, "");
      if (newDocNumber.length === 14) {
        return newDocNumber.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
          "$1.$2.$3/$4-$5"
        );
      } else {
        return newDocNumber.replace(
          /(\d{3})(\d{3})(\d{3})(\d{2})/g,
          "$1.$2.$3-$4"
        );
      }
    }
  };

  const localMask = (city, uf) => {
    return `${city}/${uf}`;
  };

  const zipCodeMask = (value) => {
    let newValue = value.replace(/\D/g, "");
    newValue = newValue.replace(/^(\d{2})(\d)/g, "$1.$2");
    newValue = newValue.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2-$3");
    newValue = newValue.replace(/^(\d{2})\.(\d{3})\/(\d{3})(\d)/, "$1.$2-$3");
    return newValue.substring(0, 10);
  };

  const dateMask = (value) => {
    const date = new Date(value);
    return date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  };

  return {
    dateMask,
    docNumberMask,
    zipCodeMask,
    localMask,
  };
};
