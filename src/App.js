import React from "react";
import PropTypes from "prop-types";

//   return <h1>Hi {props.fav}</h1>;
// }

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2> This is {name} </h2>
      <h4> {rating}/5.0 </h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// Props 정합성 체크
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

// Food의 object 배열
const foodILike = [
  {
    id: 1,
    name: "Image 1",
    image:
      "https://cdn.pixabay.com/photo/2020/04/13/13/25/water-5038379_960_720.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Image 2",
    image:
      "https://cdn.pixabay.com/photo/2020/04/09/11/42/dogs-5021085_960_720.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Image 3",
    image:
      "https://cdn.pixabay.com/photo/2020/04/01/22/14/lover-4992877_960_720.png",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Image 4",
    image:
      "https://cdn.pixabay.com/photo/2020/03/10/16/47/moon-4919501_960_720.jpg",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Image 5",
    image:
      "https://cdn.pixabay.com/photo/2020/04/06/11/22/seedling-5009286_960_720.jpg",
    rating: 5.3,
  },
];

function App() {
  return (
    // 모든 component(function component, food component) 들을 동적으로(Dynamic) rendering 한다. (js object의 lsit를 가지고 온다.)
    // map은 function을 취한 후 그 function을 array의 각 itmem에 적용해준다.
    // dish는 object 이다.
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
