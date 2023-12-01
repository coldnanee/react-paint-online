import cl from "./index.module.scss";

export const ToolbarButton = ({
	tool,
	...props
}: {
	src: string;
	alt: string;
	tool?: () => void;
}) => {
	return (
		<li className={cl.root}>
			<button
				className={cl.root__body}
				onClick={tool}>
				<img {...props} />
			</button>
		</li>
	);
};
