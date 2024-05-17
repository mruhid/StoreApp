import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CategotiesProducts from "../components/CategoriesProducts";
import COLLECTION from "../components/COLLECTION";
import Product from "../components/Product";
import SlideBar from "../components/SlideBar";

function Home({ data }) {
  document.title = 'Online Store';
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const fetchURL = 'https://api.escuelajs.co/api/v1/categories';

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((categoriesData) => {
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <>
      {!loading ? (
        <main>
          <section className="Categories">
            <CategotiesProducts categories={categories} />
          </section>

          <COLLECTION />

          <section className="newProducts">
            <h1 className="tag">New Products</h1>
            <SlideBar slidesPerView={3} data={data.slice(5)} />
          </section>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.products || [] // Ensure 'data' is always an array
});

export default connect(mapStateToProps)(Home);
