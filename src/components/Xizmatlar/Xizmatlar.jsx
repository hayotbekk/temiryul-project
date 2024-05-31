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
                        <p className="text-lg text-gray-600 mb-8">
                            Qashqadaryo temir yo‘l ta’mirlash korxonasi Qarshi Mintaqaviy temir yo‘l uzeli shu’ba korxonasining tarkibiy bo‘linmasi hisoblanadi va o‘z xo‘jalik faoliyati natijalari uchun, o‘zaro tuzilgan shartnomalar asosida olingan majburiyatlar bo‘yicha iste’molchilar oldida, davlat budjeti, bank, korxona jamoasi oldida qonunchilikka asosan mustaqil ravishda to‘liqligicha javobgardir.
                        </p>
                        <div className="space-y-4">
                            <a href="#" className='flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg'>
                                <div className='text-gray-600'>
                                    O‘ziga biriktirilgan temir yo‘llarning texnik sozligini va ulardan samarali foydalanishni ta’minlash.
                                </div>
                            </a>
                            <a href="#" className='flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3  bg-white border-gray-200 hover:shadow-lg'>
                                <div className='text-gray-600'>
                                    Poyezdlar harakat havfsizligini ta’minlash harakat havfsizligi buzilishi hollari oldini olish, bu ishda halokatlar, nuqsonlar va nosozliklarga yo‘l qo‘ymaslik choralarini ko‘rish
                                </div>
                            </a>
                            <a href="#" className='flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3  bg-white border-gray-200 hover:shadow-lg'>
                                <div className='text-gray-600'>
                                    Poyezdlar harakat havfsizligini ta’minlash harakat havfsizligi buzilishi hollari oldini olish, bu ishda halokatlar, nuqsonlar va nosozliklarga yo‘l qo‘ymaslik choralarini ko‘rish
                                </div>
                            </a>
                            
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