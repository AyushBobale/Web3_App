import "./PaginationNavigator.css";
import "swiper/css";
import "swiper/css/navigation";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Navigation } from "swiper";

export const PaginationNavigator = ({
  total,
  pagePerView,
  activePage,
  setPage,
}) => {
  const [btns, setBtns] = useState([0, 1, 2, 3]);
  const paginationArray = [...Array(total).keys()];
  const paginationSlides = paginationArray.reduce(
    (resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 3);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    },
    []
  );
  useEffect(() => {}, [total, activePage, pagePerView]);
  return (
    <div className="pagination-root">
      <button className="prevpage">{"<"}</button>
      <div className="swiper-main-cont">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prevpage",
            nextEl: ".nextpage",
          }}
          modules={[Navigation]}
        >
          {paginationSlides.map((data) => {
            return (
              <SwiperSlide key={data[0]}>
                <div className="my-swiper-slide">
                  {data.map((pg) => (
                    <button
                      key={pg}
                      id={pg == activePage ? "active" : "inactive"}
                      onClick={() => {
                        setPage(pg);
                      }}
                    >
                      {pg + 1}
                    </button>
                  ))}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <button className="nextpage">{">"}</button>
    </div>
  );
};
