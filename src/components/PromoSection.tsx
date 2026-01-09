import NewArrivals from '../assets/promo/new-arrival-01.jpg'
import SummerSale from '../assets/promo/summer-sales.jpg'
import { motion } from 'framer-motion'


export default function PromoSection(): React.JSX.Element {
  return (
    <section className="py-12 bg-linear-to-br from-indigo-950 via-purple-950 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Promo */}
          <motion.div
            initial={{ opacity: 0, x: -100}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:0.8, ease:"easeInOut"}}
            className="group relative rounded-2xl overflow-hidden h-64 md:h-80 cursor-pointer">
            {/* Background Image */}
            <img
              src={SummerSale}
              alt="Electronics Sale"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 text-white"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <p className="text-blue-200 text-sm font-semibold mb-2">
                SUMMER SALE
              </p>
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                Up to 50% Off
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                On selected electronics and gadgets
              </p>
              <button className="w-fit bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
                Shop Now
              </button>
            </div>
          </motion.div>

          {/* Right Promo */}
          <motion.div 
            initial={{ opacity: 0, x: 100}}
            whileInView={{opacity:1,x:0}}
            viewport={{ once:true}}
            transition={{duration:0.8, ease:"easeInOut"}}
            className="group relative rounded-2xl overflow-hidden h-64 md:h-80 cursor-pointer">
            {/* Background Image */}
            <img
              src={NewArrivals}
              alt="New Fashion Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 text-white"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <p className="text-pink-200 text-sm font-semibold mb-2">
                NEW ARRIVALS
              </p>
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                Fresh Collection
              </h3>
              <p className="text-pink-100 text-sm mb-4">
                Discover the latest trends and styles
              </p>
              <button className="w-fit bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition">
                Explore
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
