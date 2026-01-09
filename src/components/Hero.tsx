import  Laptop from '../assets/hero image/laptop-01.jpg'
import  Decors from '../assets/hero image/decors.jpg'
import  Shoes from '../assets/hero image/shoes.jpg'
import  SmartWatch from '../assets/hero image/smart-watch.jpg'
import { motion } from 'framer-motion'


export default function Hero(): React.JSX.Element {
    return (
        <section className="bg-linear-to-br from-indigo-900 via-purple-900 to-purple-800 text-white py-20 relative overflow-hidden">
            {/* Dark corner accents */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-black/20 rounded-br-full"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-black/20 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/20 rounded-tr-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/20 rounded-tl-full"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-6">
                        <motion.span 
                            initial={{ opacity: 0, y: -200 }} 
                            animate={{ opacity: 1, y: 0 }}   
                            transition={{ 
                                type: "spring", 
                                stiffness: 100, 
                                damping: 15,
                                delay: 0.6
                            }}
                            className="inline-flex items-center gap-2 text-pink-300 bg-white/5 px-3 py-1 rounded-full text-sm font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6" />
                            </svg>
                            New Collection 2025
                        </motion.span>

                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
                            <span className="block">Discover <span className="text-pink-400">Your</span></span>
                            <span className="block">Style</span>
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-6 text-lg text-white/80 max-w-lg">
                            Explore our curated collection of premium products. Quality meets affordability with exclusive deals up to 50% off.
                        </motion.p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <motion.a 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#shop" 
                                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition">
                                <span>Shop Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.a>

                            <motion.a 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }} // Slightly more delay for a staggered look
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#categories" 
                                className="inline-flex items-center gap-2 border border-white/20 text-white py-3 px-5 rounded-full hover:bg-white/5 transition">
                                View Categories
                            </motion.a>
                        </div>
                    </div>

                    {/* Right images (4 images arranged like design) */}
                    <motion.div 
                        className="lg:col-span-6">
                        <div className="flex gap-6">
                            <div className="w-1/2 flex flex-col gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: -200 }} 
                                    animate={{ opacity: 1, y: 0 }}      
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 100, 
                                        damping: 15,
                                        delay: 0.6
                                    }}
                                    className="rounded-xl overflow-hidden bg-white flex items-center justify-center h-72">
                                    <img
                                        src={Laptop}
                                        alt="Laptop"
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: -200 }} 
                                    animate={{ opacity: 1, y: 0 }}      
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 100, 
                                        damping: 15,
                                        delay: 0.8
                                    }}
                                    className="rounded-xl overflow-hidden h-44">
                                    <img
                                        src={Decors}
                                        alt="Indoor Decors"
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                </motion.div>
                            </div>

                            <div className="w-1/2 flex flex-col gap-6">
                                <motion.div 
                                    initial={{ opacity: 0, y: -200 }} 
                                    animate={{ opacity: 1, y: 0 }}      
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 100, 
                                        damping: 15,
                                        delay: 1.0
                                    }}
                                    className="mt-3 rounded-xl overflow-hidden h-44">
                                    <img
                                        src={SmartWatch}
                                        alt=" Smart Watch"
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: -200 }} 
                                    animate={{ opacity: 1, y: 0 }}      
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 100, 
                                        damping: 15,
                                        delay: 1.2
                                    }}
                                    className="rounded-xl overflow-hidden h-52">
                                    <img
                                        src={Shoes}
                                        alt="Casual Shoes"
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                        width="200"
                                        height="400"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}