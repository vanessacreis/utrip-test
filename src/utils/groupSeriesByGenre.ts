import type { Series } from "../types";

export const groupSeriesByGenre = (
	seriesList: Series[],
): Record<string, Series[]> => {
	return seriesList.reduce(
		(acc, serie) => {
			serie.genres.forEach((genre) => {
				acc[genre] = acc[genre] || [];
				acc[genre].push(serie);
			});
			return acc;
		},
		{} as Record<string, Series[]>,
	);
};
