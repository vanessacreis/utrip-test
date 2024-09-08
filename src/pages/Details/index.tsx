import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../services/index";
import type { Series, Episode } from "../../types";
import s from "./style.module.scss";
import { removeHTMLTags } from "../../utils/removeHTMLTags";
import { EpisodeCard } from "../../components/EpisodeCard";
import { ErrorComponent } from "../../components/Error";
import Spinner from "../../components/Spinner";

const Details = () => {
	const { id } = useParams<{ id: string }>();
	const [series, setSeries] = useState<Series | null>(null);
	const [episodes, setEpisodes] = useState<Episode[]>([]);
	const [selectedSeason, setSelectedSeason] = useState<number>(1);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadSeries = async () => {
			try {
				const data = await fetchFromApi<Series>(`shows/${id}`);
				setSeries(data);
			} catch (error) {
				setError((error as Error).message);
			}
		};

		const loadEpisodes = async () => {
			try {
				const data = await fetchFromApi<Episode[]>(`shows/${id}/episodes`);
				setEpisodes(data);
			} catch (error) {
				setError((error as Error).message);
			}
		};

		loadSeries();
		loadEpisodes();
	}, [id]);

	const filteredEpisodes = episodes.filter(
		(episode) => episode.season === selectedSeason,
	);

	if (error) return <ErrorComponent />;
	if (!series) return <Spinner />;

	return (
		<main className={s.container}>
			<img
				src={series.image?.original}
				alt={series.name}
				className={s.seriesImage}
			/>
			<div className={s.serie}>
				<div className={s.seriesDetails}>
					<div className={s.seriesInfo}>
						<h1>{series.name}</h1>
						<div className={s.info}>
							<p>{series.premiered?.split("-")[0]}</p>
							<p>{series.genres.join(", ")}</p>
						</div>
						<p>{removeHTMLTags(series.summary)}</p>
					</div>
				</div>

				<div className={s.episodesSection}>
					<div className={s.seasonSelect}>
						<h2>Episodes</h2>

						<select
							id="season"
							onChange={(event) =>
								setSelectedSeason(Number(event.target.value))
							}
							value={selectedSeason}
						>
							{episodes
								.reduce<number[]>((seasons, episode) => {
									if (!seasons.includes(episode.season)) {
										seasons.push(episode.season);
									}
									return seasons;
								}, [])
								.map((season) => (
									<option key={season} value={season}>
										Season {season}
									</option>
								))}
						</select>
					</div>

					<ul className={s.episodeList}>
						{filteredEpisodes.map((episode) => (
							<EpisodeCard key={episode.id} episode={episode} />
						))}
					</ul>
				</div>
			</div>
		</main>
	);
};

export default Details;
