import { RandomObjectGenerator } from './src/RandomObjectGenerator';

export type Options = {
	hasId?: boolean;
	amount: number;
};

export function randomObjectGenerator<Values>(objValues: Values & Options) {
	const randomObjectGenerator = new RandomObjectGenerator<Values>(objValues);
	return randomObjectGenerator.perform();
}
