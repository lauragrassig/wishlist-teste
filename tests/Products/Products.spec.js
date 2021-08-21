const ProductModel = require("../../models/ProductsModel");

describe('Product class tests', () => {
	test("Product cannot be undefined", async () => {
		await ProductModel.getProducts().then((cardsData) => {
			expect(cardsData.length).not.toBeUndefined();
		});
	});

	test("Product has to be greater than or equal 17", async () => {
		await ProductModel.getProducts().then((cardsData) => {
			expect(cardsData.length).toBeGreaterThanOrEqual(17);
		});
	});

	test("Product cannot be null", async () => {
		await ProductModel.getProducts().then((cardsData) => {
			expect(cardsData).not.toBeNull();
		});
	});
});