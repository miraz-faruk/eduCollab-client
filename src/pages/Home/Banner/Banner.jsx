import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    useEffect(() => {
        // Attach Swiper navigation buttons manually
        const swiper = document.querySelector('.swiper').swiper;
        swiper.params.navigation.prevEl = '.custom-prev';
        swiper.params.navigation.nextEl = '.custom-next';
        swiper.navigation.init();
        swiper.navigation.update();
    }, []);

    return (
        <div className="relative max-h-screen overflow-hidden">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='object-cover w-full h-full' src="https://i.ibb.co.com/smHGrGz/pexels-panditwiguna-3401403.jpg" />
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent'></div>
                        <div className='absolute top-1/2 left-20 transform text-center text-white text-4xl font-bold'>
                            <p>Unlock Your Learning Potential</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='object-cover w-full h-full' src="https://i.ibb.co.com/mS1D98C/pexels-max-fischer-5212687.jpg" />
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent'></div>
                        <div className='absolute top-1/2 left-20 transform text-center text-white text-4xl font-bold'>
                            <p>Your Words Shape the Future</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='object-cover w-full h-full' src="https://i.ibb.co.com/wgxSF4h/pexels-ivan-samkov-8117534.jpg" />
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent'></div>
                        <div className='absolute top-1/2 left-20 transform text-center text-white text-4xl font-bold'>
                            <p>Find the Answers Within</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='object-cover w-full h-full' src="https://i.ibb.co.com/fQVDM9y/pexels-rdne-7821540.jpg" />
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent'></div>
                        <div className='absolute top-1/2 left-20 transform text-center text-white text-4xl font-bold'>
                            <p>Precision in Every Grade</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Buttons */}
            <div className="custom-prev absolute right-32 bottom-5 -translate-y-1/2 z-10 cursor-pointer">
                <button className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg backdrop-blur bg-white/10 text-white hover:bg-teal-400 text-2xl">
                    ❮
                </button>
            </div>
            <div className="custom-next absolute right-16 bottom-5 -translate-y-1/2 z-10 cursor-pointer">
                <button className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg backdrop-blur bg-white/10 text-white hover:bg-teal-400 text-2xl">
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Banner;