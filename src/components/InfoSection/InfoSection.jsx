import './InfoSection.css';

export const InfoSection = ({ groom }) => {
  const sections = [
    { title: 'Personal Details', data: [
        { label: 'Date of Birth', value: groom.dateOfBirth },
        { label: 'Height', value: groom.height },
        { label: 'Caste', value: groom.cast },
        { label: 'Birth Star', value: groom.birthStar },
        { label: 'Rasi', value: groom.rasi }
      ]
    },
    { title: 'Family Details', data: [
        { label: 'Father', value: groom.fatherName },
        { label: 'Mother', value: groom.motherName },
        { label: 'Siblings', value: groom.siblings },
        { label: 'Father Kula', value: groom['father kula'] },
        { label: 'Mother Kula', value: groom['mother kula'] },
        { label: 'Kula Devatha', value: groom.kulaDevatha },
        { label: 'Family Background', value: groom.familyBackground }
      ]
    },
    { title: 'Professional', data: [
        { label: 'Occupation', value: groom.occupation },
        { label: 'Company', value: groom.company },
        { label: 'Education', value: groom.education }
      ]
    },
    { title: 'Address', data: [
        { label: 'Permanent Residence', value: `${groom.address.city}, ${groom.address.state}` },
        { label: 'Current Residence', value: groom.currentResidence }
      ]
    }
  ];

  return (
    <section className="info-section">
      <div className="container">
        <div className="details-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="detail-card">
              <h3>{section.title}</h3>
              <ul>
                {section.data.map((item, i) => (
                  <li key={i}>
                    <span className="label">{item.label}:</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
