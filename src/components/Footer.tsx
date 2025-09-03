import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Soul Sip Malts</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Tradition in Every Sip. Nutrition for Every Life. Crafted with nature's best ingredients for modern wellness.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-stone-400 hover:text-emerald-400 transition-colors">About Us</Link>
              <Link to="/shop" className="block text-stone-400 hover:text-emerald-400 transition-colors">Shop Malts</Link>
              <Link to="/franchise" className="block text-stone-400 hover:text-emerald-400 transition-colors">Franchise</Link>
              <Link to="/journal" className="block text-stone-400 hover:text-emerald-400 transition-colors">Journal</Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Our Malts</h3>
            <div className="space-y-2">
              <a href="#" className="block text-stone-400 hover:text-emerald-400 transition-colors">Fig Malt - ₹399/-</a>
              <a href="#" className="block text-stone-400 hover:text-emerald-400 transition-colors">Banana Flower Malt - ₹399/-</a>
              <a href="#" className="block text-stone-400 hover:text-emerald-400 transition-colors">ABC Malt - ₹399/-</a>
              <a href="#" className="block text-stone-400 hover:text-emerald-400 transition-colors">Golden Milk - ₹399/- (New!)</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-stone-400 text-sm">
                  43/354 Vivekananda Street<br />
                  Poonga Nagar, Thiruvallur<br />
                  Tamil Nadu 602001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-stone-400 text-sm">+91 80723 61484</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-stone-400 text-sm">support@soulsipmalts.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-stone-400 text-sm">
            © 2025 Soul Sip Malts. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-stone-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;