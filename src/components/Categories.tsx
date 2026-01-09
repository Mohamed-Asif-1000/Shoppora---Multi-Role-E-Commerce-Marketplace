import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Electronics from '../assets/categories/electronics.jpg'
import Decors from '../assets/categories/decors.jpg'
import Beauty from '../assets/categories/beauty.jpg'
import Sports from '../assets/categories/sports.jpg'
import Fashion from '../assets/categories/fashion.jpg'
import Books from '../assets/categories/books.jpg'

export default function Categories(): React.JSX.Element {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: Electronics,
      count: 245,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "Fashion",
      image: Fashion,
      count: 512,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 3,
      name: "Home & Living",
      image: Decors,
      count: 378,
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      name: "Sports & Outdoors",
      image: Sports,
      count: 289,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      name: "Beauty & Personal Care",
      image: Beauty,
      count: 401,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 6,
      name: "Books & Media",
      image: Books,
      count: 156,
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <section id="categories" className="bg-slate-900/60 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Browse by Category</h2>
          <p className="text-slate-400">Find what you're looking for</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category,index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{opacity:1,scale:1}}
              viewport={{once:true}}
              transition={{ duration: 0.4, delay: index * 0.1, type: 'spring' , stiffness: 260,damping:20 }}
              className="relative overflow-hidden rounded-xl h-56 cursor-pointer"
            >
              <Link
                to={`/search?q=${encodeURIComponent(category.name)}`}
                aria-label={`Browse ${category.name}`}
                className="group relative overflow-hidden rounded-xl h-56 cursor-pointer transition-transform hover:scale-105"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-30 group-hover:opacity-50 transition-opacity`} />

                {/* Image and text */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-4 z-10 opacity-75">
                  <div className="mb-3 w-full h-36 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-white font-semibold text-sm mt-2">{category.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
