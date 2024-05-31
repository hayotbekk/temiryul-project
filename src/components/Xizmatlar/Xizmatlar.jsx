import React from 'react'

const Xizmatlar = () => {
  return (
    <div>
        <div className="max-w-7xl mx-auto p-4">
          <div className="text-center mb-8">
            <h2 className="text-[#FD972E] text-[1.5rem] h2 mb-4">Xizmatlari, Vazifalari</h2>
            <p className="text-xl text-gray-600">Bizning xizmatlarimiz va vazifalarimiz bilan tanishishingiz mumkin</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-3">Korxonaning asosiy ish faoliyati:</h3>
              <p className="text-lg text-gray-600">
                Qashqadaryo temir yo‘l ta’mirlash korxonasi Qarshi Mintaqaviy temir yo‘l uzeli shu’ba korxonasining tarkibiy bo‘linmasi hisoblanadi va o‘z xo‘jalik faoliyati natijalari uchun, o‘zaro tuzilgan shartnomalar asosida olingan majburiyatlar bo‘yicha iste’molchilar oldida, davlat budjeti, bank, korxona jamoasi oldida qonunchilikka asosan mustaqil ravishda to‘liqligicha javobgardir.
              </p>
              <div className="space-y-4">
                <a href="#">
                    
                </a>
                <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md cursor-pointer" onClick="changeImage('https://placehold.co/600x400')">
                  <p className="text-zinc-700 dark:text-zinc-300">Poyezdlar harakat havfsizligini ta’minlash harakat havfsizligi buzilishi hollari oldini olish, bu ishda halokatlar, nuqsonlar va nosozliklarga yo‘l qo‘ymaslik choralari ko‘rish</p>
                </div>
                <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md cursor-pointer" onClick="changeImage('https://placehold.co/600x400')">
                  <p className="text-zinc-700 dark:text-zinc-300">Ishlab chiqarish samaradorligini va rentabelligini oshirish, yog‘liq moylash mahsulotlari, elektr energiyasi va boshqa materiallardan tejamloklik bilan foydalanish choralari ko‘rish</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">

            </div>
          </div>
        </div>
        {/* <script>
          function changeImage(src) {
            document.getElementById('mainImage').src = src
          }
        </script> */}
    
    </div>
  )
}



export default Xizmatlar