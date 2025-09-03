import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();
  
  const handleAddToCart = () => {
    addItem(product);
  };

  const handleWishlistToggle = () => {
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = '/auth';
      return;
    }
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button 
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart className={`w-5 h-5 transition-colors ${
            user && isInWishlist(product.id) 
              ? 'text-red-500 fill-current' 
              : 'text-stone-600 hover:text-red-500'
          }`} />
        </button>
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-stone-700">{product.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-800 mb-2">{product.name}</h3>
        <p className="text-stone-600 text-sm mb-4 leading-relaxed">{product.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-stone-700 mb-2">Key Benefits:</h4>
          <div className="flex flex-wrap gap-1">
            {product.benefits.map((benefit, idx) => (
              <span
                key={idx}
                className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-emerald-700">{product.price}</span>
          <div className="flex space-x-2">
            <Link 
              to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-emerald-700 hover:text-emerald-800 px-4 py-2 rounded-lg border border-emerald-200 hover:bg-emerald-50 transition-colors text-sm font-medium flex items-center space-x-1"
            >
              <Eye className="w-4 h-4" />
              <span>Read More</span>
            </Link>
            <motion.button
              onClick={handleAddToCart}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Add to Cart</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;