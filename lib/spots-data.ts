export interface Spot {
  name: string;
  slug: string;
  country: string;
  countryCode: string;
  continent: string;
  avgWind: number;
  sessionCount: number;
  rating: number;
  disciplines: string[];
}

export const SPOTS: Spot[] = [
  { name: "Tarifa", slug: "tarifa", country: "Spain", countryCode: "ES", continent: "Europe", avgWind: 22, sessionCount: 15420, rating: 4.7, disciplines: ["Freeride", "Big Air", "Wave"] },
  { name: "Dakhla", slug: "dakhla", country: "Morocco", countryCode: "MA", continent: "Africa", avgWind: 20, sessionCount: 12800, rating: 4.8, disciplines: ["Freeride", "Freestyle"] },
  { name: "Cape Town", slug: "cape-town", country: "South Africa", countryCode: "ZA", continent: "Africa", avgWind: 25, sessionCount: 9800, rating: 4.6, disciplines: ["Big Air", "Wave"] },
  { name: "Cabarete", slug: "cabarete", country: "Dominican Republic", countryCode: "DO", continent: "North America", avgWind: 18, sessionCount: 8900, rating: 4.5, disciplines: ["Freeride", "Freestyle", "Wave"] },
  { name: "Leucate", slug: "leucate", country: "France", countryCode: "FR", continent: "Europe", avgWind: 24, sessionCount: 7600, rating: 4.4, disciplines: ["Freeride", "Big Air"] },
  { name: "Cumbuco", slug: "cumbuco", country: "Brazil", countryCode: "BR", continent: "South America", avgWind: 21, sessionCount: 7200, rating: 4.6, disciplines: ["Freeride", "Freestyle"] },
  { name: "Mui Ne", slug: "mui-ne", country: "Vietnam", countryCode: "VN", continent: "Asia", avgWind: 16, sessionCount: 5400, rating: 4.3, disciplines: ["Freeride", "Wave"] },
  { name: "Hood River", slug: "hood-river", country: "United States", countryCode: "US", continent: "North America", avgWind: 19, sessionCount: 5100, rating: 4.5, disciplines: ["Freeride", "Foil"] },
  { name: "Jericoacoara", slug: "jericoacoara", country: "Brazil", countryCode: "BR", continent: "South America", avgWind: 20, sessionCount: 4800, rating: 4.7, disciplines: ["Freeride", "Freestyle"] },
  { name: "Essaouira", slug: "essaouira", country: "Morocco", countryCode: "MA", continent: "Africa", avgWind: 19, sessionCount: 4500, rating: 4.4, disciplines: ["Freeride", "Wave"] },
  { name: "Ijmuiden", slug: "ijmuiden", country: "Netherlands", countryCode: "NL", continent: "Europe", avgWind: 18, sessionCount: 6200, rating: 4.2, disciplines: ["Freeride", "Big Air"] },
  { name: "Maui", slug: "maui", country: "United States", countryCode: "US", continent: "North America", avgWind: 17, sessionCount: 3900, rating: 4.8, disciplines: ["Wave", "Big Air", "Foil"] },
  { name: "Zanzibar", slug: "zanzibar", country: "Tanzania", countryCode: "TZ", continent: "Africa", avgWind: 16, sessionCount: 3200, rating: 4.5, disciplines: ["Freeride", "Freestyle"] },
  { name: "El Gouna", slug: "el-gouna", country: "Egypt", countryCode: "EG", continent: "Africa", avgWind: 18, sessionCount: 4100, rating: 4.3, disciplines: ["Freeride", "Freestyle"] },
  { name: "Langebaan", slug: "langebaan", country: "South Africa", countryCode: "ZA", continent: "Africa", avgWind: 22, sessionCount: 3800, rating: 4.6, disciplines: ["Freeride", "Big Air"] },
  { name: "Brouwersdam", slug: "brouwersdam", country: "Netherlands", countryCode: "NL", continent: "Europe", avgWind: 17, sessionCount: 5800, rating: 4.1, disciplines: ["Freeride", "Freestyle"] },
  { name: "Lo Stagnone", slug: "lo-stagnone", country: "Italy", countryCode: "IT", continent: "Europe", avgWind: 16, sessionCount: 4600, rating: 4.5, disciplines: ["Freeride", "Freestyle", "Foil"] },
  { name: "Drepano", slug: "drepano", country: "Greece", countryCode: "GR", continent: "Europe", avgWind: 17, sessionCount: 3400, rating: 4.4, disciplines: ["Freeride", "Freestyle"] },
  { name: "Prea", slug: "prea", country: "Brazil", countryCode: "BR", continent: "South America", avgWind: 22, sessionCount: 3100, rating: 4.6, disciplines: ["Big Air", "Freeride"] },
  { name: "Fuerteventura", slug: "fuerteventura", country: "Spain", countryCode: "ES", continent: "Europe", avgWind: 21, sessionCount: 5200, rating: 4.5, disciplines: ["Freeride", "Wave", "Foil"] },
  { name: "Perth", slug: "perth", country: "Australia", countryCode: "AU", continent: "Oceania", avgWind: 18, sessionCount: 2800, rating: 4.4, disciplines: ["Freeride", "Wave"] },
  { name: "Kalpitiya", slug: "kalpitiya", country: "Sri Lanka", countryCode: "LK", continent: "Asia", avgWind: 17, sessionCount: 2400, rating: 4.3, disciplines: ["Freeride", "Freestyle"] },
  { name: "Hvide Sande", slug: "hvide-sande", country: "Denmark", countryCode: "DK", continent: "Europe", avgWind: 19, sessionCount: 3600, rating: 4.2, disciplines: ["Freeride", "Big Air", "Wave"] },
  { name: "Boracay", slug: "boracay", country: "Philippines", countryCode: "PH", continent: "Asia", avgWind: 15, sessionCount: 2100, rating: 4.5, disciplines: ["Freeride", "Freestyle"] },
];

export const CONTINENTS = [
  "All",
  "Europe",
  "Africa",
  "North America",
  "South America",
  "Asia",
  "Oceania",
] as const;
