import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
// Recuperiamo la value di category
import { useParams } from 'react-router-dom';

import ScrollingBar from './ScrollingBar/ScrollingBar.component.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.component.jsx';
import Spinner from '../../components/Spinner/Spinner.component.jsx';

import Sneakers from '../../assets/categories-images/Shoes-category.webp';
import Jackets from '../../assets/categories-images/Category-jackets.webp';
import Hats from '../../assets/categories-images/Category-hats.webp';
import Womens from '../../assets/categories-images/Category-woman.webp';
import Mens from '../../assets/categories-images/Category-man.webp';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector.js';
import { CategoryContainer, CategoryTitle, CategoryImage } from './category.styles.jsx';

const categoryImages = {
  sneakers: Sneakers,
  jackets: Jackets,
  hats: Hats,
  womens: Womens,
  mens: Mens
}

// Utilizza useEffect così da renderizzare ogni volta che la category
// o categoriesMap altrimenti renderizza il tutto ogni volta che il
// componente viene renderizzato
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);
  
  useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

  return (
    <Fragment>
      <ScrollingBar />
      <CategoryImage $categoryImage={categoryImages[category]}>
        <CategoryTitle className='category-title'>{category.toUpperCase()}</CategoryTitle>
      </CategoryImage>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <CategoryContainer>
            {products &&
              products.map((product) => <ProductCard key={product.id} product={product} /> )
            }
          </CategoryContainer>
        )
      }
    </Fragment>
  )
}

export default Category;