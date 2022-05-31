import React, { Component } from 'react'
import API from './ApiService/API'
import Button from './Button/Button'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
import Modal from './Modal/Modal'
import Loader from './Loader/Loader'


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};

export default App;