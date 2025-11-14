const errorString = 'Undetermined';
export const maybe = (x) => {
	switch (x) {
		case null:
		case undefined:
		case '':
			return errorString;
		default:
			return x;
	}
};

export const text = async (url) => fetch(url).then((res) => res.text());

export const getIPFromCloudFlare = async () => {
	const data = await text('https://www.cloudflare.com/cdn-cgi/trace');
	let ipRegex = /ip=.+/;
	let ip = data.match(ipRegex)[0].split('=')[1];
	return ip;
};

export const getIPFromAmazon = async () => {
	const data = await text('https://checkip.amazonaws.com/');
	return data;
};

export const getIPFromIPify = async () => {
	const data = await text('https://api.ipify.org/');
	return data;
};

export const getIPAddress = async () => {
	for (const func of [getIPFromAmazon, getIPFromIPify, getIPFromCloudFlare]) {
		try {
			const response = await func();
			if (response) {
				return response.trim();
			}
		} catch (error) {
			return errorString;
		}
	}
};
