export function isMobileRatio() {
	const ratio = document.body.clientHeight / document.body.clientWidth;
	console.log(document.body.clientWidth, ratio);
	if (ratio > 20/4) {
		return true;
	}
	if (document.body.clientWidth < 700) {
		return true;
	}
	return false;
}