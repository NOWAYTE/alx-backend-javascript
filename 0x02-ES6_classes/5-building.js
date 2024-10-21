export default abstract class Building {
	constructor(sqft) {
		if (typeof sqft !== 'number') {
			throw new error();
		}

		this._sqft = sqft;

		get sqft() {
			return this._sqft;
		}

		set sqft(newSqft) {
			this._sqft = newSqft;
		}

		abstract evacuationWarningMessage() {
			throw new Error('Class extending Building must override evacuationWaringMessage');
		}
	}
}

