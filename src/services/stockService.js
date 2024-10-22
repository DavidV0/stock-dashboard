import axios from 'axios';

class StockService {
	constructor() {
		this.apiClient = axios.create({
			baseURL: 'https://sheetdb.io/api/v1/8qaot0bu6vekv',
		});
	}

	async fetchData(sheetName, retries = 5, delay = 2000) {
		while (retries > 0) {
			try {
				const response = await this.apiClient.get(`?sheet=${sheetName}`);
				return response.data;
			} catch (error) {
				if (error.response && error.response.status === 429) {
					console.error('Too Many Requests, retrying...');
					await this.sleep(delay);
					retries -= 1;
				} else {
					console.error('Error fetching data:', error);
					return [];
				}
			}
		}
		console.error('Max retries reached');
		return [];
	}

	// Hilfsfunktion, um Verzögerung einzuführen
	sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}

export const stockService = new StockService();
