
import banner from '../../assets/banner.jpg'
const Hero = ({ handleScroll }) => {

    return (
        <div>
            <div className='relative md:mb-72 mb-60'>
                <section className="space-y-3 bg-[#9538E2] px-4 py-10 text-white ">
                    <h1 className="text-3xl md:text-5xl font-bold text-center">
                        Upgrade Your Tech Accessories with Gadget Heaven
                    </h1>
                    <p className="text-center max-w-2xl mx-auto">
                        Explore the latest gadgets that will take your experience to the next level.
                        From smart devices to the coolest accessories, we have it all!
                    </p>
                    <div className="flex justify-center my-6 mb-10">
                        <button onClick={handleScroll} className="text-purple-500 bg-white px-5 py-2 rounded-2xl font-bold hover:bg-purple-100">
                            Shop Now
                        </button>

                    </div>
                </section>
                <div className='absolute lg:left-60 md:left-50 md:top-70 left-20 top-75 '>
                    <img className='md:h-80 md:w-140 h-50 w-100 rounded-2xl' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
