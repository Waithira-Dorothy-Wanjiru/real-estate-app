import React, { useEffect, useState } from 'react';
import PropertyList from './PropertyList';
import PropertyForm from './PropertyForm';
import Footer from './Footer';

function Home() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null); // Corrected this state

  // Function to fetch properties from `db.json`
  const fetchProperties = async () => {
    try {
      const response = await fetch('/db.json'); // Fetch the local db.json
      const data = await response.json();
      setProperties(data.properties || []); // Assuming `properties` is inside the JSON
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  // Fetch properties when the component mounts
  useEffect(() => {
    fetchProperties();
  }, []);

  // Handle adding a new property
  function handleAddProperty(newProperty) {
    setProperties([...properties, newProperty]);
  }

  // Handle deleting a property
  function handleDeleteProperty(id) {
    setProperties(properties.filter(property => property.id !== id));
  }

  // Handle editing a property
  function handleEditProperty(updatedProperty) {
    setProperties(
      properties.map(property =>
        property.id === updatedProperty.id ? updatedProperty : property
      )
    );
    setSelectedProperty(null); // Clear the selected property after editing
  }

  // Handle selecting a property to edit
  function handleSelectProperty(property) {
    setSelectedProperty(property);
  }

  return (
    <div>
      <h1>Properties</h1>
      <PropertyForm
        onAddProperty={handleAddProperty}
        onEditProperty={handleEditProperty}
        selectedProperty={selectedProperty} // Pass the selected property to the form
      />
      <PropertyList
        properties={properties}
        onDeleteProperty={handleDeleteProperty}
        onEditProperty={handleSelectProperty} // Trigger selecting a property to edit
      />
      <Footer />
    </div>
  );
}

export default Home;
