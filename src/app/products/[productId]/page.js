const DynamicProductPage = ({ params, searchParams }) => {
  return <div>Dynamic product page / {params.productId} / {searchParams.category}</div>;
};

export default DynamicProductPage;
