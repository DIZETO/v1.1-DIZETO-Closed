import React from "react";
import ImageFallback from "../../../ImageFallback";

export default function Image() {
  const photos = [
    "DZT_CC77.jpg",
    "DZT_CC6.jpg",
    "DZT_CC83.jpg",
    "DZT_CC86.jpg",
    "DZT_CC44.jpg",
    "DZT_CC36.jpg",
    "DZT_CC74.jpg",
    "DZT_CC71.jpg",
    "DZT_CC93.jpg",
    "DZT_CC88.jpg",
    "DZT_CC89.jpg",
    "DZT_CC39.jpg",
  ];

  return (
    <div className="container mx-auto px-5">
      <ul className="columns-2 gap-4 lg:columns-3">
        {photos.map((photo, index) => (
          <li id="imgborder" key={index} className="mb-4 rounded-sm border-2 border-gray-100 hover:border-red-600 dark:border-gray-700 dark:hover:border-red-600">
            <div className="p-1">
              <a href={require(`../../../../assets/uploads/dashboard/f1/${photo}`)} data-lightbox="dashboart" data-title="&copy; Copyright 2022 - DIZETO">
                <ImageFallback className="rounded-sm" src={require(`../../../../assets/uploads/dashboard/f1/thumbnail/${photo}`)} alt={photo} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
