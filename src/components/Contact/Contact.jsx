import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-start md:items-center p-4">
            <div className="w-full md:w-1/2">
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4">
                <h2 className="text-2xl font-bold mb-4">Bog'lanish uchun</h2>
                <div className="flex items-start mb-4">
                    <div>
                        <h3 className="font-bold">Manzil</h3>
                        <p>Qashqadaryo viloyati, Qarshi shahri, Shayxali qo'rg'onchasi, 27-uy.</p>
                    </div>
                </div>
                <div className="flex items-start mb-4">
                    <div>
                        <h3 className="font-bold">Ishonch telefoni</h3>
                        <p>75 227 01 25</p>
                    </div>
                </div>
                <div className="flex items-start mb-4">
                    <div>
                        <h3 className="font-bold">Ish kunlari</h3>
                        <p>Dushanba – Juma. Dam olish kunlari: Shanba va yakshanba</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div>
                        <h3 className="font-bold">Ish vaqti</h3>
                        <p>Ish soati: 09:00 dan 20:00 gacha</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Contact