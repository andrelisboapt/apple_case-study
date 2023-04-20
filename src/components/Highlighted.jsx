import React from 'react'
import highlight1 from "../assets/destaque1.png"
import highlight2 from "../assets/destaque2.png"
import highlight3 from "../assets/destaque3.png"
import highlight4 from "../assets/destaque4.png"
import highlight5 from "../assets/destaque5.png"
import appledays from "../assets/appledays.png"






function Highlighted() {
  return (
    <div>
<div className='headersContainer'>
    <div>
        <p className='subtitles'>Em destaque</p>
    </div>
    <div className='flex mr-2 seeMore'>
        <p className="mr-1 hover:underline">Ver Mais</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>

    </div>

</div>

<div className='highlightSection'>


  <div>
    <p className='promoHeader leading-tight'>APPLE<br/>DAYS</p>
    <div className='radials'>
      <div className='radialsTime'>
    <div className="radial-progress radialAppleDays mr-5" style={{"--value":37, "--thickness": "5px"}}><p>37</p></div>
    <p>horas</p>
    </div>
    <div className='radialsTime'>
    <div className="radial-progress radialAppleDays" style={{"--value":5, "--thickness": "5px"}}><p>05</p></div>
    <p>minutos</p>
    </div>
    <div className='radialsTime'>
    <div className="radial-progress radialAppleDays" style={{"--value":42, "--thickness": "5px"}}><p>42</p></div>
    <p>segundos</p>
    </div>
    </div>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-none btnAppleDays">VER PRODUTOS</button>
   <figure><img src={appledays} alt="Apple Days Promotion" className='appledays' /></figure> 

   </div>




<div className="carousel carousel-center p-1 space-x-1">




  <div className="card card-compact cardProducts ml-2 bgLight rounded-none">
   <figure><img src={highlight1} alt="Apple iPad Pro (M2)" className='hover:opacity-90 promoItem'/></figure> 
  <div className="carousel-item carouselHighlight">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Apple iPad Pro (M2) 12.9" Wi-Fi + Cellular 256GB Prateado
</p>
    <p className="productDescription leading-tight mb-2">Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Retire-os da caixa e estão prontos a usar.</p>
    <p className="productID leading-tight mb-2">MV7N2TY/A</p>
    <div className='stockAvailability'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

<p className='leading-tight'><b>Em Stock</b></p>

</div>
<p className="ml-6 deliveryDate leading-tight mb-2">Entrega prevista a partir de 17 JAN</p>

<p className="price leading-tight mb-2">169,00€</p>

<div className="actionBtn">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<p className='actionText mr-2'>Wishlist</p>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
</svg>
<p className='actionText'>Comparar</p>


</div>


  </div>
</div>

  </div> 
  
    


  <div className="card card-compact cardProducts ml-2 bgLight rounded-none">
   <figure><img src={highlight2} alt="Apple iPad Pro (M2)" className='hover:opacity-90 promoItem'/></figure> 
  <div className="carousel-item carouselHighlight">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Capa Apple Smart Folio iPad Pro 11" (1ª, 2ª, 3ª e 4ª Geração) Preta

</p>
    <p className="productDescription leading-tight mb-2">Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Retire-os da caixa e estão prontos a usar.</p>
    <p className="productID leading-tight mb-2">MV7N2TY/A</p>
    <div className='stockAvailability'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

<p className='leading-tight'><b>Em Stock</b></p>

</div>
<p className="ml-6 deliveryDate leading-tight mb-2">Entrega prevista a partir de 17 JAN</p>

<p className="price leading-tight mb-2">169,00€</p>

<div className="actionBtn">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<p className='actionText mr-2'>Wishlist</p>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
</svg>
<p className='actionText'>Comparar</p>


</div>


  </div>

</div>





    
  </div> 
  <div className="card card-compact cardProducts ml-2 bgLight rounded-none">
   <figure><img src={highlight3} alt="Apple iPad Pro (M2)" className='hover:opacity-90 promoItem'/></figure> 
  <div className="carousel-item carouselHighlight">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Capa Teclado Apple Magic Keyboard iPad Pro 12.9" (3ª, 4ª, 5ª e 6ª Geração) 

</p>
    <p className="productDescription leading-tight mb-2">Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Retire-os da caixa e estão prontos a usar.</p>
    <p className="productID leading-tight mb-2">MV7N2TY/A</p>
    <div className='stockAvailability'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

<p className='leading-tight'><b>Em Stock</b></p>

</div>
<p className="ml-6 deliveryDate leading-tight mb-2">Entrega prevista a partir de 17 JAN</p>

<p className="price leading-tight mb-2">169,00€</p>

<div className="actionBtn">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<p className='actionText mr-2'>Wishlist</p>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
</svg>
<p className='actionText'>Comparar</p>


</div>


  </div>

</div>





    
  </div> 
  <div className="card card-compact cardProducts ml-2 bgLight rounded-none">
   <figure><img src={highlight4} alt="Apple iPad Pro (M2)" className='hover:opacity-90 promoItem'/></figure> 
  <div className="carousel-item carouselHighlight">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Apple AirPods Pro (2ª Geração) Wireless Brancos com Caixa ....

</p>
    <p className="productDescription leading-tight mb-2">Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Retire-os da caixa e estão prontos a usar.</p>
    <p className="productID leading-tight mb-2">MV7N2TY/A</p>
    <div className='stockAvailability'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

<p className='leading-tight'><b>Em Stock</b></p>

</div>
<p className="ml-6 deliveryDate leading-tight mb-2">Entrega prevista a partir de 17 JAN</p>

<p className="price leading-tight mb-2">169,00€</p>

<div className="actionBtn">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<p className='actionText mr-2'>Wishlist</p>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
</svg>
<p className='actionText'>Comparar</p>


</div>


  </div>

</div>





    
  </div> 
  <div className="card card-compact cardProducts ml-2 bgLight rounded-none" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 0%, 50% 100%, 0 100%)' }}>
   <figure><img src={highlight5} alt="Apple iPad Pro (M2)" className='hover:opacity-90 promoItem'/></figure> 
  <div className="carousel-item carouselHighlight">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Apple iPad Pro (M2) 12.9" Wi-Fi + Cellular 256GB Prateado


</p>
    <p className="productDescription leading-tight mb-2">Os novos AirPods recriam a experiência auditiva dos auscultadores sem fios. Retire-os da caixa e estão prontos a usar.</p>
    <p className="productID leading-tight mb-2">MV7N2TY/A</p>
    <div className='stockAvailability'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

<p className='leading-tight'><b>Em Stock</b></p>

</div>
<p className="ml-6 deliveryDate leading-tight mb-2">Entrega prevista a partir de 17 JAN</p>

<p className="price leading-tight mb-2">169,00€</p>

<div className="actionBtn">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<p className='actionText mr-2'>Wishlist</p>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
</svg>
<p className='actionText'>Comparar</p>


</div>


  </div>

</div>





    
  </div> 


  












  
</div>

</div>



    </div>
  )
}

export default Highlighted