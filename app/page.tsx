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
            <h1 className="text-4xl font-bold">Negar Nobakhti</h1>
            <p className="text-lg">
              I am a software engineer with a passion for building web
              applications. I have experience in full-stack development and
              enjoy working with modern web technologies.
            </p>
          </div>
        </div>
        {/* work experiences */}
        <div className="flex flex-col items-start justify-center w-full gap-4 mt-8">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <p className="text-sm text-gray-400">
                Company A | Jan 2020 - Present
              </p>
              <ul className="list-disc list-inside text-sm">
                <li>
                  Developed and maintained web applications using React,
                  Node.js, and MongoDB.
                </li>
                <li>
                  Collaborated with cross-functional teams to design and
                  implement new features.
                </li>
                <li>
                  Optimized application performance and improved user
                  experience.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Frontend Developer</h3>
              <p className="text-sm text-gray-400">
                Company B | Jun 2018 - Dec 2019
              </p>
              <ul className="list-disc list-inside text-sm">
                <li>
                  Built responsive user interfaces using HTML, CSS, and
                  JavaScript.
                </li>
                <li>
                  Worked closely with designers to implement UI/UX designs.
                </li>
                <li>
                  Participated in code reviews and contributed to team best
                  practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
