import { Link } from "react-router-dom";
import s from "./style.module.scss";

export const ErrorComponent = () => {
	return (
		<div className={s.container}>
			<div className={s.message}>
				<h2>OPS, something went wrong :(</h2>
				<p>
					Sorry, we couldn't find the page you were looking for.
					<br /> Please{" "}
					<Link to="/" className={s.link}>
						return to homepage
					</Link>{" "}
					and try again.
				</p>
			</div>
		</div>
	);
};
