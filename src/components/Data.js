import React from "react";
import { useGetAllProductQuery, useGetProductQuery } from "../features/apiSlice";
export default function Data() {
  const { data: allProduct } = useGetAllProductQuery();
  const { data: singelProduct } = useGetProductQuery();
  console.log(allProduct);
  console.log(singelProduct);
  return <div>Data</div>;
}

// import {
//   useGetAllProductsQuery,
//   useGetProductQuery,
// } from "../features/apiSlice";
// export const Data = () => {
//   const {
//     data: allProductsData,
//     error,
//     isError,
//     isLoading,
//   } = useGetAllProductsQuery();
//   const { data: singleProductData } = useGetProductQuery("iphone");

//   console.log(allProductsData);
//   console.log(singleProductData);

//   if (isLoading) return <h1> Loading...</h1>;
//   return <div> Data: </div>;
// };
