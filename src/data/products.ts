import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Heavy Duty Rubber Gloves',
    price: 299,
    image: 'https://images.unsplash.com/photo-1588453363871-7a50fa2d3719?w=400&h=400&fit=crop',
    description: 'Professional grade rubber gloves designed for agricultural work. Chemical resistant and durable.',
    category: 'Safety Equipment',
    inStock: true,
    features: ['Chemical resistant', 'Non-slip grip', 'Extended cuff protection', 'Reusable']
  },
  {
    id: '2',
    name: 'Water Pump - 1HP',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    description: 'High-efficiency water pump suitable for irrigation and farm water management systems.',
    category: 'Pumps',
    inStock: true,
    features: ['1HP motor', 'Self-priming', 'Corrosion resistant', '2-year warranty']
  },
  {
    id: '3',
    name: 'Spray Nozzle Set',
    price: 599,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
    description: 'Complete set of spray nozzles for pesticide and fertilizer application.',
    category: 'Spraying Equipment',
    inStock: true,
    features: ['Multiple spray patterns', 'Brass construction', 'Easy attachment', 'Set of 6 nozzles']
  },
  {
    id: '4',
    name: 'Agricultural Hose - 50ft',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop',
    description: 'Heavy-duty agricultural hose designed for farm irrigation and equipment connection.',
    category: 'Irrigation',
    inStock: true,
    features: ['50 feet length', 'UV resistant', 'Kink resistant', 'High pressure rated']
  },
  {
    id: '5',
    name: 'Fertilizer Spreader',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop',
    description: 'Manual fertilizer spreader for even distribution across fields and gardens.',
    category: 'Farm Tools',
    inStock: true,
    features: ['Adjustable spread rate', 'Large capacity hopper', 'Rust resistant', 'Easy to clean']
  },
  {
    id: '6',
    name: 'Irrigation Timer',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
    description: 'Automatic irrigation timer for scheduled watering systems.',
    category: 'Irrigation',
    inStock: true,
    features: ['Digital display', 'Multiple programs', 'Weather resistant', 'Battery backup']
  },
  {
    id: '7',
    name: 'Garden Pruning Shears',
    price: 899,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    description: 'Professional pruning shears with carbon steel blades for precise cutting.',
    category: 'Hand Tools',
    inStock: true,
    features: ['Carbon steel blades', 'Ergonomic handle', 'Safety lock', 'Bypass cutting action']
  },
  {
    id: '8',
    name: 'Drip Irrigation Kit',
    price: 2599,
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=400&fit=crop',
    description: 'Complete drip irrigation kit for efficient water management in gardens and small farms.',
    category: 'Irrigation',
    inStock: false,
    features: ['50 emitters included', 'Pressure compensating', 'Complete fittings', 'Installation guide']
  },
  {
    id: '9',
    name: 'Soil pH Test Kit',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop',
    description: 'Professional soil pH testing kit for optimal crop growth management.',
    category: 'Testing Equipment',
    inStock: true,
    features: ['Digital meter', '100 test strips', 'Accurate readings', 'Carrying case included']
  },
  {
    id: '10',
    name: 'Wheelbarrow - Heavy Duty',
    price: 4299,
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=400&fit=crop',
    description: 'Heavy-duty wheelbarrow for transporting soil, fertilizer, and farm materials.',
    category: 'Farm Tools',
    inStock: true,
    features: ['Steel construction', 'Pneumatic tire', '6 cubic feet capacity', 'Rust resistant coating']
  }
];

export const categories = [
  'All Products',
  'Safety Equipment',
  'Pumps',
  'Spraying Equipment',
  'Irrigation',
  'Farm Tools',
  'Hand Tools',
  'Testing Equipment'
];

export const featuredProducts = products.slice(0, 4);