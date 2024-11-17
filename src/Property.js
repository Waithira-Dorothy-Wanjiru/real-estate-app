import React from 'react';

function Property({ property, onDelete, onEdit }) {
  return (
    <div className="property">
      <h3>{property.title}</h3>
      <img src={property.imageUrl} alt={property.title} width="300" height="200" />
      <p>{property.description}</p>
      <p><strong>{property.price}</strong></p>
      <p>{property.location}</p>
      <button onClick={() => onEdit(property)}>Edit</button>
      <button onClick={() => onDelete(property.id)}>Delete</button>
    </div>
  );
}

export default Property;
