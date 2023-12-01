import { makeAutoObservable } from "mobx";

import Tool from "../tools/Tool";

class ToolState {
	public tool: null | Tool = null;

	constructor() {
		makeAutoObservable(this);
	}

	public setTool(tool: Tool) {
		this.tool = tool;
	}
}

export default new ToolState();
