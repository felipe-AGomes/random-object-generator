import { randomUUID } from 'crypto';
import { Options } from '..';

export class RandomObjectGenerator<Values> {
	constructor(public objValues: Values & Options) {}

	perform() {
		const values: { [key: string]: any } = Object.entries(this.objValues).reduce(
			(acc, [key, value]) => {
				if (key === 'amount' || key === 'hasId') return acc;
				return { ...acc, [key]: value };
			},
			{},
		);
		const { hasId, amount } = this.objValues;
		const arrayValues: any[] = [];
		for (let i = 0; i < amount; i++) {
			const objectEntries = Object.entries(values);
			const result = objectEntries.reduce((acc, [key, val]) => {
				if (!Array.isArray(val)) {
					return { ...acc, [key]: val };
				}
				let temporary = {
					[key]: val[Math.round(Math.random() * (val.length - 1))],
				};
				if (hasId) {
					temporary = { id: randomUUID(), ...temporary };
				}
				return {
					...acc,
					...temporary,
				};
			}, {});
			arrayValues.push(result);
		}
		return arrayValues as Values[];
	}
}

// usage example

/* const result = RandomObjectGenerator({
	name: ['jon'],
	lastName: ['doe'],
	nascimento: ['1999-11-13', '1994-07-30'],
	hasId: true,
	amount: 23,
}); */
