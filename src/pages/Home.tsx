import { useState } from "react";

function Home() {

    const [testimonials] = useState([
        {
            id: 1,
            name: "Naura",
            message: "I really love the cappuccino, the coffee was very smooth",
            image: "/testimonial-1.png",
        },
        {
            id: 2,
            name: "Jhon",
            message: "This coffee shop is very convenient",
            image: "/testimonial-2.png",
        },
        {
            id: 3,
            name: "Azura",
            message: "The coffee menu here is very diverse",
            image: "/testimonial-3.png",
        },
    ]);

    const activeIndex = 0;

    return (
        <>
            <main>
                <div className="container mt-4 font-poppins">
                    <div className="bg bg-[#F7EBDB] rounded-r-3xl w-[900px] h-[450px]">
                        <img
                            className="max-w-4xl -left-32 relative top-10 opacity-50"
                            src="/bg-aboutus.png"
                            alt=""
                        />
                        <div className="relative -top-28 left-32 flex">
                            <div>
                                <h1 className=" text-3xl font-semibold">
                                    What they say about us
                                </h1>
                                <p className=" text-[#A9A29B] mt-4">
                                    We always provide the best service <br />
                                    and always maintain the quality of <br />
                                    coffee
                                </p>
                            </div>
                            <div className="absolute -top-10 left-[420px] flex mr-4">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`testimoni w-max mr-5 ${index === activeIndex ? "active" : ""}`}
                                    >
                                        <img
                                            className="w-52"
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                        />
                                        <div className="glassy-card p-1 bg-[#FFCA7D] bg-opacity-50 rounded-xl relative -top-[100px] ml-10">
                                            <div className="card bg-[#FFCA7D] rounded-lg px-2">
                                                <h1 className="nama ml-2 font-semibold">
                                                    {testimonial.name}
                                                </h1>
                                                <p className="desk ml-2 pb-1">
                                                    {testimonial.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="indicator-container relative top-64 left-[500px]">
                                {testimonials.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`dot ${index === activeIndex ? "active" : ""}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container-subscribe mt-32 mb-48 justify-center flex">
                        <div className="subscribe relative">
                            <img
                                className="w-[900px]"
                                src="/bg-newsletter.png"
                                alt=""
                            />
                            <h1 className="text-3xl font-semibold -mt-52 flex justify-center text-white">
                                Subscribe to get 50% discount price
                            </h1>
                            <div className="email absolute top-40 left-56">
                                <form action="">
                                    <input
                                        className="w-[450px] p-3 rounded-3xl"
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                    <button className="bg-[#2F2105] text-white py-2 px-5 rounded-3xl relative  -left-[132px]">
                                        Order Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
