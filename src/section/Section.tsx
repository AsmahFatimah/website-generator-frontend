import type { ReactNode, ForwardedRef  } from 'react'
import { forwardRef } from "react";
interface Props{
    id:string,
    title: string,
    subTitle: string,
    children?: ReactNode,
    className?: string

}
const Section = forwardRef<HTMLDivElement, Props>( ({ id, title, subTitle, children, className }, ref: ForwardedRef<HTMLDivElement>)) => {
  return (
    <section className={`flex flex-col  justify-center items-center p-4 lg:px-36 py-12 min-h-[200px] sm:min-h-[280px] ${className}`} ref={ref} id={id}>
        {title &&  <h3 className="font-bold text-2xl mb-2">{title}</h3>}
   
        {subTitle && <h4 className='text-center max-w-lg'>{subTitle}</h4>
        
        }
        {children}
    </section>
  )
}

export default Section
