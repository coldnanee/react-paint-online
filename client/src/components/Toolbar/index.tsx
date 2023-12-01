import cl from "./index.module.scss";

import { ToolbarButton } from "../ToolbarButton";

import BrushImage from "../../assets/brush.svg";
import RectImage from "../../assets/rect.svg";
import FigureImage from "../../assets/figure.svg";
import EraserImage from "../../assets/eraser.svg";
import LineImage from "../../assets/line.svg";
import UndoImage from "../../assets/undo.svg";
import RedoImage from "../../assets/redo.svg";
import SaveImage from "../../assets/save.svg";

import Brush from "../../tools/Brush";

import { useState, type ChangeEvent } from "react";
import toolState from "../../store/tool.state";
import canvasState from "../../store/canvas.state";

export const Toolbar = () => {
	const [toolColor, setToolColor] = useState<string>("");

	return (
		<section className={cl.root}>
			<ul className={cl.root__list}>
				<ToolbarButton
					src={BrushImage}
					alt="brush"
					tool={() => toolState.setTool(new Brush(canvasState.canvas))}
				/>
				<ToolbarButton
					src={RectImage}
					alt="rect"
				/>
				<ToolbarButton
					src={FigureImage}
					alt="figure"
				/>
				<ToolbarButton
					src={EraserImage}
					alt="eraser"
				/>
				<ToolbarButton
					src={LineImage}
					alt="line"
				/>
				<li>
					<input
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setToolColor(e.target.value)
						}
						value={toolColor}
						type="color"
						className={cl.root__list__palette}
					/>
				</li>
			</ul>
			<ul className={cl.root__list}>
				<ToolbarButton
					src={UndoImage}
					alt="undo"
				/>
				<ToolbarButton
					src={RedoImage}
					alt="redo"
				/>
				<ToolbarButton
					src={SaveImage}
					alt="save"
				/>
			</ul>
		</section>
	);
};
