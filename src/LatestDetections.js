import React,{useEffect, useState} from 'react';
import PreviousImageText from './PreviousImageText';

const LatestDetections = () =>{
  const [images,setImages] = useState(null);
  useEffect(() =>{
    let res = fetch('http://localhost:3006/latest');
    res.then(resp => resp.json()).then(response =>{
      setImages(response);
    });
  },[]);
return images ? (<div>{images.map(image => <PreviousImageText key={image._id} {...image} />)}</div>) : null;
}

export default LatestDetections;
