// These Images are for Electronics category products
import WirelessHeadPhone from "../assets/electronics/wireless-headphone-01.jpg"
import SmartWatch from "../assets/electronics/smart-watch-01.jpg"
import BluetoothSpeaker from "../assets/electronics/bluetooth-speaker-01.jpg"
import WirelessCharger from "../assets/electronics/wireless-chager-01.jpg"
import NoiseCancellingEarbuds from "../assets/electronics/noise-cancelling-earbuds--01.jpg"
import ActionCamera from '../assets/electronics/camera-01.jpg'

// These Images are for Fashion category products
import DesignerBackpack from "../assets/fashion/designer-bag-01.jpg"
import LeatherShoes from '../assets/fashion/leather-shoe-01.jpg'
import WinterJacket from '../assets/fashion/winter-jacket-01.jpg'
import CasualSneaker from '../assets/fashion/cacual-sneaker-01.jpg'
import FormalShirt from '../assets/fashion/Formal-shirt-01.jpg'
import LeatherBelt from '../assets/fashion/leather-belt-01.jpg'

// These Images are for Home & Living category products
import CeramicCoffeeMug from '../assets/home-decors/coffee-mug-01.jpg'
import TableLamp from '../assets/home-decors/table-lamp-01.jpg'
import WallClock from '../assets/home-decors/wall-clock-01.jpg'
import WoodenShelf from '../assets/home-decors/wooden-shelf-01.jpg'
import IndoorPlant from '../assets/home-decors/indoor-plant-01.jpg'
import SofaCushionSet from '../assets/home-decors/sofa-cusion-set-01.jpg'

// These Images are for Sports & Outdoor category products
import SportsWaterBottle from '../assets/sports/sports-bottle-01.jpg'
import RunningShoes from '../assets/sports/running-shoes-01.jpg'
import DumbbellSet from '../assets/sports/dumbbell-set-01.jpg'
import YogaMat from '../assets/sports/yoga-mat-01.jpg'
import FitnessBand from '../assets/sports/fitness-band-01.jpg'
import CampingTent from '../assets/sports/camping-tent-01.jpg'

export type Product = {
  id: number
  title: string
  image: string
  price: number
  oldPrice?: string
  badge: string
  badgeColor: string
  rating: number
  buyers: number
  category: string
}

