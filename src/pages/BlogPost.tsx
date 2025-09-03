import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

interface BlogPosts {
  [key: string]: BlogPost;
}

const blogPosts: BlogPosts = {
  'golden-milk-ayurvedic-bedtime-ritual': {
    title: 'Golden Milk: The Ayurvedic Bedtime Drink That Heals from Within',
    content: `
      <p>Discover the ancient wisdom of Ayurveda with Bolt's Golden Milk, a soothing blend of turmeric, saffron, and premium herbs that promotes restful sleep and overall wellness.</p>
      
      <h3>The Magic of Golden Milk</h3>
      <p>Our specially crafted Golden Milk combines the powerful anti-inflammatory properties of turmeric with the calming effects of saffron. This traditional recipe has been enhanced with modern nutritional science to maximize its healing benefits.</p>
      
      <h3>Health Benefits</h3>
      <ul>
        <li>Natural anti-inflammatory properties</li>
        <li>Promotes better sleep quality</li>
        <li>Supports immune system function</li>
        <li>Aids digestion and relaxation</li>
        <li>Rich in antioxidants</li>
      </ul>
      
      <h3>Perfect Bedtime Ritual</h3>
      <p>For the best results, enjoy a warm cup of Golden Milk about an hour before bedtime. Simply mix 2 teaspoons with warm milk of your choice (dairy or plant-based). The natural compounds work together to help your body relax and prepare for restful sleep.</p>
      
      <h3>Key Ingredients</h3>
      <p>Our Golden Milk blend features premium turmeric, high-grade saffron, cardamom, and other traditional Ayurvedic herbs. Each ingredient is carefully selected and tested for purity and potency.</p>
    `,
    image: '/images/products/golden-milk.jpg',
    author: 'Ayurveda Specialist',
    date: '2025-08-10',
    readTime: '5 min read',
    category: 'Ayurveda'
  },
  'storage-tips-malt-freshness': {
    title: 'Keeping Your Malts Fresh: Essential Storage Tips',
    content: `
      <p>Proper storage is key to maintaining the quality, flavor, and nutritional value of your Bolt malt products. Follow these expert guidelines to ensure your malts stay fresh and potent.</p>
      
      <h3>The Science of Freshness</h3>
      <p>Malt products are sensitive to environmental factors like temperature, humidity, and light. Understanding how to protect your malts from these elements is crucial for maintaining their nutritional value and taste.</p>
      
      <h3>Essential Storage Guidelines</h3>
      <ul>
        <li>Always use an airtight container</li>
        <li>Store in a cool, dry place away from direct sunlight</li>
        <li>Use only clean, dry spoons for serving</li>
        <li>Avoid moisture contamination</li>
        <li>Keep away from strong-smelling items</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>Transfer your malt products to an airtight container immediately after opening. This helps prevent moisture absorption and maintains freshness. Always use a dry spoon to prevent introducing moisture into the container.</p>
      
      <h3>Temperature and Environment</h3>
      <p>Store your malts at room temperature (20-25°C) in a kitchen cabinet or pantry. Avoid storing near the stove or in areas with high humidity like the refrigerator. This ensures optimal preservation of nutrients and flavor.</p>
    `,
    image: '/images/products/storage-tips.jpg',
    author: 'Quality Team',
    date: '2025-08-05',
    readTime: '3 min read',
    category: 'Tips'
  },
  'nutrient-beverages-modern-health-solution': {
    title: 'Nutrient Beverages: The Modern Answer to Health Challenges',
    content: `
      <p>In today's fast-paced world, maintaining optimal nutrition can be challenging. Bolt's nutrient beverages offer a convenient and effective solution to meet your daily nutritional needs.</p>
      
      <h3>The Power of Liquid Nutrition</h3>
      <p>Our nutrient beverages are scientifically formulated to deliver essential vitamins, minerals, and nutrients in their most bioavailable form. Each serving is packed with carefully selected ingredients that work synergistically to support your overall health.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li>Quick absorption and immediate energy boost</li>
        <li>Complete spectrum of essential vitamins and minerals</li>
        <li>Natural ingredients with no artificial additives</li>
        <li>Convenient on-the-go nutrition</li>
      </ul>
      
      <h3>How to Incorporate Into Your Daily Routine</h3>
      <p>Start your day with a serving of our nutrient beverage to kickstart your metabolism and provide sustained energy. You can also enjoy it as a mid-day boost or post-workout recovery drink.</p>
      
      <p>For optimal results, consume one serving daily, either on its own or mixed with your favorite smoothie. The natural ingredients work together to support your body's natural functions while providing the nutrition you need.</p>
    `,
    image: '/images/products/nutrient-beverage.jpg',
    author: 'Bolt Nutrition Team',
    date: '2025-08-30',
    readTime: '6 min read',
    category: 'Product Spotlight'
  },
  'fig-malt-superfood-drink': {
    title: 'Why Fig Malt is the Superfood Drink Your Body Needs',
    content: `
      <p>Bolt's Fig Malt is a unique blend that combines the natural sweetness and nutritional benefits of figs with the power of malted grains. This traditional recipe has been enhanced with modern nutritional science to create a true superfood beverage.</p>
      
      <h3>The Fig Malt Difference</h3>
      <p>Our premium fig malt is crafted using carefully selected dried figs and malted grains, creating a perfect balance of taste and nutrition. The malting process enhances the bioavailability of nutrients, making them easier for your body to absorb.</p>
      
      <h3>Nutritional Benefits</h3>
      <ul>
        <li>Rich in natural fiber and minerals</li>
        <li>Excellent source of iron and calcium</li>
        <li>Natural energy booster</li>
        <li>Supports digestive health</li>
      </ul>
      
      <h3>Usage Guidelines</h3>
      <p>Mix 2-3 tablespoons with warm milk or water for a delicious and nutritious beverage. Can be consumed any time of day for an energy boost. Perfect for both adults and children.</p>
    `,
    image: '/images/products/fig-malt.jpg',
    author: 'Bolt Product Specialist',
    date: '2025-08-25',
    readTime: '4 min read',
    category: 'Product Features'
  },
  'banana-flower-womens-health-secret': {
    title: 'Banana Flower: The Ancient Secret for Women\'s Health',
    content: `
      <p>Discover the traditional wisdom behind our Banana Flower beverage, specially formulated to support women's health and wellness. This unique product combines ancient knowledge with modern nutritional science.</p>
      
      <h3>The Power of Banana Flower</h3>
      <p>Banana flower has been used for centuries in traditional medicine to support women's health. Rich in iron, fiber, and essential nutrients, it's nature's gift for maintaining hormonal balance and overall wellness.</p>
      
      <h3>Health Benefits</h3>
      <ul>
        <li>High in iron and essential minerals</li>
        <li>Supports hormonal balance</li>
        <li>Rich in antioxidants</li>
        <li>Promotes natural wellness</li>
      </ul>
      
      <h3>Recommended Usage</h3>
      <p>Enjoy one serving daily, preferably in the morning. Can be mixed with water or added to smoothies. Regular consumption helps maintain optimal health and vitality.</p>
    `,
    image: '/images/products/banana-flower.jpg',
    author: 'Bolt Research Team',
    date: '2025-08-20',
    readTime: '5 min read',
    category: 'New Products'
  },
  'abc-malt-kids-nutrition-hack': {
    title: 'ABC Malt – The Smart Way to Sneak Nutrition into Kids\' Meals',
    content: `
      <p>Bolt's ABC Malt is specifically designed to make nutrition fun and tasty for children. Our special formula combines essential nutrients with a delicious taste that kids love.</p>
      
      <h3>What Makes ABC Malt Special</h3>
      <p>Our ABC Malt contains a balanced blend of almonds, dates, and carefully selected grains, providing complete nutrition in a kid-friendly format. Each serving is packed with the vitamins and minerals growing children need.</p>
      
      <h3>Nutritional Benefits for Kids</h3>
      <ul>
        <li>Essential vitamins for growth and development</li>
        <li>Calcium for strong bones</li>
        <li>Brain-boosting nutrients</li>
        <li>Natural energy for active kids</li>
      </ul>
      
      <h3>How to Serve</h3>
      <p>Mix with milk or add to smoothies for a delicious treat. Can be served hot or cold. Recommended twice daily for optimal benefits. Make it fun by letting kids choose their favorite way to enjoy it!</p>
    `,
    image: '/images/products/abc-malt.jpg',
    author: 'Bolt Development Team',
    date: '2025-08-15',
    readTime: '4 min read',
    category: 'Product Guide'
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        console.log('URL copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy URL:', err);
      });
  };

  if (!post) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold text-stone-800">Post not found</h1>
        <Link to="/journal" className="text-emerald-600 hover:text-emerald-700 mt-4 inline-block">
          Return to Journal
        </Link>
      </div>
    );
  }

  // Get related articles excluding the current one
  const relatedArticles = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .map(([key, article]) => ({
      slug: key,
      title: article.title,
      image: article.image
    }))
    .slice(0, 3);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-stone-100 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/journal"
              className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Journal</span>
            </Link>

            <div className="flex items-center space-x-4 text-sm text-stone-500 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6">
              {post.title}
            </h1>
            
            <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
              {post.category}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-stone prose-lg max-w-none"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl mb-12"
            />
            
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-stone-200"
          >
            <div className="flex items-center justify-between">
              <Link
                to="/journal"
                className="text-emerald-700 hover:text-emerald-800 font-medium flex items-center space-x-1 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Journal</span>
              </Link>

              <button
                onClick={copyToClipboard}
                className="text-emerald-700 hover:text-emerald-800 font-medium flex items-center space-x-1 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Article</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Related Articles
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-stone-800 mb-4 group-hover:text-emerald-700 transition-colors">
                    {article.title}
                  </h3>
                  <Link
                    to={`/journal/${article.slug}`}
                    className="text-emerald-700 hover:text-emerald-800 font-medium text-sm flex items-center space-x-1 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
