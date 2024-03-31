import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="">
        <div className=" container mx-auto px-5 py-10">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  I recently purchased a Samsung device through E-store, and
                  while I appreciate the quality of the product itself, I
                  encountered an issue related to the promotional offer. On the
                  launch date, E-store advertised that if I ordered the device
                  within the same day, I would receive a free Samsung back
                  cover. However, upon receiving my order, I did not find this
                  accessory with it.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  VIRAT KOHLI
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  INDIAN CRICKET TEAM CAPTAIN
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.thestatesman.com/wp-content/uploads/2022/09/03_Merged.jpg"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  This is one of the best product I have seen recent days from
                  samsung. My experience with Exynos is good so far. I am buying
                  this for my father for his next birthday as gift.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  NARENDRA MODI
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  PRIME MINISTER OF INDIA
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://w0.peakpx.com/wallpaper/335/429/HD-wallpaper-salman-khan-tiger.jpg"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Overheating just for WhatsApp and YouTube. Disappointed. I
                  have been using samsung galaxy m51 for 4 years i didn't face
                  any issue like this. Very disappointed with A35 5g device.
                  Overheating just for WhatsApp and YouTube. Disappointed. I
                  have been using samsung galaxy m51 for 4 years i didn't face
                  any issue like this.Overheating just for WhatsApp and YouTube.
                  Disappointed.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  SALMAN KHAN
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  BOLLYWOOD ACTOR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
