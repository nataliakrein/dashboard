import { useMask } from "..";

describe("Tests for mask", () => {
  const { docNumberMask, zipCodeMask, dateMask, localMask } = useMask();
  it("Test cpf mask", () => {
    const value = "12345678912";
    const docType = "CPF";
    const mask = docNumberMask(docType, value);
    expect(mask).toStrictEqual("123.456.789-12");
  });
  it("Test cnpj mask", () => {
    const value = "32.627.520/0001-15";
    const docType = "CNPJ";
    const mask = docNumberMask(docType, value);
    expect(mask).toStrictEqual("32.627.520/0001-15");
  });
  it("Test city mask", () => {
    const city = "City";
    const uf = "Uf";
    const mask = localMask(city, uf);
    expect(mask).toStrictEqual(`${city}/${uf}`);
  });
  it("Test zip code mask", () => {
    const value = "12345678";
    const mask = zipCodeMask(value);
    expect(mask).toStrictEqual("12.345-678");
  });
  it("Test date mask", () => {
    const value = "04/13/2022";
    const mask = dateMask(value);
    expect(mask).toStrictEqual("13/04/2022");
  });
});
