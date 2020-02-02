import React from 'react';

const PreviousImageText = (props) =>{
return <div>{props && <img src={'http://localhost:3006/image/'+props._id} alt='missing'/>}{props && <p>{props.detectedText}</p>}</div>
}

export default PreviousImageText;