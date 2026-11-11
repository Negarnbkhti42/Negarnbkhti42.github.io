import Image from "next/image";
import Experience from "./components/Experience";

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
            <Experience
              title="Software Engineer"
              company="Company A"
              date="Jan 2020 - Present"
              description={[
                "Developed and maintained web applications using React, Node.js, and MongoDB.",
                "Collaborated with cross-functional teams to design and implement new features.",
                "Optimized application performance and improved user experience.",
              ]}
            />
            <Experience
              title="Frontend Developer"
              company="Company B"
              date="Jun 2018 - Dec 2019"
              description={[
                "Built responsive and interactive user interfaces using HTML, CSS, and JavaScript.",
                "Worked closely with designers to implement UI/UX designs.",
                "Participated in code reviews and contributed to team knowledge sharing.",
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
