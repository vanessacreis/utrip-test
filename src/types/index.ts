export interface Series {
	id: number;
	name: string;
	summary: string;
	premiered: string;
	genres: string[];
	image?: {
		medium: string;
		original: string;
	};
	_embedded?: {
		seasons: Season[];
	};
}

export interface Season {
	id: number;
	number: number;
}

export interface Episode {
	id: number;
	name: string;
	season: number;
	number: number;
	summary: string;
	runtime: number;
	airdate: string;
	image?: {
		medium: string;
		original: string;
	};
}
