import React from 'react'
import article1 from "../assets/article1.png"
import article2 from "../assets/article2.png"
import article3 from "../assets/article3.png"

function Articles() {
  return (
    <div className="articlesSection">





<div className="relative card articleCard h-64 rounded-lg overflow-hidden hover:mt-10 hover:opacity-90 mr-5">
  <img src={article1} className="absolute w-full bottom-0"/>
  <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-40 rounded-lg ">
  </div>
  <div >
    <p className="absolute text-white articleContent"><b>Comprar Iphone 14 na PCDiga</b><br/>
Preços, Especificações e Disponibilidade
</p>
    </div>
</div>
<div className="relative card articleCard h-64 rounded-lg overflow-hidden hover:mt-10 hover:opacity-90 mr-5">
  <img src={article2} className="absolute w-full bottom-0"/>
  <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-40 rounded-lg ">
  </div>
  <div >
    <p className="absolute text-white articleContent"><b>Apple apresenta a potente Apple TV 4K de<br/> próxima geração
</b>

</p>
    </div>
</div>
<div className="relative card articleCard h-64 rounded-lg overflow-hidden hover:mt-10 hover:opacity-90">
  <img src={article3} className="absolute w-full bottom-0"/>
  <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-40 rounded-lg ">
  </div>
  <div >
    <p className="absolute text-white articleContent"><b>O Headset da Apple poderá ser lançado<br/> 
em Janeiro
</b>

</p>
    </div>
</div>






    </div>
    






  )
}

export default Articles