import React from 'react';
import Flickity from "react-flickity-component"

const flickityOptions = {
    initialIndex: 2
}
const Swipper = () => {
 
  return(
    <section style={{position: 'relative'}}>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <img src="/images/placeholder.png"/>
        <img src="/images/placeholder.png"/>
        <img src="/images/placeholder.png"/>
      </Flickity> 
    </section>
  )
}

export default Swipper;