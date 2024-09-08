const API_URL = "https://api.tvmaze.com";

export const fetchFromApi = async <T>(endpoint: string): Promise<T> => {
	const response = await fetch(`${API_URL}/${endpoint}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${endpoint}`);
	}
	return response.json();
};
