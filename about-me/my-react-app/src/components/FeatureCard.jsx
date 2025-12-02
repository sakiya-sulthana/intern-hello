
function FeatureCard({ title, description, imageUrl }) {
  return (
    <div className="feature-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default FeatureCard;