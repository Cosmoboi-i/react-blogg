import React, { useEffect, useState } from "react";
import "./card.css";
import PropTypes from "prop-types";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_BLOG_DATA } from "../../constants/apiEndPoints";
import { MONTHS } from "../../constants/months";

const svgPath = "./assets/Icons/";

export default function Card(props) {
  const [liked, setLiked] = useState(props.liked);
  const [claps, setClaps] = useState(props.claps);

  const dateObj = new Date(props.date);
  const date =
    dateObj.getDate() +
    " " +
    MONTHS[dateObj.getMonth()] +
    "," +
    " " +
    dateObj.getFullYear();

  //console.log(date);

  useEffect(() => {
    (async function fetchData() {
      const data = { claps, liked };
      await makeRequest(UPDATE_BLOG_DATA(props.id), { data });
      //console.log(res);
    })();
  });

  return (
    <div className="card" data>
      <img src={props.image} className="image" />
      <div className="card-content">
        <div className="date-time">
          <div>{date}</div>
          <div>{props.reading_time}</div>
        </div>
        <div className="card-text">
          <div className="card-heading">{props.title}</div>
          <div className="card-desc">{props.description}</div>
        </div>
        <hr className="hr" />
        <div className="card-reaction">
          <div className="clap" data-testid="clap">
            <img
              src={svgPath + "clapping.svg"}
              alt="clap"
              onClick={() => setClaps(claps + 1)}
            />
            <span data-testid="clap-count">{claps}</span>
          </div>
          <img
            src={svgPath + (liked ? "heart-red.svg" : "heart-black.svg")}
            alt="heart"
            className="card-heart"
            onClick={() => setLiked(!liked)}
          />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  reading_time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  claps: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
};
