import React from 'react';
import {Spinner} from 'react-bootstrap'

const Loader = () => {
    return (
      <div style={{minHeight:'80vh'}}>
          <Spinner style={{width:'120px', margin:'auto', display:'block', height:'120px'}} animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
      </div>
    );
};

export default Loader;