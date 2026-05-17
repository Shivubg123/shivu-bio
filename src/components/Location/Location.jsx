import './Location.css';

export const Location = ({ address, name }) => {
  return (
    <section className="location-section">
      <div className="container">
        <h2>Location</h2>
        <p className="location-address">
          {address.city}, {address.state}
        </p>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.3810477462657!2d75.9760108117131!3d13.590899964208218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1779026804702!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
