import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const url = "http://localhost:5146/weatherForecast";
  const response = await fetch(url);
  const forecastData: ForecastModel[] = await response.json();

  return {
    forecastData,
  };
};

interface ForecastModel {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}
