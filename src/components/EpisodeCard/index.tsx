import type { Episode } from "../../types";
import { removeHTMLTags } from "../../utils/removeHTMLTags";
import s from "./style.module.scss";
import { GoVideo } from "react-icons/go";

export const EpisodeCard = ({ episode }: { episode: Episode }) => {
	return (
		<li key={episode.id} className={s.episodeItem}>
			{episode.image?.medium ? (
				<img
					src={episode.image?.medium || ""}
					alt={episode.name}
					className={s.episodeImage}
				/>
			) : (
				<div>
					<GoVideo className={s.fallback} />
				</div>
			)}
			<div className={s.episodeInfo}>
				<div className={s.nameTime}>
					<h3>{episode.name}</h3>
					<p>({episode.runtime} min)</p>
				</div>

				<p>{removeHTMLTags(episode.summary || "Sem descrição disponível.")}</p>
			</div>
		</li>
	);
};
