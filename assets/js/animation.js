const spans = Array.from(document.querySelectorAll('.moving-span'));
const speed = 2;
const gap = 54;
let totalWidth = spans.reduce((total, span) => total + span.offsetWidth, 0);
let position = 0;

spans.forEach(span => {
	span.style.transform = `translateX(${position}px)`;
	position += span.offsetWidth + gap;
});

function moveSpans() {
	spans.forEach(span => {
		let newPosition = parseFloat(span.style.transform.slice(11, -3)) - speed;
		if (newPosition + span.offsetWidth < 0) {
			newPosition = totalWidth + gap;
		}
		span.style.transform = `translateX(${newPosition}px)`;
	});
	requestAnimationFrame(moveSpans);
}

moveSpans();
