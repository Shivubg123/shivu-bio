import { useState, useEffect } from 'react';

export const AgeCounter = ({ dateOfBirth }) => {
  const [age, setAge] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date();
      const birthDate = new Date(dateOfBirth);

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();

      if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
      }

      if (today.getDate() < birthDate.getDate()) {
        months--;
        if (months < 0) {
          months += 12;
        }
      }

      setAge({ years, months });
    };

    calculateAge();
    // Update every day
    const timer = setInterval(calculateAge, 1000 * 60 * 60 * 24);
    return () => clearInterval(timer);
  }, [dateOfBirth]);

  return (
    <div className="age-display">
      <h3>
        Age: <span className="age-number">{age.years}</span> years, <span className="age-number">{age.months}</span> months
      </h3>
    </div>
  );
};
