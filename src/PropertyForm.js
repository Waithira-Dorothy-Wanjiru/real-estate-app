import React, { useState, useEffect } from 'react';
import './App.css';
function PropertyForm({ onAddProperty, onEditProperty, selectedProperty }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });

  // Pre-fill form with selectedProperty data when editing
  useEffect(() => {
    if (selectedProperty) {
      setFormData(selectedProperty);
    } else {
      setFormData({ name: '', description: '', price: '', imageUrl: '' }); // Reset form for new property
    }
  }, [selectedProperty]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedProperty) {
      onEditProperty(formData); // Call the edit function if editing
    } else {
      onAddProperty({ id: Date.now(), ...formData }); // Add a new property
    }

    setFormData({ name: '', description: '', price: '', imageUrl: '' }); // Reset form
  }

  return (
    <form onSubmit={handleSubmit} className="property-form">
  <h2>{selectedProperty ? 'Edit Property' : 'Add Property'}</h2>

  <div className="form-row">
    <label>Name:</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-row">
    <label>Description:</label>
    <input
      type="text"
      name="description"
      value={formData.description}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-row">
    <label>Price:</label>
    <input
      type="text"
      name="price"
      value={formData.price}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-row">
    <label>Image URL:</label>
    <input
      type="url"
      name="imageUrl"
      value={formData.imageUrl}
      onChange={handleChange}
      required
    />
  </div>

  <button type="submit">{selectedProperty ? 'Save Changes' : 'Add Property'}</button>
</form>

  );
}

export default PropertyForm;
