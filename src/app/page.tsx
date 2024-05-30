import Image from "next/image";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 h-full flex-col items-center gap-4 xl:p-10 mt-10">
      <div className="h-full w-full flex flex-col flex-1 xl:flex-row justify-center m-10 items-center text-center">
        <div className="flex flex-col flex-1 items-center justify-center">
          <span className="lg:text-8xl sm:text-6xl text-5xl md:p-4 pl-10 font-bold shine">
            ValStore
          </span>
          <p className="text-xl">
            Access your Valorant shop anywhere, without opening the game, open
            source and secure.
          </p>
          <Link href={"/blog"} className="underline text-red-700 m-1">
            How does it work?
          </Link>
          <a
            className="badge"
            href="https://play.google.com/store/apps/details?id=de.zaroc.valstore&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          >
            <img
              alt="Get it on Google Play"
              className="w-[300px] h-[120px]"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </a>
        </div>
        <div className="flex flex-1">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              <Image src="/phone.jpg" alt="phone" fill={true} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