export const products: Product[] = [
  // ================= ELECTRONICS =================
  {
    id: 1,
    title: 'Wireless Headphones',
    image: WirelessHeadPhone,
    price: 499,
    badge: 'NEW ARRIVAL',
    badgeColor: 'bg-red-500',
    rating: 4.5,
    buyers: 5200,
    category: 'Electronics',
  },
  {
    id: 2,
    title: 'Smart Watch',
    image: SmartWatch,
    price: 1500,
    badge: 'LAUNCH OFFER',
    badgeColor: 'bg-cyan-500',
    rating: 4.4,
    buyers: 4100,
    category: 'Electronics',
  },
  {
    id: 3,
    title: 'Bluetooth Speaker',
    image: BluetoothSpeaker,
    price: 2499,
    badge: 'SUMMER SALE',
    badgeColor: 'bg-pink-500',
    rating: 4.3,
    buyers: 3000,
    category: 'Electronics',
  },
  {
    id: 4,
    title: 'Wireless Charger',
    image: WirelessCharger,
    price: 1299,
    badge: 'NEW ARRIVAL',
    badgeColor: 'bg-red-500',
    rating: 4.1,
    buyers: 2600,
    category: 'Electronics',
  },
  {
    id: 5,
    title: 'Noise Cancelling Earbuds',
    image: NoiseCancellingEarbuds,
    price: 1699,
    badge: 'SHOPPORA RECOMMENDED',
    badgeColor: 'bg-cyan-500',
    rating: 4.6,
    buyers: 3900,
    category: 'Electronics',
  },
  {
    id: 6,
    title: '4K Action Camera',
    image: ActionCamera,
    price: 50000,
    badge: 'BEST SELLER',
    badgeColor: 'bg-purple-500',
    rating: 4.4,
    buyers: 2800,
    category: 'Electronics',
  },

  // ================= FASHION =================
  {
    id: 7,
    title: 'Designer Backpack',
    image: DesignerBackpack,
    price: 2399,
    badge: 'NEW ARRIVAL',
    badgeColor: 'bg-pink-500',
    rating: 4.2,
    buyers: 2100,
    category: 'Fashion',
  },
  {
    id: 8,
    title: 'Leather Shoes',
    image: LeatherShoes,
    price: 2499,
    badge: 'LAUNCH OFFER',
    badgeColor: 'bg-red-500',
    rating: 4.5,
    buyers: 3400,
    category: 'Fashion',
  },
  {
    id: 9,
    title: 'Winter Jacket',
    image: WinterJacket,
    price: 1799,
    badge: 'BEST SELLER',
    badgeColor: 'bg-red-500',
    rating: 4.4,
    buyers: 2600,
    category: 'Fashion',
  },
  {
    id: 10,
    title: 'Casual Sneakers',
    image: CasualSneaker,
    price: 999,
    badge: 'NEW ARRIVAL',
    badgeColor: 'bg-cyan-500',
    rating: 4.3,
    buyers: 1900,
    category: 'Fashion',
  },
  {
    id: 11,
    title: 'Formal Shirt',
    image: FormalShirt,
    price: 699,
    badge: 'SUMMMER SALE',
    badgeColor: 'bg-pink-500',
    rating: 4.1,
    buyers: 1600,
    category: 'Fashion',
  },
  {
    id: 12,
    title: 'Leather Belt',
    image: LeatherBelt,
    price: 499,
    badge: 'SHOPPORA RECOMMENDED',
    badgeColor: 'bg-cyan-500',
    rating: 4.0,
    buyers: 1300,
    category: 'Fashion',
  },

  // ================= HOME & LIVING =================
  {
    id: 13,
    title: 'Ceramic Coffee Mug',
    image: CeramicCoffeeMug,
    price: 759,
    badge: 'BEST SELLER',
    badgeColor: 'bg-pink-500',
    rating: 4.6,
    buyers: 2800,
    category: 'Home & Living',
  },
  {
    id: 14,
    title: 'Table Lamp',
    image: TableLamp,
    price: 1200,
    badge: 'NEW ARRIVAL',
    badgeColor: 'bg-cyan-500',
    rating: 4.3,
    buyers: 1700,
    category: 'Home & Living',
  },
  {
    id: 15,
    title: 'Wall Clock',
    image: WallClock,
    price: 999,
    badge: 'NEW ARRIVAL',
    badgeColor: 'bg-red-500',
    rating: 4.1,
    buyers: 1500,
    category: 'Home & Living',
  },
  {
    id: 16,
    title: 'Indoor Plant',
    image: IndoorPlant,
    price: 889,
    badge: 'BEST SELLER',
    badgeColor: 'bg-cyan-500',
    rating: 4.5,
    buyers: 2600,
    category: 'Home & Living',
  },
  {
    id: 17,
    title: 'Wooden Shelf',
    image: WoodenShelf,
    price: 3799,
    badge: 'SHOPPORA RECOMMENDED',
    badgeColor: 'bg-pink-500',
    rating: 4.2,
    buyers: 1800,
    category: 'Home & Living',
  },
  {
    id: 18,
    title: 'Sofa Cushion Set',
    image: SofaCushionSet,
    price: 8999,
    badge: 'SUMMER SALE',
    badgeColor: 'bg-red-500',
    rating: 4.4,
    buyers: 2100,
    category: 'Home & Living',
  },

  // ================= SPORTS & OUTDOOR =================
  {
    id: 19,
    title: 'Sports Water Bottle',
    image: SportsWaterBottle,
    price: 799,
    badge: 'SUMMER SALE',
    badgeColor: 'bg-cyan-500',
    rating: 4.4,
    buyers: 3500,
    category: 'Sports & Outdoor',
  },
  {
    id: 20,
    title: 'Yoga Mat',
    image: YogaMat,
    price: 680,
    badge: 'BEST SELLER',
    badgeColor: 'bg-pink-500',
    rating: 4.6,
    buyers: 4200,
    category: 'Sports & Outdoor',
  },
  {
    id: 21,
    title: 'Dumbbell Set',
    image: DumbbellSet,
    price: 2000,
    badge: 'NEW ARRIVAL',
    badgeColor: 'bg-red-500',
    rating: 4.5,
    buyers: 3100,
    category: 'Sports & Outdoor',
  },
  {
    id: 22,
    title: 'Camping Tent',
    image: CampingTent,
    price: 5000,
    badge: 'BEST SELLER',
    badgeColor: 'bg-purple-500',
    rating: 4.7,
    buyers: 2900,
    category: 'Sports & Outdoor',
  },
  {
    id: 23,
    title: 'Running Shoes',
    image: RunningShoes,
    price: 3499,
    badge: 'SUMMER SALE',
    badgeColor: 'bg-pink-500',
    rating: 4.6,
    buyers: 3300,
    category: 'Sports & Outdoor',
  },
  {
    id: 24,
    title: 'Fitness Band',
    image: FitnessBand,
    price: 1000,
    badge: 'SHOPPORA RECOMMENDED',
    badgeColor: 'bg-cyan-500',
    rating: 4.2,
    buyers: 2500,
    category: 'Sports & Outdoor',
  },
]
