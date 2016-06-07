import lodash, { reduce } from 'lodash';

export function sumArray(array){
	return reduce(array, (sum, value) => sum + value);
}