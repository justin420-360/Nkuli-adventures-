import { LucideIcon } from 'lucide-react';

export interface SafariPackage {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
}

export const SAFARI_PACKAGES: SafariPackage[] = [
  {
    id: '1',
    title: '3 Days Maasai Mara Safari',
    slug: 'maasai-mara-safari',
    description: 'Experience the magic of the world-famous Maasai Mara National Reserve, home to the Great Migration and the Big Five.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000',
    price: 'From $450',
    duration: '3 Days',
    highlights: ['Game drives', 'Maasai Village visit', 'Big Five spotting']
  },
  {
    id: '2',
    title: 'Amboseli National Park Safari',
    slug: 'amboseli-safari',
    description: 'Witness the majestic elephants of Amboseli with the stunning backdrop of Mount Kilimanjaro.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1000',
    price: 'From $380',
    duration: '2 Days',
    highlights: ['Mount Kilimanjaro views', 'Large elephant herds', 'Observation Hill']
  },
  {
    id: '3',
    title: 'Samburu Special Safari',
    slug: 'samburu-safari',
    description: 'Explore the unique wildlife of Northern Kenya, including the Samburu Special Five.',
    image: 'https://images.unsplash.com/photo-1523805081730-6144a777a660?auto=format&fit=crop&q=80&w=1000',
    price: 'From $520',
    duration: '3 Days',
    highlights: ['Reticulated Giraffe', 'Grevy\'s Zebra', 'Ewaso Ng\'iro River']
  },
  {
    id: '4',
    title: 'Diani Beach Holiday',
    slug: 'diani-beach-holiday',
    description: 'Relax on the pristine white sands of Diani Beach after your thrilling safari adventure.',
    image: 'https://images.unsplash.com/photo-1589979485614-978a088f78ca?auto=format&fit=crop&q=80&w=1000',
    price: 'From $300',
    duration: '4 Days',
    highlights: ['Snorkeling', 'Beach relaxation', 'Fresh seafood']
  },
  {
    id: '5',
    title: 'Ol Pejeta Conservancy Safari',
    slug: 'ol-pejeta-safari',
    description: 'Visit the largest black rhino sanctuary in East Africa and meet the world\'s last northern white rhinos.',
    image: 'https://images.unsplash.com/photo-1519066629447-267ffbb62d4b?auto=format&fit=crop&q=80&w=1000',
    price: 'From $400',
    duration: '2 Days',
    highlights: ['Rhino sanctuary', 'Chimpanzee sanctuary', 'Night game drives']
  },
  {
    id: '6',
    title: 'Lake Nakuru National Park Safari',
    slug: 'lake-nakuru-safari',
    description: 'A bird watcher\'s paradise featuring flamingos, rhinos, and the stunning views of the Great Rift Valley.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000',
    price: 'From $350',
    duration: '2 Days',
    highlights: ['Flamingo watching', 'Rhino spotting', 'Makalia Falls']
  },
  {
    id: '13',
    title: 'Lake Naivasha Adventure',
    slug: 'lake-naivasha-safari',
    description: 'Enjoy boat rides, bird watching, and a visit to Crescent Island on this freshwater lake in the Rift Valley.',
    image: 'https://images.unsplash.com/photo-1589979485614-978a088f78ca?auto=format&fit=crop&q=80&w=1000',
    price: 'From $250',
    duration: '1 Day',
    highlights: ['Boat ride', 'Crescent Island walk', 'Bird watching']
  },
  {
    id: '7',
    title: '4 Days Tsavo East & West Safari',
    slug: 'tsavo-safari',
    description: 'Explore the "Theater of the Wild" and the "Land of Lava, Springs, and Man-Eaters".',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000',
    price: 'From $650',
    duration: '4 Days',
    highlights: ['Mzima Springs', 'Red Elephants', 'Shetani Lava Flow']
  },
  {
    id: '8',
    title: 'Nairobi National Park Day Trip',
    slug: 'nairobi-national-park-safari',
    description: 'The only park in the world within a capital city. See lions and rhinos with skyscrapers in the background.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1000',
    price: 'From $150',
    duration: '1 Day',
    highlights: ['City skyline views', 'Rhino sanctuary', 'Ivory Burning Site']
  },
  {
    id: '9',
    title: '5 Days Mt. Kenya Climbing',
    slug: 'mount-kenya-climbing',
    description: 'Challenge yourself with a trek up Africa\'s second-highest peak, featuring stunning alpine scenery.',
    image: 'https://images.unsplash.com/photo-1523805081730-6144a777a660?auto=format&fit=crop&q=80&w=1000',
    price: 'From $850',
    duration: '5 Days',
    highlights: ['Point Lenana summit', 'Unique alpine flora', 'Glacial lakes']
  },
  {
    id: '10',
    title: 'Hell\'s Gate & Naivasha Adventure',
    slug: 'hells-gate-safari',
    description: 'Cycle among giraffes and zebras in Hell\'s Gate, followed by a relaxing boat ride on Lake Naivasha.',
    image: 'https://images.unsplash.com/photo-1589979485614-978a088f78ca?auto=format&fit=crop&q=80&w=1000',
    price: 'From $200',
    duration: '1 Day',
    highlights: ['Cycling safari', 'Rock climbing', 'Geothermal spa']
  },
  {
    id: '11',
    title: '3 Days Aberdare National Park',
    slug: 'aberdare-safari',
    description: 'Experience the misty moorlands and waterfalls of the Aberdare Range, home to the rare Bongo antelope.',
    image: 'https://images.unsplash.com/photo-1519066629447-267ffbb62d4b?auto=format&fit=crop&q=80&w=1000',
    price: 'From $480',
    duration: '3 Days',
    highlights: ['Chania Waterfalls', 'Treetop viewing', 'Trout fishing']
  },
  {
    id: '12',
    title: 'Meru National Park Safari',
    slug: 'meru-safari',
    description: 'Visit the "Complete Wilderness" where Elsa the Lioness was returned to the wild.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000',
    price: 'From $550',
    duration: '3 Days',
    highlights: ['Born Free history', 'Tana River', 'Untamed wilderness']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Best Time to Visit Maasai Mara',
    slug: 'best-time-to-visit-maasai-mara',
    excerpt: 'Planning a trip to the Mara? Discover the best months for the Great Migration and wildlife viewing.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '2',
    title: 'How Much Does a Kenya Safari Cost?',
    slug: 'kenya-safari-cost-guide',
    excerpt: 'A comprehensive guide to budgeting for your dream African safari, from budget to luxury options.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '3',
    title: 'Maasai Mara vs Amboseli Safari',
    slug: 'maasai-mara-vs-amboseli',
    excerpt: 'Can\'t decide? We compare the two most popular parks in Kenya to help you choose.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1523805081730-6144a777a660?auto=format&fit=crop&q=80&w=500'
  }
];
