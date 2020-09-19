import React from "react";
import { connect } from 'react-redux'
import axios from 'axios'

function Gallery(props) {
  const { photos } = props
  return (
    <div  style={{  minHeight: "88vh" }} className='container mx-auto row'>
      {photos && photos.map(image => <div className='col-12 col-md-6 col-lg-4 mb-4' key={image._id}>
        <img src={`${process.env.BASE_URL}/${image.file}`} alt={image.title}/>
      </div>)}
    </div>
  );
}

Gallery.getInitialProps = async ({ store }) => {
  try {
    const url = `${process.env.BASE_URL}/api/photos`;
    const { data } = await axios.get(url);
    if (data) {
      dispatch({ type: SET_PHOTOS, payload: data.photos });
      const {photos} = data
      return {...photos}
    }
   
  } catch (ex) {
    console.log(ex);
  }
};

const mapState = ({events}) => ({photos: events.photos})

export default connect(mapState, {})(Gallery);
