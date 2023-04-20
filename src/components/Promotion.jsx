import React from 'react'
import promo1 from "../assets/promoiphone.png"
import promo2 from "../assets/promomacbook.png"
import promo3 from "../assets/promowatch.png"
import promo4 from "../assets/promoipad.png"
import promo5 from "../assets/promocharger.png"
import promo6 from "../assets/promokeyboard.png"






function Promotion() {
  return (
    <div>
        <div className='headersContainer'>
            <div>
                <p className='subtitles'>Promoções</p>
            </div>
            <div className='flex mr-2 seeMore'>
                <p className="mr-1 hover:underline">Ver Mais</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>

            </div>
        
</div>





            <div className='highlightSection'>

<div className="carousel carousel-center p-1 space-x-1">




  <div className="card card-compact cardProducts bgLight rounded-none hover:opacity-90" >
   <figure><p className='absolute discount rounded'>-10€</p><img src={promo1} alt="Apple iPad Pro (M2)" className=' promoItem'/></figure> 
  <div className="carousel-item carouselPromo">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Smartphone Apple iPhone 11 6.1" 64GB Preto


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
<div className="flex">
<p className="price leading-tight mb-2">169,00€</p>
<div>
<p className="pvpr leading-tight">PVPR</p>
<p className="noDiscount leading-tight">179,00€</p>
</div>
</div>
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
  
  <div className="card card-compact cardProducts ml-2 bgLight rounded-none hover:opacity-90">
   <figure><p className='absolute discount rounded'>-150€</p><img src={promo2} alt="Apple iPad Pro (M2)" className='promoItem'/></figure> 
  <div className="carousel-item carouselPromo">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Apple MacBook Pro 14.2" | M1 Pro CPU 10‑core, GPU 16‑core ...

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

<div className="flex">
<p className="price leading-tight mb-2">169,00€</p>
<div>
<p className="pvpr leading-tight">PVPR</p>
<p className="noDiscount leading-tight">179,00€</p>
</div>
</div>

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
  
    


  <div className="card card-compact cardProducts ml-2 bgLight rounded-none hover:opacity-90">
   <figure><p className='absolute discount rounded discountWatch'>-20€</p><img src={promo3} alt="Apple iPad Pro (M2)" className='promoItem'/></figure> 
  <div className="carousel-item carouselPromo">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Apple Watch Ultra GPS+Cellular 49mm Titânio c/ Bracelete ...

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

<div className="flex">
<p className="price leading-tight mb-2">169,00€</p>
<div>
<p className="pvpr leading-tight">PVPR</p>
<p className="noDiscount leading-tight">179,00€</p>
</div>
</div>

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
  <div className="card card-compact cardProducts ml-2 bgLight rounded-none hover:opacity-90">
   <figure><p className='absolute discount rounded discountWatch top-8'>-40€</p><img src={promo4} alt="Apple iPad Pro (M2)" className='promoItem'/></figure> 
  <div className="carousel-item carouselPromo">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Apple iPad Air (5ª Geração) M1 10.9" Wi-Fi 256GB Cinzento Sideral


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

<div className="flex">
<p className="price leading-tight mb-2">169,00€</p>
<div>
<p className="pvpr leading-tight">PVPR</p>
<p className="noDiscount leading-tight">179,00€</p>
</div>
</div>

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
  <div className="card card-compact cardProducts ml-2 bgLight rounded-none hover:opacity-90">
   <figure><p className='absolute discount rounded discountWatch'>-5€</p><img src={promo5} alt="Apple iPad Pro (M2)" className='promoItem'/></figure> 
  <div className="carousel-item carouselPromo">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Adaptador de corrente Apple USB-C de 20W


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

<div className="flex">
<p className="price leading-tight mb-2">169,00€</p>
<div>
<p className="pvpr leading-tight">PVPR</p>
<p className="noDiscount leading-tight">179,00€</p>
</div>
</div>

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
  <div className="card card-compact cardProducts ml-2 bgLight rounded-none hover:opacity-90" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 0%, 50% 100%, 0 100%)' }}>
   <figure><img src={promo6} alt="Apple iPad Pro (M2)" className='promoItem'/></figure> 
  <div className="carousel-item carouselPromo">

  <div className="card-body cardBodyItem">
    <p className="productName leading-tight mb-1" >Teclado Apple Magic Keyboard Touch ID para Mac com Processador


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

<div className="flex">
<p className="price leading-tight mb-2">169,00€</p>
<div>
<p className="pvpr leading-tight">PVPR</p>
<p className="noDiscount leading-tight">179,00€</p>
</div>
</div>

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

export default Promotion