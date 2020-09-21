import React from 'react';


function CopyrightSection(){
    return <div id="copyrightSection">
    <p>Copyright {new Date().getFullYear()}</p>
  </div>;
}

export default CopyrightSection;