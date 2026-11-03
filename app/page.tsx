import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-background">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background sm:items-start">
        <div className="flex flex-col items-start justify-center w-full gap-4 md:flex-row md:items-start">
          <div className="bg-[url('/Headshot.png')] bg-cover inset-shadow-profile">
            <Image
              src="/Headshot.png"
              alt="headshot"
              width={700}
              height={800}
              className="invisible"
            />
          </div>
          <div className="flex flex-col gap-4 md:pl-8">
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Negar Nobakhti
            </h1>
            <p className="text-lg text-black dark:text-white">
              I am a software engineer with a passion for building web
              applications. I have experience in full-stack development and
              enjoy working with modern web technologies.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
