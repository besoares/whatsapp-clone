import "../assets/styles/ChatContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrin } from "@fortawesome/free-regular-svg-icons";
import { faMicrophone, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";

export const ChatContent = () => {
	return (
		<div className="ChatContent__Container Grow">
			<div className="ChatContent__BgImage Grow"></div>

			<div className="ChatContent__Container--Inner"></div>
			<ChatFooter />
		</div>
	);
};

export const ChatFooter = () => {
	return (
		<footer>
			<div className="PlSm">
				<button className="ButtonIcon Medium PaSm">
					<FontAwesomeIcon icon={faGrin} />
				</button>
				<button className="ButtonIcon Medium PaSm">
					<FontAwesomeIcon icon={faPaperclip} />
				</button>
			</div>

			<div className="Grow">
				<Input placeholder="Digite uma mensagem" />
			</div>

			<div>
			<button className="ButtonIcon Medium PaSm">
				<FontAwesomeIcon icon={faMicrophone} />
				</button>
			</div>
		</footer>
	);
};
