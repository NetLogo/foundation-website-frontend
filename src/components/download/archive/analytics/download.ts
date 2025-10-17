import { maybe } from './common';

declare const gtag: Function | undefined;

const formats = ['exe', 'msi', 'dmg', 'zip', 'tar.gz', 'tgz', 'jar'];
const formatsPattern = new RegExp(`\\.(${formats.join('|')})$`, 'i');

const eventName = 'download_netlogo';
const paramGetters: Record<string, (anchor: HTMLAnchorElement, href: string) => string> = {
	href: (_, href) => href,
	format: (_, href) => {
		const match = href.match(formatsPattern);
		return maybe(match ? match[1].toLowerCase() : null);
	},
	version: () => {
		const segments = window.location.pathname.split('/');
		return maybe(segments.length > 2 ? segments[2] : null);
	},
	download_platform: (anchor) => {
		let platform = anchor.getAttribute('data-platform');
		if (!platform) {
			const row = anchor.closest('tr');
			if (row) {
				const cells = row.querySelectorAll('td');
				for (const cell of cells) {
					if (cell.querySelector('script') && !cell.querySelector('font')) {
						continue;
					} else if (cell.querySelector('font')) {
						platform = maybe(cell.querySelector('font')?.textContent.trim().split('\n')[0]);
						break;
					}
					const text = cell.textContent.trim();
					if (text) {
						platform = text;
						break;
					}
				}
			}
		}
		return maybe(platform);
	},
	timestamp: () => maybe(new Date().toISOString()),
	document_title: () => maybe(document.title),
	document_referrer: () => maybe(document.referrer),
	navigator_user_agent: () => maybe(navigator.userAgent),
	navigator_platform: () => maybe(navigator.platform),
	navigator_language: () => maybe(navigator.language),
	navigator_cookies_enabled: () => maybe(navigator.cookieEnabled ? 'true' : 'false'),
};

function handleDownloadLink(anchor: HTMLAnchorElement, href: string) {
	anchor.addEventListener('click', function () {
		const params: Record<string, string> = {};
		for (const [key, getter] of Object.entries(paramGetters)) {
			params[key] = getter(anchor, href);
		}
		if (typeof gtag === 'function') {
			gtag('event', eventName, params);
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
	const anchors = document.querySelectorAll('a');
	anchors.forEach((anchor) => {
		const href = anchor.getAttribute('href');
		const isDownloadLink = href && formatsPattern.test(href);
		if (isDownloadLink) {
			handleDownloadLink(anchor, href);
		}
	});
});
