import { RandomValueGenerator } from './RandomValueGenerator';

export const options = {
	name: ['felipe', 'ketlin', 'jair', 'lulinha', 'ednara'],
	lastName: ['gomes', 'pecharka', 'almeida', 'silva'],
	nascimento: ['1999-11-13', '1994-07-30'],
	married: 'yes',
	hasId: true,
	amount: 2,
};

describe('RandomValueGenerator', () => {
	it('should create an array of objects with the property passed as a parameter', () => {
		const sut = new RandomValueGenerator(options);

		const result = sut.perform();

		expect(result[0]).toHaveProperty('married');
		expect(result[0]).toHaveProperty('nascimento');
		expect(result[0]).toHaveProperty('lastName');
		expect(result[0]).toHaveProperty('name');
	});

	it('should create an array with the length the same of amout', () => {
		const sut = new RandomValueGenerator(options);

		const result = sut.perform();

		expect(result.length).toBe(2);
	});

	it('should insert into objects the property "id" if hasId be true', () => {
		const sut = new RandomValueGenerator(options);

		const result = sut.perform();

		expect(result[0]).toHaveProperty('id');
	});

	it('should not insert into objects the property "id" if hasId be false', () => {
		const newOptions = { ...options, hasId: false };
		const sut = new RandomValueGenerator(newOptions);

		const result = sut.perform();

		expect(result[0]).not.toHaveProperty('id');
	});
});
