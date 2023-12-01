import BrushImage from "../../assets/brush.svg";
import EraserImage from "../../assets/eraser.svg";
import FigureImage from "../../assets/figure.svg";
import LineImage from "../../assets/line.svg";
import RectImage from "../../assets/rect.svg";

import Brush from "../../tools/Brush";

import type { TToolbarItem } from "./types";

import canvasState from "../../store/canvas.state";

export const toolbarBodyButtonsArr: TToolbarItem[] = [
	{
		src: BrushImage,
		alt: "brush",
		tool: new Brush(canvasState.canvas)
	},
	{
		src: RectImage,
		alt: "rect"
	},
	{
		src: FigureImage,
		alt: "figure"
	},
	{
		src: EraserImage,
		alt: "eraser"
	},
	{
		src: LineImage,
		alt: "line"
	}
];
