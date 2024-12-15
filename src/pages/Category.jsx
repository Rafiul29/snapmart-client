import React, { useContext, useEffect } from 'react'
import AllCategory from '../components/category/AllCategory'
import StoreContext from '../context/StoreContext';
import Loading from '../components/ui/Loading';
import Error from '../components/ui/Error';

const Category = () => {
  const { fetchCategories, categories, errorCategories, loadingCategories } =
    useContext(StoreContext);

    useEffect(() => {
      fetchCategories();
    }, []);

    // decide what to the render
    let content = null;

    if (loadingCategories) {
      content = <>
      <Loading />
      <Loading />
      </>;
    } else if (!loadingCategories && errorCategories) {
      content = <Error message={errorCategories} />;
    } else if (!loadingCategories && !errorCategories &&categories?.length === 0) {
      content = <Error message="Category not found" />;
    } else if (!loadingCategories && !errorCategories &&categories?.length > 0) {
      content = <AllCategory categories={categories} />;
    }


  return (
    <>
    {content}
    </>
  )
}

export default Category