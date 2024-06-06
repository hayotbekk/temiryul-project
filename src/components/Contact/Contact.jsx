import React, { useEffect } from 'react'

const Contact = () => {


    return (
        <>
            <h2 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-16 !text-3xl lg:!text-5xl text-center">Bog'lanish uchun</h2>

            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start container mx-auto text-center">


                <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-16">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48892.587101154286!2d65.771789!3d38.862095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4b3f7dbbbb12c7%3A0x8d50d7b5bd76b1f6!2sQarshi%20mintaqaviy%20temir%20yo'l%20uzeli%20unitar!5e0!3m2!1suz!2s!4v1622444497927!5m2!1suz!2s"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full  border-0"
                    ></iframe>
                </div>
                <div className="text-start">
                    <div>
                        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">Manzil</h4>
                        <h6 class="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit opacity-70 font-medium mb-5">Qashqadaryo viloyati, Qarshi shahri, Shayxali qo‘rg‘onchasi, 27-uy.</h6>
                        <h3 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">Ishonch telefoni</h3>
                        <p className='block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit opacity-70 font-medium mb-5'>75 227 01 25</p>
                        <h3 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">Ish kunlari</h3>
                        <p className='block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit opacity-70 font-medium mb-5'>Dushanba – Juma. Dam olish kunlari: Shanba va yakshanba</p>
                        <h3 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">Ish vaqti</h3>
                        <p className='block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit opacity-70 font-medium mb-5'>Ish soati: 09:00 dan 20:00 gacha</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Contact