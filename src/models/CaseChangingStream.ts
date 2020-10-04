import { Interval } from "antlr4ts/misc/Interval";

export class CaseChangingStream {

	_stream;
	_upper;

	get index() {
		return this._stream.index;
	}

	get size() {
		return this._stream.size;
	}

	get sourceName() {
		return null;
	}

	constructor(stream: any, upper: any) {
		this._stream = stream;
		this._upper = upper;
	}
	
	LA(offset) {
		var c = this._stream.LA(offset);
		if (c <= 0) {
			return c;
		}
		return String.fromCodePoint(c)[this._upper ? "toUpperCase" : "toLowerCase"]().codePointAt(0);
	}

	reset() {
		return this._stream.reset();
	}

	consume() {
		return this._stream.consume();
	}

	LT(offset) {
		return this._stream.LT(offset);
	}

	mark() {
		return this._stream.mark();
	}

	release(marker) {
		return this._stream.release(marker);
	}

	seek(_index) {
		return this._stream.seek(_index);
	};

	getText(interval: Interval): string {
		return this._stream.getText(interval.a, interval.b);
	}

	toString() {
		return this._stream.toString();
	}

}