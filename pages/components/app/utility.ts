export function isMobileRatio(): boolean {
	let result = false;
	if (typeof window !== "undefined") {
		const ratio = document.body.clientHeight / document.body.clientWidth;
		if (ratio > 20/4) {
			result = true;
		}
		if (document.body.clientWidth < 700) {
			result = true;
		}
	}
	return result;
}