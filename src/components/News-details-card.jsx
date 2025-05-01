import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
const NewsDetailsCard = ({ news }) => {
  console.log(news);
  const navigate = useNavigate();
  return (
    <div className="space-y-5 p-3 border border-base-300">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt="error image"
      />
      <h2 className="text-2xl font-bold text-accent">{news.title}</h2>
      <p className="text-gray-500">{news.details}</p>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        <FaArrowLeft /> All news in this category
      </button>
    </div>
  );
};

export default NewsDetailsCard;
