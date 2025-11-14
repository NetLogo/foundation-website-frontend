import { maybe, getIPAddress } from './common.js';

const eventName = 'download_latest_banner_click';
const paramGetters = {
	clicks: () => maybe(1),
	value: () => maybe(1),
	netlogo_version: () => {
		return maybe(document.querySelector('meta[name="netlogo:version"]')?.getAttribute('content'));
	},
	timestamp: () => maybe(new Date().toISOString()),
	document_title: () => maybe(document.title),
	document_referrer: () => maybe(document.referrer),
	navigator_user_agent: () => maybe(navigator.userAgent),
	navigator_platform: () => maybe(navigator.platform),
	navigator_language: () => maybe(navigator.language),
	navigator_cookies_enabled: () => maybe(navigator.cookieEnabled ? 'true' : 'false'),
	ip: () => getIPAddress(),
};

window.onDownloadLatestBannerClick = function () {
	const params = {};
	for (const [key, getter] of Object.entries(paramGetters)) {
		params[key] = getter();
	}
	if (typeof gtag === 'function') {
		gtag('event', eventName, params);
	}
};

document.querySelector('#download-latest-banner')?.addEventListener('click', window.onDownloadLatestBannerClick);
