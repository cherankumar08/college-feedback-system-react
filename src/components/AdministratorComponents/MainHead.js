import React from 'react'
import "../../sass/index.scss";


const MainHead = (props) => {
  return (
    <div>
      <div class="handle-box px-5 container-fluid justify-content-center mt-5">
        <h3 class="card-text text-center">{props.topic}</h3>
      </div>
    </div>
  );
}

export default MainHead;





