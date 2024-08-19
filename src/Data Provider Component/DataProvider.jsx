import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [selectedCategory, setCategory] = useState('All'); // All, Electronics, Living Room, Kitchen, Skin Care | By default, All is selected
    const [selectedTab, setSelectedTab] = useState('Home'); // Home, Products, Cart or Contact | By default, Home is selected
    const [currentProduct, setCurrentProduct] = useState(
        {name: "Error", price: 0.00, src: "../assets/products/livingroom1.jpg", category: "Living Room", rating: 0, description: "An error occured, please select a product before accessing this page.", favorite: false}
    ); // currentProduct is an object that follows the format {name: '', src: '', category: '', price: x, rating: x, description: '', favorite: false}

    const [cart, setCart] = useState([
    ]); // cart is an array of objects. Each object follows the format {name: '', src: '', price: x, amount: x}
    
    const [availableProducts, setAvailableProducts] = useState([
        {name: 'Chair', price: 7.99, src: '../assets/products/livingroom1.jpg', category: 'Living Room', rating: 4.5, description: "This is a very good product for your living room", favorite: false},
        {name: 'Cool chair', price: 3.99, src: '../assets/products/livingroom2.jpg', category: 'Living Room', rating: 3.5, description: 'This is a very good product for your living room', favorite: false},
        {name: 'Cool lamp', price: 10.99, src: '../assets/products/livingroom3.jpg', category: 'Living Room', rating: 4.0, description: 'This is a very good product for your living room', favorite: false},
        {name: 'Coffee Table', price: 2.99, src: '../assets/products/livingroom4.jpg', category: 'Living Room', rating: 4.0, description: 'This is a very good product for your living room', favorite: false},
        {name: 'Tea Table', price: 4.99, src: '../assets/products/livingroom5.jpg', category: 'Living Room', rating: 3.0, description: 'This is a very good product for your living room', favorite: false},
        {name: 'Caffeine Table', price: 3.49, src: '../assets/products/livingroom6.jpg', category: 'Living Room', rating: 4.0, description: 'This is a very good product for your living room', favorite: false},

        {name: 'Camera', price: 5.99, src: '../assets/products/electronics1.jpg', category: 'Electronics', rating: 4.0, description: 'This is a very good product for your electronics', favorite: false},
        {name: 'Headphones', price: 7.99, src: '../assets/products/electronics2.jpg', category: 'Electronics', rating: 3.5, description: 'This is a very good product for your electronics', favorite: false},
        {name: 'Monitor', price: 6.99, src: '../assets/products/electronics3.jpg', category: 'Electronics', rating: 3.5, description: 'This is a very good product for your electronics', favorite: false},
        {name: 'Keyboard', price: 8.99, src: '../assets/products/electronics4.jpg', category: 'Electronics', rating: 1.5, description: 'This is a very good product for your electronics', favorite: false},
        {name: 'Laptop', price: 9.99, src: '../assets/products/electronics5.jpg', category: 'Electronics', rating: 4.5, description: 'This is a very good product for your electronics', favorite: false},

        {name: 'Kitchen ustensils pack', price: 3.99, src: '../assets/products/kitchen1.jpg', category: 'Kitchen', rating: 3.5, description: 'This is a very good product for your kitchen', favorite: false},
        {name: 'Fork', price: 4.99, src: '../assets/products/kitchen2.jpg', category: 'Kitchen', rating: 4.0, description: 'This is a very good product for your kitchen', favorite: false},
        {name: 'Spoon', price: 5.99, src: '../assets/products/kitchen3.jpg', category: 'Kitchen', rating: 3.0, description: 'This is a very good product for your kitchen', favorite: false},
        {name: 'Casserole', price: 6.99, src: '../assets/products/kitchen4.jpg', category: 'Kitchen', rating: 4.5, description: 'This is a very good product for your kitchen', favorite: false},
        {name: 'Knife', price: 7.99, src: '../assets/products/kitchen5.jpg', category: 'Kitchen', rating: 2.5, description: 'This is a very good product for your kitchen', favorite: false},

        {name: 'Pomade', price: 4.99, src: '../assets/products/skincare1.jpg', category: 'Skin Care', rating: 3.0, description: 'This is a very good product for your skin', favorite: false},
        {name: 'Crew Pomade', price: 5.99, src: '../assets/products/skincare2.jpg', category: 'Skin Care', rating: 4.0, description: 'This is a very good product for your skin', favorite: false},
        {name: 'Cerave', price: 6.99, src: '../assets/products/skincare3.jpg', category: 'Skin Care', rating: 3.5, description: 'This is a very good product for your skin', favorite: false},
        {name: 'Clean Clear', price: 7.99, src: '../assets/products/skincare4.jpg', category: 'Skin Care', rating: 4.5, description: 'This is a very good product for your skin', favorite: false}
    ]);


    return (
        <DataContext.Provider value={{selectedTab, setSelectedTab, cart, setCart, availableProducts, setAvailableProducts, currentProduct, 
        setCurrentProduct, selectedCategory, setCategory}}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };