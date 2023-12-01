import { Route, Routes } from "react-router-dom";
import { routesArr } from "./router.data";

export const Router = () => {
	return (
		<Routes>
			{routesArr.map(({ Page, path }) => (
				<Route
					key={path}
					path={path}
					element={<Page />}
				/>
			))}
		</Routes>
	);
};
