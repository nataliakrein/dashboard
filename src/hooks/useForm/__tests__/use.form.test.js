import "@testing-library/jest-dom/extend-expect";
import { renderHook } from "@testing-library/react-hooks";
import { jest } from "@jest/globals";
import { useForm } from "../index";

describe("useForm test", () => {
  it("should return {}", () => {
    const { result } = renderHook(() =>
      useForm({ callback: jest.fn(), validate: {}, form: jest.fn() })
    );
    expect(result.current.errors).toStrictEqual({});
  });
});
