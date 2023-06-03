import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
// import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
// import "./style.css";


const Products = () => {
  const catId = parseInt(useParams().id);
  // const [maxTime, setMaxTime] = useState(24);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats)

  // const curTime = new Date();
  // const timeMax = 24*60;
  // const curMin = (curTime.getHours() % 24) * 60 + curTime.getMinutes();
  // const [minTimeCaption, set_minTimeCaption] = useState("");
  // const [maxTimeCaption, set_maxTimeCaption] = useState("");
  // const handleTimeChange = (e: ChangeResult) => {
  //   let h = Math.floor(e.minValue / 60);
  //   let m = e.minValue % 60;
  //   let minH = h.toString().padStart(2, "0");
  //   let minM = m.toString().padStart(2, "0");
  //   set_minTimeCaption(minH + ":" + minM);

  //   let hh = Math.floor(e.maxValue / 60);
  //   let mm = e.maxValue % 60;
  //   let maxH = hh.toString().padStart(2, "0");
  //   let maxM = mm.toString().padStart(2, "0");
  //   set_maxTimeCaption(maxH + ":" + maxM);
  // };

  return (
    <div className='max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8 flex flex-col md:flex-row'>
      {error ? (
        "Something went wrong!"
      ) : loading ? (
        "loading"
      ) : (
        <>
          <div className='md:sticky md:top-20 md:h-full mr-5 px-6 w-full md:w-40 md:pr-1'>
            <div className='mb-8 w-1/10'>
              <h2 className='font-medium mb-4 text-base leading-6'>
              {/* Categories */}
              </h2>
              {data?.map((item) => (
                <div className='space-y-2' key={item.id}>
                  <input
                    className='form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded'
                    type='checkbox'
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label
                    className='ml-2 text-sm font-medium text-gray-700'
                    htmlFor={item.id}
                  >
                    {item.attributes.title}
                  </label>
                </div>
              ))}
            </div>
            {/* <div className='mb-8'>
              <h2 className='font-medium mb-4 text-lg leading-6'>Filter by time</h2>
              <div className='flex items-center'>
                <span className='text-sm font-medium text-gray-700 mr-2'>0</span>
                <input
                  className='w-full'
                  type='range'
                  min={0}
                  max={24}
                  onChange={(e) => setMaxTime(e.target.value)}
                />
                <span className='text-sm font-medium text-gray-700 ml-2'>
                  {maxTime}
                </span>
              </div>

              <MultiRangeSlider
                min={0}
                max={timeMax}
                minValue={0}
                maxValue={timeMax}
                step={1}
                subSteps={false}
                minCaption={minTimeCaption}
                maxCaption={maxTimeCaption}
                onInput={handleTimeChange}
                className='text-white h-9 border-0 shadow-0'
                label={false}
                ruler={false}
                style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
                barLeftColor='red'
                barInnerColor='blue'
                barRightColor='green'
                thumbLeftColor='white'
                thumbRightColor='white'
              />
              <div className='flex flex-col justify-center items-center'>
                <div>Range</div>
                <div className="flex w-full justify-between">
                  <div>{minTimeCaption}</div>
                  <div>{maxTimeCaption}</div>
                </div>
              </div>
            
            </div> */}
          </div>
          <div className='flex-1'>
            <img
              className='w-full h-48 md:h-64 object-cover mb-8'
              src='/img/products.jpg'
              alt=''
            />
            <List catId={catId} subCats={selectedSubCats} />
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
