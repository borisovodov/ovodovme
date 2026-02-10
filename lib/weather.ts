import { fetchWeatherApi } from "openmeteo";

export interface Weather {
    temperature: string;
    condition: string;
}

const weatherEmoji: Record<number, string> = {
    0: "☀️",
    1: "🌤️",
    2: "🌥️",
    3: "☁️",
    45: "🌫️",
    48: "🌫️",
    51: "🌧️",
    53: "🌧️",
    55: "🌧️",
    56: "🌨️",
    57: "🌨️",
    61: "🌦️",
    63: "🌧️",
    65: "🌧️",
    66: "🌧️",
    67: "🌧️",
    71: "🌨️",
    73: "🌨️",
    75: "🌨️",
    77: "🌨️",
    80: "🌦️",
    81: "🌧️",
    82: "🌧️",
    85: "🌨️",
    86: "🌨️",
    95: "🌩️",
    96: "⛈️",
    99: "⛈️",
}

export async function fetchWeather(latitude: number, longitude: number, onChange: (weather: Weather | null) => void) {
    const params = {
        latitude: latitude,
        longitude: longitude,
        current: ["weather_code", "temperature_2m"],
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    const current = responses[0].current();
    if (current) {
        const condition = weatherEmoji[current.variables(0)?.value() ?? 0] || "❓";
        const temperature = Math.round(current.variables(1)?.value() ?? 0);
        const tempDisplay = temperature < 0
            ? `−${Math.abs(temperature)}`
            : `${temperature}`;
        onChange({ condition, temperature: tempDisplay });
    }
}
