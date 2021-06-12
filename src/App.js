import React from "react"
import PropTypes from "prop-types"

const foodILike = [
  {
    id: 0,
    name: "Kimchi",
    image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4
  },
  {
    id: 1,
    name: "Samgyeopsal",
    image:
    "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.4
  },
  {
    id: 2,
    name: "Bibimbap",
    image:
    "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.6
  },
  {
    id: 3,
    name: "Doncasu",
    image:
    "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 3.9
  },
  {
    id: 4,
    name: "Kimbap",
    image:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 5
  }
]

function Food({ name, image, rating }) {
  // console.log(props) // name 대신 props가 들어가도 됨 (props는 obj 형태)
  return <div>
    {/* <h3>I want Potato</h3> */}
    <h3>I want { name }</h3>
    <h5>{ rating }/5.0</h5>
    <img src={ image } alt={`${name}_image`}></img>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      {foodILike.map(food=><Food key={food.id} name={food.name} image={food.image} rating={food.rating} />)}
    </div>
  );
}

export default App;
