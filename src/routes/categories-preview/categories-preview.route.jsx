import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading} from '../../store/categories/categories.selector.js';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component.jsx';
import Spinner from '../../components/Spinner/Spinner.component.jsx';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      { isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return <CategoryPreview key={title} title={title} products={products} />
        })
      )}
    </Fragment> 
  )
}

export default CategoriesPreview;