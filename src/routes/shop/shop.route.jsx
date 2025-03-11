import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCategoriesStartAsync } from '../../store/categories/categories.action.js';

import CategoriesPreview from '../categories-preview/categories-preview.route.jsx';
import Category from '../category/category.route.jsx';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);

  return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
  )
}

export default Shop; 