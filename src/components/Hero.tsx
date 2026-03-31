import { useSiteDetails } from '../context/SiteContext'
import { useState } from 'react'

interface Props{
  customScroll: () => void;
}
const Hero = ({ customScroll } :Props) => {
    const { Business: business, imgs } = useSiteDetails() || {}
    const [ imgError, setImgError ] = useState(false)
    const hasLogo = imgs?.logo && imgs.logo !== "";
  return (
    <>
     <header className=" inset-x-0 h-20">
        <nav aria-label="Global" className="flex items-start justify-start p-6 lg:px-8">
          
              {hasLogo && !imgError ? (
                    <img
                      src={imgs.logo}
                      className="max-w-2/3 h-10"
                      alt={`${business?.Name}'s logo`}
                      onError={() => setImgError(true)}
                    />
                  ) : (
                <span className="text-heading self-center text-2xl font-medium whitespace-nowrap ml-1 capitalize">{business?.Name}</span>

                    )
          }
       
            </nav>
            </header>
      <div className ="min-h-[60vh]">
       <div className="flex justify-center items-center flex-col  ">
            
      <h1 className='text-(--primary-color) uppercase font-bold text-3xl'>
        {business?.Tagline ||business?.Name} 
      </h1>
      <h2 className="text-(--secondary-color) capitalize font-semibold p-2">
        {business?.Description}
      </h2>
      <button className='btn p-3 rounded-md' onClick={customScroll}>Reach out to us.</button>
      </div>
      </div>
      
    </>
  )
  
}

export default Hero
