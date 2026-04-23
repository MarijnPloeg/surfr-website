export interface LeaderboardEntry {
  rank: number;
  name: string;
  country: string;
  countryCode: string;
  value: number;
  unit: string;
  spot: string;
  date: string;
}

export type LeaderboardMetric = "height" | "distance" | "airtime" | "speed";

export const LEADERBOARD_DATA: Record<LeaderboardMetric, LeaderboardEntry[]> = {
  height: [
    { rank: 1, name: "Jamie Overbeek", country: "Netherlands", countryCode: "NL", value: 34.2, unit: "m", spot: "IJmuiden", date: "2026-02-14" },
    { rank: 2, name: "Nick Jacobsen", country: "Denmark", countryCode: "DK", value: 33.8, unit: "m", spot: "Cape Town", date: "2025-12-03" },
    { rank: 3, name: "Giel Vlugt", country: "Netherlands", countryCode: "NL", value: 32.5, unit: "m", spot: "Tarifa", date: "2026-01-20" },
    { rank: 4, name: "Jesse Richman", country: "United States", countryCode: "US", value: 31.9, unit: "m", spot: "Maui", date: "2025-11-15" },
    { rank: 5, name: "Lasse Walker", country: "Norway", countryCode: "NO", value: 31.2, unit: "m", spot: "Hvide Sande", date: "2026-03-01" },
    { rank: 6, name: "Marc Jacobs", country: "Netherlands", countryCode: "NL", value: 30.8, unit: "m", spot: "Brouwersdam", date: "2026-01-11" },
    { rank: 7, name: "Kevin Langeree", country: "Netherlands", countryCode: "NL", value: 30.4, unit: "m", spot: "Cape Town", date: "2025-12-19" },
    { rank: 8, name: "Andries Fourie", country: "South Africa", countryCode: "ZA", value: 29.8, unit: "m", spot: "Langebaan", date: "2026-02-05" },
    { rank: 9, name: "Stig Hoefnagel", country: "Netherlands", countryCode: "NL", value: 29.3, unit: "m", spot: "IJmuiden", date: "2026-03-12" },
    { rank: 10, name: "Lewis Crathern", country: "United Kingdom", countryCode: "GB", value: 28.7, unit: "m", spot: "Tarifa", date: "2025-11-28" },
    { rank: 11, name: "Ruben Lenten", country: "Netherlands", countryCode: "NL", value: 28.1, unit: "m", spot: "Cape Town", date: "2025-12-22" },
    { rank: 12, name: "Tom Hebert", country: "France", countryCode: "FR", value: 27.6, unit: "m", spot: "Leucate", date: "2026-01-05" },
    { rank: 13, name: "Andrea Principi", country: "Italy", countryCode: "IT", value: 27.2, unit: "m", spot: "Tarifa", date: "2026-02-18" },
    { rank: 14, name: "Josh Emanuel", country: "Australia", countryCode: "AU", value: 26.9, unit: "m", spot: "Perth", date: "2026-01-30" },
    { rank: 15, name: "Oswald Smith", country: "South Africa", countryCode: "ZA", value: 26.4, unit: "m", spot: "Cape Town", date: "2025-12-08" },
  ],
  distance: [
    { rank: 1, name: "Nick Jacobsen", country: "Denmark", countryCode: "DK", value: 285, unit: "m", spot: "Cape Town", date: "2025-12-03" },
    { rank: 2, name: "Jamie Overbeek", country: "Netherlands", countryCode: "NL", value: 268, unit: "m", spot: "Tarifa", date: "2026-02-14" },
    { rank: 3, name: "Giel Vlugt", country: "Netherlands", countryCode: "NL", value: 252, unit: "m", spot: "IJmuiden", date: "2026-01-20" },
    { rank: 4, name: "Jesse Richman", country: "United States", countryCode: "US", value: 241, unit: "m", spot: "Maui", date: "2025-11-15" },
    { rank: 5, name: "Lasse Walker", country: "Norway", countryCode: "NO", value: 234, unit: "m", spot: "Hvide Sande", date: "2026-03-01" },
  ],
  airtime: [
    { rank: 1, name: "Jamie Overbeek", country: "Netherlands", countryCode: "NL", value: 12.4, unit: "s", spot: "IJmuiden", date: "2026-02-14" },
    { rank: 2, name: "Giel Vlugt", country: "Netherlands", countryCode: "NL", value: 11.8, unit: "s", spot: "Tarifa", date: "2026-01-20" },
    { rank: 3, name: "Nick Jacobsen", country: "Denmark", countryCode: "DK", value: 11.2, unit: "s", spot: "Cape Town", date: "2025-12-03" },
    { rank: 4, name: "Lasse Walker", country: "Norway", countryCode: "NO", value: 10.9, unit: "s", spot: "Hvide Sande", date: "2026-03-01" },
    { rank: 5, name: "Kevin Langeree", country: "Netherlands", countryCode: "NL", value: 10.5, unit: "s", spot: "Cape Town", date: "2025-12-19" },
  ],
  speed: [
    { rank: 1, name: "Alexandre Caizergues", country: "France", countryCode: "FR", value: 57.9, unit: "kn", spot: "Leucate", date: "2026-01-05" },
    { rank: 2, name: "Sylvain Hoceini", country: "France", countryCode: "FR", value: 54.3, unit: "kn", spot: "Leucate", date: "2026-02-12" },
    { rank: 3, name: "Rob Douglas", country: "United States", countryCode: "US", value: 53.1, unit: "kn", spot: "Fuerteventura", date: "2025-11-20" },
    { rank: 4, name: "Seb Cattelan", country: "France", countryCode: "FR", value: 51.8, unit: "kn", spot: "Tarifa", date: "2026-01-18" },
    { rank: 5, name: "Alex Coutts", country: "United Kingdom", countryCode: "GB", value: 50.2, unit: "kn", spot: "Fuerteventura", date: "2025-12-09" },
  ],
};

export const METRIC_LABELS: Record<LeaderboardMetric, string> = {
  height: "Jump Height",
  distance: "Jump Distance",
  airtime: "Airtime",
  speed: "Top Speed",
};
