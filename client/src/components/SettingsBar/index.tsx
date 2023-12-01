import cl from "./index.module.scss";

import { useState, type ChangeEvent } from "react";

export const SettingsBar = () => {
	const [lineSize, setLineSize] = useState<string>("1");

	return (
		<section className={cl.root}>
			<p className={cl.root__text}>Толщина линии</p>
			<input
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setLineSize(e.target.value)
				}
				value={lineSize}
				className={cl.root__input}
				type="number"
			/>
		</section>
	);
};
