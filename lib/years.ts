export interface RemainingTime {
	wholeYears: number;
	remainingSeconds: number;
	yearsNoun: string;
	secondsNoun: string;
}

export function calculateRemainingTime(): RemainingTime {
	const now = new Date();
	const target = new Date("2071-07-29");
	const msPerYear = 1000 * 60 * 60 * 24 * 365.2425;
	const diff = target.getTime() - now.getTime();
	const totalYears = diff / msPerYear;
	const wholeYears = Math.floor(totalYears);
	const remainingMs = diff - (wholeYears * msPerYear);
	// Добавляю одну секунду, чтобы результат коррелировал с часами выше
	const remainingSeconds = Math.floor(remainingMs / 1000) + 1;
	
	let yearsNoun;
	const mod100 = wholeYears % 100;
	if (mod100 >= 11 && mod100 <= 14) {
		yearsNoun = "лет";
	} else {
		const mod10 = wholeYears % 10;
		if (mod10 === 1) yearsNoun = "год";
		else if (mod10 >= 2 && mod10 <= 4) yearsNoun = "года";
		else yearsNoun = "лет";
	}
	
	let secondsNoun;
	const secMod100 = remainingSeconds % 100;
	if (secMod100 >= 11 && secMod100 <= 14) {
		secondsNoun = "секунд";
	} else {
		const secMod10 = remainingSeconds % 10;
		if (secMod10 === 1) secondsNoun = "секунда";
		else if (secMod10 >= 2 && secMod10 <= 4) secondsNoun = "секунды";
		else secondsNoun = "секунд";
	}
	
	return { wholeYears, remainingSeconds, yearsNoun, secondsNoun };
}
