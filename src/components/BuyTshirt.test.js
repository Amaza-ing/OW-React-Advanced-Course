import { render } from "@testing-library/react";
import BuyTShirt from "./BuyTShirt";

describe("BuyTShirt", () => {
  it("should render 'Compra camisetas'", () => {
    const { getByTestId } = render(<BuyTShirt></BuyTShirt>);

    const msg = getByTestId("tshirt").textContent;
    expect(msg).toEqual("Compra camisetas");
  });
});
