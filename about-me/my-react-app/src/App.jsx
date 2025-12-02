
import FeatureCard from './components/FeatureCard';
import './App.css';

function App() {
  return (
    <section className="feature-section">
      <h2 className="section-title">Our Features</h2>
      <p className="section-subtitle">Designed to deliver the best experience</p>

      <div className="features-grid">
        <FeatureCard
          title="Fast Performance"
          description="Experience blazing fast speed and optimized loading."
          imageUrl="https://www.aihr.com/wp-content/uploads/performance-management-cover.png"
          />
        
        <FeatureCard
          title="Secure"
          description="Built with advanced level privacy and protection."
          imageUrl="https://thumbs.dreamstime.com/b/percent-secure-icon-vector-green-shield-percent-secure-icon-vector-green-shield-protection-data-secure-symbol-design-384316807.jpg"/>
        <FeatureCard
          title="Customizable"
          description="You can easily edit and configure everything."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOg-iyGzv_NWU5op5tdN8mpEQqyHLI0XQBA&s"
        />
      </div>
    </section>
  );
}

export default App;

