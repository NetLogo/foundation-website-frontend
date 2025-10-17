const errorString = 'Undetermined';
export const maybe = <T>(x: T | null | undefined | ''): T | string => {
	switch (x) {
		case null:
		case undefined:
		case '':
			return errorString;
		default:
			return x;
	}
};
