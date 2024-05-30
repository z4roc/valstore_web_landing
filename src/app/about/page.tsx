export default function Page() {
  return (
    <main className="h-full flex flex-1 flex-col mt-32 w-2/4 gap-8 justify-center">
      <h1 className="text-3xl font-bold w-2/4">About</h1>
      <p className="text-lg">
        ValStore was created by ZAROC (Discord "turbointerl9") as a for fun side
        project.
      </p>
      <p className="text-lg">
        If you like the project i would appreciate a follow. If you have some
        money left I also would be very thankfull about a small donation. I'm a
        student and every cent helps me to keep the project running.
      </p>
      <div className="flex gap-8 mt-12 w-full items-center justify-center">
        <a
          href="mailto:arthur@aktamirov.de"
          target="_blank"
          className="text-bold text-xl underline text-blue-600"
        >
          Mail
        </a>
        <a
          href="https://x.com/zaroc_dev"
          target="_blank"
          className="text-bold text-xl underline text-blue-600"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/zaroc.de/"
          target="_blank"
          className="text-bold text-xl underline text-blue-600"
        >
          Instagram
        </a>
      </div>

      <a
        href="https://ko-fi.com/N4N1IL99T"
        target="_blank"
        className="flex items-center justify-center gap-2 mt-8"
      >
        <img
          height="24"
          style={{ border: "0px", height: "50px" }}
          src="https://storage.ko-fi.com/cdn/kofi4.png?v=3"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </main>
  );
}
