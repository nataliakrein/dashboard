import "@testing-library/jest-dom/extend-expect";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getCEP } from "..";

const mockStore = configureMockStore([thunk]);

describe("Testing Form redux actions", () => {
  it("should dispatch actions of GET_CEP", async () => {
    const store = mockStore();
    await store.dispatch(getCEP(""));
    const actions = store.getActions();
    expect(actions).toEqual([]);
  });
});
