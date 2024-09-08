import { useState, useEffect } from "react";
import { fetchFromApi } from "../../services/index";
import type { Series } from "../../types";
import s from "./style.module.scss";
import { SerieCard } from "../../components/SerieCard";
import { groupSeriesByGenre } from "../../utils/groupSeriesByGenre";
import { ErrorComponent } from "../../components/Error";

const Home = () => {
	const [series, setSeries] = useState<{ [key: string]: Series[] }>({});
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadSeries = async () => {
			try {
				const data = await fetchFromApi<Series[]>("shows");
				const seriesByGenre = groupSeriesByGenre(data);
				setSeries(seriesByGenre);
			} catch (error) {
				setError((error as Error).message);
			}
		};

		loadSeries();
	}, []);

	if (error) return <ErrorComponent />;

	return (
		<main>
			<div className={s.container}>
				{Object.keys(series).map((genre) => (
					<div key={genre} className={s.genreContainer}>
						<h2>{genre}</h2>
						<div className={s.cardContainer}>
							{series[genre].map((serie) => (
								<SerieCard
									key={serie.id}
									id={serie.id}
									name={serie.name}
									image={serie.image?.medium}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default Home;
