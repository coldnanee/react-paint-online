import type { FC } from "react";

import { HomePage } from "./pages/home";

type TRoutesItem = {
	Page: FC;
	path: string;
};

const privateRoutesArr: TRoutesItem[] = [
	{
		Page: HomePage,
		path: "/"
	}
];
const publicRoutesArr: TRoutesItem[] = [];

const isAuth = localStorage.getItem("access-jwt");

export const routesArr = isAuth ? privateRoutesArr : publicRoutesArr;
