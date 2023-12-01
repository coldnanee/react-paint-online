import Tool from "./Tool";

export default class Brush extends Tool {
	private mouseDown: boolean = false;

	constructor(canvas: HTMLCanvasElement | null) {
		super(canvas);
		this.listen();
	}

	public listen() {
		if (this.canvas) {
			this.canvas.onmouseup = this.mouseUpHandler.bind(this);
			this.canvas.onmousedown = this.mouseDownHandler.bind(this);
			this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
		}
	}

	public mouseUpHandler(e: MouseEvent) {
		this.mouseDown = false;
	}

	public mouseDownHandler(e: MouseEvent) {
		this.mouseDown = true;
		if (e.target instanceof HTMLElement) {
			this.ctx?.beginPath();
			this.ctx?.moveTo(
				e.pageX - e.target.offsetLeft,
				e.pageY - e.target.offsetTop
			);
		}
	}

	public mouseMoveHandler(e: MouseEvent) {
		if (this.mouseDown && e.target instanceof HTMLElement) {
			this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
		}
	}

	public draw(x: number, y: number) {
		if (this.ctx) {
			this.ctx.lineTo(x, y);
			this.ctx.stroke();
		}
	}
}
