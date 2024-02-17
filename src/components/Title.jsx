import React from 'react'

const Title = ({isMenuOpen}) => {
  return (
    <div>
      <a href="/">
         <div class="mobile-logo tracking-widest flex flex-col justify-center items-center -mt-6 font-libre md:mx-4 lg:mx-10 xl:mx-32">
            <p className={`text-${isMenuOpen ? "white" : "black"} text-3xl font-semibold`}>24 CARROTS</p>
            <p className={`text-neutral-400 text-sm font-semibold`}>CATERING AND EVENTS</p>
            </div>
      </a>
    </div>
  )
}

export default Title
