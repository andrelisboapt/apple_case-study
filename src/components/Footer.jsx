import React from 'react'
import logo from '../assets/logo.png';
import socials from "../assets/socials.png"
import payments from "../assets/payments.png"
import trustpilot from "../assets/trustpilot.png"

function Footer() {
  return (
    <div className="footerSection bgLight flex flex-wrap">
        <div className="newsletter rounded w-full sm:w-1/2 lg:w-1/3 flex flex-col sm:flex-row">
            <div className="mt-7 mb-7 ml-7">
                <p className="newsletterTitle">RECEBA AS PROMOÇÕES, NOVIDADES E DIAS PCDIGUIANOS.</p>
                <p className="newsletterContent">Diretamente no seu Email</p>
            </div>
            <div className="relative text-gray-600 mt-7 mb-7 ml-7 newsletterBox">
  <input type="search" name="serch" placeholder="Insira aqui o seu email" className="bg-white h-10 px-5 pr-10 rounded text-sm focus:outline-none newsletterInput"/>
  <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 4 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 newsletterIcon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

  </button>
</div>
        </div>











<footer className="max-w-7xl mx-auto center w-full p-10 bgLight text-base-content ">
    <div className="footer">
  <div>
  <img src={logo} alt="PCDIGA Logo" />
    <p className='description'>PCDIGA Online - Loja de Informática Nº1 em Portugal.</p>
    <img src={socials} alt="PCDIGA Social Media" className="mt-4"/>
  </div> 
  <div className="infoText">
    <span className="footer-title">Informações</span> 
    <a className="link link-hover">Modos de Pagamento</a> 
    <a className="link link-hover">Envio de Encomendas e Portes</a> 
    <a className="link link-hover">Trocas de Devoluções</a> 
    <a className="link link-hover">Garantia e RMAs</a>
    <a className="link link-hover">Termos/Política de Privacidade</a>
    <a className="link link-hover">Blog PCDIGA</a>
    <a className="link link-hover">3x 4x Oney</a>
  </div> 
  <div className="infoText">
  <span className="footer-title"><br/></span> 
    <a className="link link-hover">FAQ's (Perguntas Frequentes)</a> 
    <a className="link link-hover">Resolução de Litígios Online</a> 
    <a className="link link-hover">Seguro Mapfre</a> 
    <a className="link link-hover">Crédito Cetelem</a>
    <a className="link link-hover">Livro de Reclamações</a>
    <a className="link link-hover">Ficha de Atividade de Intermediação de Crédito</a>
  </div> 
  <div className="infoText">
    <span className="footer-title">Loja</span> 
    <a className="link link-hover">Área de Cliente</a> 
    <a className="link link-hover">Promoções</a> 
    <a className="link link-hover">Novos Produtos</a> 
    <a className="link link-hover">Mais Vendidos</a>
  </div> 
  <div className="infoText">
    <span className="footer-title"><br/></span> 
    <a className="link link-hover">PCDIGA</a> 
    <a className="link link-hover">Recrutamento</a> 
    <a className="link link-hover">Empresas</a>
    <a className="link link-hover">Contactos</a>
  </div>
  </div>
</footer>

<div className="paymentSection max-w-6xl w-full">
  <div className="float-left paymentMethods">

<img src={payments} alt="Payment Methods" />

  </div>
  
  <div className="float-right">
<img src={trustpilot} alt="Trustpilot Certificate"/>

  </div>
</div>
















    </div>
  )
}

export default Footer