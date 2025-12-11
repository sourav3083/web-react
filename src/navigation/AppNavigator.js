import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "../screens/LoginScreens";
import HomeScreen from "../screens/HomeScreens";
import ProductScreen from "../screens/ProductScreens"; 

export default function AppNavigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/products" element={<ProductScreen />} />
      </Routes>
    </Router>
  );
}
