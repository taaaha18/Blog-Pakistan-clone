import React from 'react';
import BlogCarousel from './BlogCarousel';
import './CSS/heroSection.css'; 

const App = () => {

  const blogData = [
    {
      title: "The Top 20 Best Abaya Brands in Pakistan – Prices & Followers",
      description: "Modest fashion is not easy to pull off &...",
      image: "https://blogpakistan.pk/wp-content/uploads/2024/04/Best-Abaya-Brands-in-Pakistan.jpg",
      link: "/blog/hunza-valley",
      author: "Taha Tayyab",
      date: "July 30, 2025",
      category: "Fashion",
      readTime: "5 min read"
    },
    {
      title: "Top Services Offered by the Best Beauty Salon in Lahore",
      description: "When it comes to finding the best beauty salon...",
      image: "https://blogpakistan.pk/wp-content/uploads/2024/06/summaya-02.png",
      link: "/blog/hunza-valley",
      author: "Taha Tayyab",
      date: "July 30, 2025",
      category: "Beauty",
      readTime: "5 min read"
    },
    {
      title: "Top 20 Easy Mehndi Designs for Eid 2024",
      description: "Looking for simple yet trendy Mehndi designs for 2024?...",
      image: "https://blogpakistan.pk/wp-content/uploads/2024/01/mehendi-designs-for-2024.jpg",
      link: "/blog/hunza-valley",
      author: "Taha Tayyab",
      date: "July 30, 2025",
      category: "Fashion",
      readTime: "5 min read"
    },
    {
      title: "Best Pakistani Wedding Dresses 2025",
      description: "Traditional and modern wedding dress styles...",
      image: "https://blogpakistan.pk/wp-content/uploads/2024/04/Best-Abaya-Brands-in-Pakistan.jpg",
      link: "/blog/hunza-valley",
      author: "Taha Tayyab",
      date: "July 30, 2025",
      category: "Wedding",
      readTime: "5 min read"
    }
  ];

  
  const handleCardClick = (blog, index) => {
    console.log('Card clicked:', blog);
    
  };

  return (
    <div className="App">
      
      <main>
        <section className="featured-blogs">
          
         
          <BlogCarousel blogData={blogData} />
          
        </section>
      </main>
    </div>
  );
};

export default App;