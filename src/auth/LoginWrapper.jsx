import { useEffect, useState } from "react";

export default function LoginWrapper({ children }) {
  const [quote, setQuote] = useState("");

  // u8y/8hdjn5KtrBUkzhVTZQ==NE3Za155bdvSBCm1
  const getMotivationalQuote = async () => {
    try {
      const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": "u8y/8hdjn5KtrBUkzhVTZQ==NE3Za155bdvSBCm1",
        },
      });
      const data = await res.json();
      console.log({ data });
      setQuote(data[0].quote);
    } catch (error) {
      console.error("Failed to fetch motivational quote:", error);
    }
  };

  useEffect(() => {
    getMotivationalQuote();
  }, []);

  console.log({ quote });

  return (
    <div className="flex h-screen w-full">
      <div className="hidden lg:flex flex-col text-center md:w-1/2  w-1/2 justify-center items-center p-12">
        <div
          className="w-full h-full flex flex-col justify-between items-start rounded-[1.5rem] border-r-[1px] py-[4rem] px-[2.88rem]"
          style={{
            borderRightColor: "#A558FF",
            background:
              "linear-gradient(30deg, #1F3EFE -30.23%, #5578FF 33.75%, #A5ABFF 102.49%)",
          }}
        >
          <div className="w-full mb-10">
            <h2 className="text-white text-2xl font-semibold mb-3">
              Quote of the Day
            </h2>
            <blockquote className="text-[#e1e1fb] italic text-lg leading-relaxed border-l-4 border-white pl-4">
              “{quote || "Loading inspirational content..."}”
            </blockquote>
          </div>
          <div>
            <p className="text-[#e1e1fb] text-lg mt-3">
              Build consistency. Unlock potential. Welcome to your Habit Vault.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen lg:w-1/2">{children}</div>
    </div>
  );
}
