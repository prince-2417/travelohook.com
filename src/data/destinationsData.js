export const DESTINATIONS_DATA = {
  boston: {
    slug: 'boston',
    name: 'Boston',
    state: 'Massachusetts',
    code: 'BOS',
    airportName: 'Boston Logan International Airport',
    startingPrice: 179,
    originalPrice: 389,
    heroImage: 'https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=1400&q=80',
    description: 'Walk the historic Freedom Trail, explore iconic Harvard Yard, and savor world-famous New England clam chowder with discount flights to Boston.',
    routes: [
      { from: 'New York (JFK)', price: 129, airline: 'Delta Air Lines', duration: '1h 15m' },
      { from: 'Chicago (ORD)', price: 169, airline: 'United Airlines', duration: '2h 20m' },
      { from: 'Miami (MIA)', price: 189, airline: 'American Airlines', duration: '3h 10m' },
      { from: 'Los Angeles (LAX)', price: 239, airline: 'JetBlue Airways', duration: '5h 30m' }
    ],
    attractions: ['The Freedom Trail & Boston Common', 'Faneuil Hall Marketplace', 'Museum of Fine Arts', 'Fenway Park Baseball Stadium'],
    bestTimeToVisit: 'June through October when the autumn foliage shines and weather is mild.'
  },
  chicago: {
    slug: 'chicago',
    name: 'Chicago',
    state: 'Illinois',
    code: 'ORD / MDW',
    airportName: "O'Hare & Midway International Airports",
    startingPrice: 199,
    originalPrice: 429,
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1400&q=80',
    description: 'Experience awe-inspiring architecture along the Chicago River, legendary deep-dish pizza, and vibrant jazz and blues nightlife.',
    routes: [
      { from: 'New York (LGA)', price: 149, airline: 'American Airlines', duration: '2h 35m' },
      { from: 'Atlanta (ATL)', price: 165, airline: 'Delta Air Lines', duration: '2h 05m' },
      { from: 'Dallas (DFW)', price: 175, airline: 'United Airlines', duration: '2h 25m' },
      { from: 'San Francisco (SFO)', price: 219, airline: 'Alaska Airlines', duration: '4h 15m' }
    ],
    attractions: ['Millennium Park & "The Bean"', 'Navy Pier on Lake Michigan', 'Skydeck Chicago (Willis Tower)', 'Art Institute of Chicago'],
    bestTimeToVisit: 'April to October for festival season and patio dining along the river.'
  },
  'las-vegas': {
    slug: 'las-vegas',
    name: 'Las Vegas',
    state: 'Nevada',
    code: 'LAS',
    airportName: 'Harry Reid International Airport',
    startingPrice: 159,
    originalPrice: 399,
    heroImage: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&w=1400&q=80',
    description: 'The Entertainment Capital of the World! World-class resorts, spectacular nightlife, culinary masterminds, and desert day trips to Red Rock and Hoover Dam.',
    routes: [
      { from: 'Los Angeles (LAX)', price: 79, airline: 'Southwest Airlines', duration: '1h 10m' },
      { from: 'San Francisco (SFO)', price: 99, airline: 'Alaska Airlines', duration: '1h 35m' },
      { from: 'Chicago (ORD)', price: 189, airline: 'American Airlines', duration: '3h 50m' },
      { from: 'New York (JFK)', price: 219, airline: 'Delta Air Lines', duration: '5h 45m' }
    ],
    attractions: ['The Las Vegas Strip & Bellagio Fountains', 'The Sphere Experience', 'Fremont Street Experience', 'Red Rock Canyon National Conservation Area'],
    bestTimeToVisit: 'March to May and September to November for comfortable desert weather.'
  },
  miami: {
    slug: 'miami',
    name: 'Miami',
    state: 'Florida',
    code: 'MIA / FLL',
    airportName: 'Miami & Fort Lauderdale International Airports',
    startingPrice: 179,
    originalPrice: 449,
    heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=80',
    description: 'Sun-kissed beaches, pastel Art Deco architecture, energetic nightlife, and rich Latin culinary culture in South Florida.',
    routes: [
      { from: 'New York (JFK)', price: 129, airline: 'Delta & JetBlue', duration: '2h 55m' },
      { from: 'Atlanta (ATL)', price: 139, airline: 'Delta Air Lines', duration: '1h 50m' },
      { from: 'Chicago (ORD)', price: 179, airline: 'American Airlines', duration: '3h 15m' },
      { from: 'Philadelphia (PHL)', price: 145, airline: 'Frontier & Spirit', duration: '2h 45m' }
    ],
    attractions: ['South Beach & Ocean Drive', 'Wynwood Walls Street Art', 'Little Havana (Calle Ocho)', 'Biscayne National Park & Key Biscayne'],
    bestTimeToVisit: 'November to mid-April with sunny warm days and zero humidity.'
  },
  'new-york': {
    slug: 'new-york',
    name: 'New York',
    state: 'New York',
    code: 'JFK / EWR / LGA',
    airportName: 'John F. Kennedy, Newark & LaGuardia Airports',
    startingPrice: 149,
    originalPrice: 389,
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&q=80',
    description: 'The Big Apple! Broadway theaters, Central Park strolls, panoramic Empire State views, world-class museums, and 24/7 global cuisine.',
    routes: [
      { from: 'Miami (MIA)', price: 129, airline: 'American Airlines', duration: '2h 50m' },
      { from: 'Orlando (MCO)', price: 119, airline: 'JetBlue Airways', duration: '2h 35m' },
      { from: 'Los Angeles (LAX)', price: 219, airline: 'United Airlines', duration: '5h 20m' },
      { from: 'Dallas (DFW)', price: 169, airline: 'Delta Air Lines', duration: '3h 30m' }
    ],
    attractions: ['Times Square & Broadway', 'Central Park & Metropolitan Museum of Art', 'Statue of Liberty & Ellis Island', 'Empire State & SUMMIT One Vanderbilt'],
    bestTimeToVisit: 'Autumn (September - November) and Spring (April - June).'
  },
  'san-francisco': {
    slug: 'san-francisco',
    name: 'San Francisco',
    state: 'California',
    code: 'SFO / OAK',
    airportName: 'San Francisco International Airport',
    startingPrice: 199,
    originalPrice: 479,
    heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=80',
    description: 'The iconic Golden Gate Bridge, historic cable cars, colorful Victorian houses at Alamo Square, and Michelin-starred dining in the Bay Area.',
    routes: [
      { from: 'Los Angeles (LAX)', price: 89, airline: 'United & Alaska', duration: '1h 20m' },
      { from: 'Seattle (SEA)', price: 129, airline: 'Delta Air Lines', duration: '2h 10m' },
      { from: 'Denver (DEN)', price: 159, airline: 'Southwest Airlines', duration: '2h 40m' },
      { from: 'New York (JFK)', price: 249, airline: 'JetBlue Airways', duration: '6h 00m' }
    ],
    attractions: ['Golden Gate Bridge & Park', 'Alcatraz Island Tour', "Fisherman's Wharf & Pier 39", 'Lombard Street & Cable Cars'],
    bestTimeToVisit: 'September to November offering the warmest temperatures and clearest sunny skies.'
  }
};
