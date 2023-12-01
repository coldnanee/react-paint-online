import { makeAutoObservable } from "mobx";

class CanvasState {
	public canvas: null | HTMLCanvasElement = null;

	constructor() {
		makeAutoObservable(this);
	}

	public setCanvas(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
	}
}

export default new CanvasState();
