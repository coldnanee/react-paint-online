import cl from "./index.module.scss";

import { Canvas } from "../../../components/Canvas";
import { SettingsBar } from "../../../components/SettingsBar";
import { Toolbar } from "../../../components/Toolbar";

export const HomePage = () => {
	return (
		<div className={cl.root}>
			<Toolbar />
			<SettingsBar />
			<Canvas />
		</div>
	);
};
