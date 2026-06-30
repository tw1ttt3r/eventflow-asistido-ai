import type { EventDetail } from '@features/events/event-detail.model';

const SIMILAR_POOL: EventDetail['similarEvents'] = [
  { id: '4', title: 'Sunrise Yoga in the Park', dateLabel: 'May 01', timeLabel: '6:00 AM', imageHue: 160 },
  { id: '3', title: 'Pottery Night: Wheel Throwing', dateLabel: 'Apr 12', timeLabel: '7:00 PM', imageHue: 30 },
  { id: '1', title: 'Intro to Hand Lettering', dateLabel: 'Mar 24', timeLabel: '10:00 AM', imageHue: 210 },
  { id: '5', title: 'Sunset Sound Bath', dateLabel: 'Apr 24', timeLabel: '6:30 PM', imageHue: 280 },
];

function similarExcept(eventId: string): EventDetail['similarEvents'] {
  return SIMILAR_POOL.filter((event) => event.id !== eventId).slice(0, 4);
}

export const MOCK_EVENT_DETAILS: EventDetail[] = [
  {
    id: '2',
    title: 'Rooftop Mixer: Connect & Collaborate',
    priceAmount: '$0',
    priceUnit: 'Per person',
    tags: ['Networking', 'Free entry'],
    dateLabel: 'Thu, May 28',
    timeRangeLabel: '6:30 PM – 9:30 PM',
    timezone: 'PDT',
    venue: 'Skyline Rooftop Lounge',
    address: '1200 Market St, San Francisco, CA',
    capacity: 50,
    spotsBooked: 38,
    imageHue: 265,
    walkInsAccepted: true,
    about:
      'Join Bay Area founders, designers, and operators for an evening of curated conversations above the city skyline. Expect short intros, open networking, and a relaxed soundtrack as the sun sets.',
    whoShouldAttend: 'Startup founders, product builders, community leads, and anyone exploring new collaborations.',
    whatToBring: 'Business cards, a friendly attitude, and a light jacket for the rooftop breeze.',
    host: {
      name: 'Marisol Vega',
      title: 'Community Manager · Bay Network',
      bio: 'Marisol curates inclusive networking experiences for early-stage teams across the Bay. She has hosted 40+ mixers focused on meaningful connections over small talk.',
      initials: 'MV',
    },
    similarEvents: similarExcept('2'),
  },
  {
    id: '1',
    title: 'Intro to Hand Lettering: Beginner Workshop',
    priceAmount: '$0',
    priceUnit: 'Per person',
    tags: ['Workshop', 'Creative'],
    dateLabel: 'Mar 24, 2026',
    timeRangeLabel: '10:00 AM – 12:00 PM',
    timezone: 'PDT',
    venue: 'Studio 3, Harbor House',
    address: '88 Pier Ave, Oakland, CA',
    capacity: 20,
    spotsBooked: 8,
    imageHue: 210,
    walkInsAccepted: false,
    about:
      'Learn foundational strokes, spacing, and layout techniques in a relaxed studio setting. Perfect for beginners who want to explore lettering as a creative outlet.',
    whoShouldAttend: 'Design enthusiasts, journal keepers, and anyone curious about hand lettering.',
    whatToBring: 'Notebook, pencil, and your favorite quote to letter.',
    host: {
      name: 'Lena Ortiz',
      title: 'Lettering artist · Harbor House',
      bio: 'Lena leads beginner-friendly lettering workshops and has illustrated campaigns for local bookstores and cafés across the East Bay.',
      initials: 'LO',
    },
    similarEvents: similarExcept('1'),
  },
  {
    id: '3',
    title: 'Pottery Night: Wheel Throwing Basics',
    priceAmount: '$0',
    priceUnit: 'Per person',
    tags: ['Hands-on', 'Evening'],
    dateLabel: 'Apr 12, 2026',
    timeRangeLabel: '7:00 PM – 9:30 PM',
    timezone: 'PDT',
    venue: 'Makers Lab',
    address: '410 Industrial Way, Berkeley, CA',
    capacity: 12,
    spotsBooked: 6,
    imageHue: 30,
    walkInsAccepted: false,
    about:
      'Hands-on introduction to centering clay and shaping your first bowl on the wheel. All materials included; pieces are fired and ready for pickup within two weeks.',
    whoShouldAttend: 'First-time potters and creatives looking for a tactile, screen-free evening.',
    whatToBring: 'Apron or clothes you do not mind getting clay on.',
    host: {
      name: 'Marco Reyes',
      title: 'Ceramicist · Makers Lab',
      bio: 'Marco teaches wheel throwing and glaze chemistry. His studio sessions focus on patience, play, and building confidence with clay.',
      initials: 'MR',
    },
    similarEvents: similarExcept('3'),
  },
  {
    id: '4',
    title: 'Sunrise Yoga in the Park',
    priceAmount: '$0',
    priceUnit: 'Per person',
    tags: ['Wellness', 'Outdoor'],
    dateLabel: 'May 01, 2026',
    timeRangeLabel: '6:00 AM – 7:15 AM',
    timezone: 'PDT',
    venue: 'Riverside Park',
    address: '200 River Walk, San Jose, CA',
    capacity: 40,
    spotsBooked: 20,
    imageHue: 160,
    walkInsAccepted: true,
    about:
      'Start the day with gentle flow and breathwork surrounded by nature. All levels welcome; modifications offered throughout the session.',
    whoShouldAttend: 'Yoga practitioners of any level and early risers who enjoy outdoor movement.',
    whatToBring: 'Yoga mat, water bottle, and light layers for cool mornings.',
    host: {
      name: 'Priya Nair',
      title: 'Certified yoga instructor',
      bio: 'Priya teaches vinyasa and restorative yoga in parks and community centers. She emphasizes mindful movement and accessible sequencing.',
      initials: 'PN',
    },
    similarEvents: similarExcept('4'),
  },
  {
    id: '5',
    title: 'Sunset Sound Bath',
    priceAmount: '$0',
    priceUnit: 'Per person',
    tags: ['Wellness', 'Community'],
    dateLabel: 'Sat, Apr 24',
    timeRangeLabel: '6:30 PM – 8:00 PM',
    timezone: 'PDT',
    venue: 'Riverside Studio, Downtown',
    address: '55 Front St, San Francisco, CA',
    capacity: 30,
    spotsBooked: 25,
    imageHue: 280,
    walkInsAccepted: false,
    about:
      'An evening of guided sound healing with crystal bowls and gentle movement to unwind and connect. Mats and blankets provided on site.',
    whoShouldAttend: 'Anyone seeking rest, reflection, or a calm group experience after a busy week.',
    whatToBring: 'Yoga mat, water bottle, and a light blanket for extra comfort.',
    host: {
      name: 'Maya Solano',
      title: 'Sound healer · Community facilitator',
      bio: 'Maya blends sound therapy with mindful movement. Her sessions create space for deep relaxation and gentle community connection.',
      initials: 'MS',
    },
    similarEvents: similarExcept('5'),
  },
];

export function findEventDetail(eventId: string): EventDetail | undefined {
  return MOCK_EVENT_DETAILS.find((event) => event.id === eventId);
}
