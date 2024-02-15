import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { closeSearch } from "../utils/searchSlice";
import ProductInfo from "./ProductInfo";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);

  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(closeSearch());
    getData();
  }, [productId]);

  const getData = async () => {
    const data = await fetch(`https://dummyjson.com/products/${productId}`);
    const json = await data.json();
    setProductDetail(json);
  };
  if (!productDetail) return null;
  const { images } = productDetail;

  return (
    <div className="md:max-w-5xl w-full p-5 shadow-xl rounded-lg mx-auto mt-36 md:h-[500px] flex flex-col max-md:gap-5 md:flex-row justify-center">
      <div className="md:w-3/5 max-md:h-[400px] flex flex-col justify-between ">
        <div className="h-3/4">
          <img
            src={images[currIndex]}
            alt="products"
            className="h-full w-full p-5 object-contain "
          />
        </div>
        <div className="flex justify-around w-full">
          {images.map((image, index) => (
            <div
              onClick={() => setCurrIndex(index)}
              key={index}
              className={`${
                currIndex === index ? "opacity-100 scale-125" : "opacity-50"
              } max-h-24 max-w-28 border p-1 cursor-pointer duration-500`}
            >
              <img src={image} alt="diff" className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
      <ProductInfo productDetail={productDetail} />
    </div>
  );
};
export default ProductDetail;
