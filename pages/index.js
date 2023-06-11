import { useEffect } from "react";
import dynamic from "next/dynamic";


import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "../store/specialOfferProducts-slice";
import { newestProductsActions } from "../store/newestProduct-slice";

import { client } from "../lib/client";

import Benefits from "../components/Benefits";
import Carousel from "../components/carousel";
const Offers = dynamic(() => import("../components/Offers/Offers"));
const Category = dynamic(() => import("../components/category/Category"));
const Newest = dynamic(() => import("../components/newest/Newest"));
const Banners = dynamic(() => import("../components/banners"), { ssr: true });

import { newestProductsFn } from "../utilities/sortByTimeStamp";

const Home = ({ products, }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //add products to offers list
    const offersProducts = products.filter((item) => item.discount);
    dispatch(specialOfferProductsActions.addProducts(offersProducts));

    //add products to newest list
    const sortedProductsByTimeStamp = newestProductsFn(products);
    dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
  }, [dispatch, products]);

  return (
    <div>
      <Carousel />
      <Benefits />
      <Offers />
      <Category />
      <Newest />
     
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {


  const productQuery = `*[_type=='product']`;
  const products = await client.fetch(productQuery);

  return {
    props: {

      products,
    },
  };
};
