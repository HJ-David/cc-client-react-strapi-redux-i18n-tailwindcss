import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";


const Material = () => {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/materials/${id}?populate=*`);


  return (
    <div className='max-w-[1240px] mx-auto flex flex-col md:flex md:flex-row px-10 py-20 justify-evenly'>
      {loading ? (
        "loading"
      ) : (
        <>
          <div className='flex flex-col mx-5 px-10 md:w-1/2 w-full'>
            <div>
              <h1 className='text-lg font-bold mb-5'>
                {data?.attributes?.title}
              </h1>
              <p className='mb-5'>Level: {data?.attributes?.level}</p>
              <p className='mb-5'>Grade: {data?.attributes?.grade}</p>
              <p className='mb-5'>
                Reader Level: {data?.attributes?.readerlevel}
              </p>
              <p className='mb-5'>GRL: {data?.attributes?.grl}</p>
              <p className='mb-5'>Genre: {data?.attributes?.genre}</p>
            </div>

            <div className='mb-5 flex'>
              <p className='mb-5'>
                {/* <img
                  className=' h-150 object-cover cursor-pointer mb-5'
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=''
                  onClick={(e) => setSelectedImg("img")}
                /> */}
                <div className='viewer'>
                  <iframe
                    src='https://file.notion.so/f/s/ad94accd-8cef-4cc3-ba84-fbb8a03fb0e6/J-GK-bl-7_A_Walk_in_the_Woods_WB.pdf?id=d0bae3e8-7470-4ef0-8ca8-e34a2f3d37dd&table=block&spaceId=4f826b7c-035c-4ea4-bb70-3ef2e46b6044&expirationTimestamp=1685499890405&signature=snBWVs41jKIxpu0lN1PgQqUt0yQSdAJ186pHaNRzofY&downloadName=J-GK-bl-7+A+Walk+in+the+Woods_WB.pdf'
                    width='100%'
                    height='500px'
                    title='PDF View'
                  ></iframe>
                </div>
              </p>
            </div>
            <div className='flex'>B</div>

            <div className='info'>
              <span>C</span>
              <span>D</span>
              <span>E</span>
            </div>

            <hr />
            <div className='info'>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Material;
