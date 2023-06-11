import React from "react";
import { IProduct } from "../../lib/types/products";
import Breadcrumb from "../UI/Breadcrumb";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import Benefits from "../Benefits";
import SimilarProducts from "./SimilarProducts";
import Image from "next/image";
import { urlFor } from "../../lib/client";

interface Props {
  product: IProduct;
  products: IProduct[];
}
const ProductDetails: React.FC<Props> = ({ product, products }) => {
  const similarProductsList = products
    .filter(
      (similarProduct) => similarProduct.slug.current !== product.slug.current
    )
    .slice(0, 10);

  return (
    <div className="flex flex-col">
      <Breadcrumb />
      <div className="w-full xl:max-w-[2100px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
          {product.image.length > 1 ? (
          <ImageSection imgArray={product.image} product={product} />
          ) : (
            <div
            
            className={`flex items-center justify-center p-2 md:p-4 rounded-lg  border-none transition-all duration-300 ease-in-out min-w-[80px] border-2 border-slate-300/60 shadow-md bg-palette-card/60 `}
                

          >
            <Image
              src={urlFor(product.image[0]).url()}
              width={500}
              height={400}
              alt="product img"
              className="object-contain"
            />
          </div>
          )}
          <DetailsSection product={product} />
        </div>
        <div className="border-2 my-8">
          <Benefits />
        </div>
        <SimilarProducts products={similarProductsList} />
      </div>
    </div>
  );
};

export default ProductDetails;
