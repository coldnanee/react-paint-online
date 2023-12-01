export default class Tool {
	public ctx: CanvasRenderingContext2D | null;

	constructor(public canvas: HTMLCanvasElement | null) {
		this.ctx = canvas?.getContext("2d") || null;
		this.destroyEvents();
	}

	public destroyEvents() {
		if (this.canvas) {
			this.canvas.onmouseup = null;
			this.canvas.onmousedown = null;
			this.canvas.onmousemove = null;
		}
	}
}
