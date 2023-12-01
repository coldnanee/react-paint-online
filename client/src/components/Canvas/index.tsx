import cl from "./index.module.scss";

import { observer } from "mobx-react-lite";

import { useEffect, useRef } from "react";

import canvasState from "../../store/canvas.state";

export const Canvas = observer(() => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		if (canvasRef.current) {
			canvasState.setCanvas(canvasRef.current);
		}
	}, []);

	return (
		<div className={cl.root}>
			<canvas
				ref={canvasRef}
				className={cl.root__body}
				width={600}
				height={400}
			/>
		</div>
	);
});
