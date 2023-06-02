import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );

  return (
    <div className='flex flex-wrap justify-center sm:justify-between'>
      {error
        ? "Something went wrong!"
        : loading
        ? "loading"
        : data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
    </div>
  );
};

export default List;
