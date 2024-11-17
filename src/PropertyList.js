import React from 'react';
import Property from './Property';

function PropertyList({ properties, onDeleteProperty, onEditProperty }) {
  return (
    <div className="property-list">
      {properties.map(property => (
        <Property
          key={property.id}
          property={property}
          onDelete={onDeleteProperty}
          onEdit={onEditProperty} // Call the function to select a property for editing
        />
      ))}
    </div>
  );
}

export default PropertyList;
