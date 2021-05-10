import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonIcon = (icon, onClick) => {
	if ("icon" in icon) {
		icon = icon;
	}

	const executeClick = () => {
		if (typeof onClick === "function") {
			onClick();
		}
	};

	return (
		<button
			className="ButtonIcon"
			onClick={executeClick}
			onMouseDown={(evt) =>
				evt.target.closest("button").classList.add("Pressed")
			}
			onMouseUp={(evt) =>
				evt.target.closest("button").classList.remove("Pressed")
			}
		>
			<FontAwesomeIcon icon={icon.icon} />
		</button>
	);
};
