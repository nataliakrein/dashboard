import { validationRules } from "..";
describe("Tests for validation rules", () => {
  it("Form validation with success", () => {
    const values = {
      docType: "CPF",
      docNumber: "12345678912",
      email: "email@email.com",
      name: "Name Test",
      date: "04/12/2022",
      zipCode: "12345678",
      address: "Address test",
      number: "1",
      region: "Region test",
      uf: "Uf test",
      city: "City test",
    };
    const errors = validationRules(values);
    expect(errors).toStrictEqual({});
  });

  it("Form validation with input required error", () => {
    const values = {
      docType: "",
      docNumber: "",
      email: "",
      name: "",
      date: "",
      zipCode: "",
      address: "",
      number: "",
      region: "",
      uf: "",
      city: "",
    };
    const errors = validationRules(values);
    expect(errors).toStrictEqual({
      address: "O campo não pode ficar vazio",
      city: "O campo não pode ficar vazio",
      date: "O campo não pode ficar vazio",
      docNumber: "O campo não pode ficar vazio",
      docType: "O campo não pode ficar vazio",
      email: "O campo não pode ficar vazio",
      name: "O campo não pode ficar vazio",
      number: "O campo não pode ficar vazio",
      region: "O campo não pode ficar vazio",
      uf: "O campo não pode ficar vazio",
      zipCode: "O campo não pode ficar vazio",
    });
  });

  it("CPF is invalid", () => {
    const values = {
      docType: "CPF",
      docNumber: "123456789121",
    };
    const errors = validationRules(values);
    expect(errors).toStrictEqual({
      docNumber: "Número de documento invalido",
    });
  });

  it("CNPJ is invalid", () => {
    const values = {
      docType: "CNPJ",
      docNumber: "123456789121",
    };
    const errors = validationRules(values);
    expect(errors).toStrictEqual({
      docNumber: "Número de documento invalido",
    });
  });

  it("Document number length is invalid", () => {
    const values = {
      docNumber: "1234567891217483743287",
    };
    const errors = validationRules(values);
    expect(errors).toStrictEqual({
      docNumber: "Número de documento invalido",
    });
  });

  it("E-mail is invalid", () => {
    const values = {
      email: "email",
    };
    const errors = validationRules(values);
    expect(errors).toStrictEqual({
      email: "E-mail invalido",
    });
  });

  it("Name is invalid", () => {
    const values = {
      name: "1",
    };
    const errors = validationRules(values);
    expect(errors).toStrictEqual({
      name: "Nome completo/Razão social invalido",
    });
  });

  it("Date is invalid", () => {
    const values = {
      date: "12/30/2022",
    };
    const errors = validationRules(values);
    expect(errors).toStrictEqual({
      date: "Data invalida",
    });
  });

  it("Zipcode is invalid", () => {
    const values = {
      zipCode: "123456781234",
    };
    const errors = validationRules(values);
    expect(errors).toStrictEqual({
      zipCode: "CEP invalido",
    });
  });
});
