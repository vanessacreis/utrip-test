import { Link } from "react-router-dom";
import s from "./style.module.scss";
import { FaPlayCircle } from "react-icons/fa";

interface SerieCardProps {
	id: number;
	name: string;
	image: string | undefined;
}

export const SerieCard = ({ id, name, image }: SerieCardProps) => {
	return (
		<Link to={`/series/${id}`} className={s.card}>
			<img src={image} alt={name} className={s.cardImage} />
			<div className={s.cardOverlay}>
				<button type="button" className={s.play}>
					<FaPlayCircle />
				</button>
				<h3>{name}</h3>
			</div>
		</Link>
	);
};
