import img from "./banner.png";
import BannerTab from "./BannerTab";

const Banner = () => {
  return (
    <div className="bg-blue-500/45 w-full h-[500px]">
      <main className="flex justify-between container mx-auto">
        <aside className="py-5">
          <h1 className="text-blue-600 text-4xl font-bold leading-normal">
            Welcome to My Website
          </h1>
          <p className="text-blue-500 text-base">
            This is a simple website built using Next.js and Tailwind CSS.
          </p>
          <BannerTab />
        </aside>
        <aside>
          <img src={img} className="max-h-[500px]" />
        </aside>
      </main>
    </div>
  );
};

export default Banner;
