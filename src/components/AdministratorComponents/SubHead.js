import React from 'react'
import '../../sass/index.scss'

const SubHead = (props) => {
  return (
    <div>
      <div class="handle-box px-5 container-fluid justify-content-center mt-3">
        <p class="card-text text-center">{props.SubHead}</p>
      </div>
    </div>
  );
};

export default SubHead