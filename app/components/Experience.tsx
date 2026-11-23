interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export default function Experience(props: Readonly<ExperienceProps>) {
  return (
    <div className="flex flex-col gap-2 width-full p-4 relative rounded-[26px] border border-gbd-rim bg-gbd-surface text-gbd-fg backdrop-blur-[20px] backdrop-saturate-170 shadow-[inset_0_1px_0_var(--color-gbd-rim),0_30px_60px_-30px_rgba(0,0,0,.5)]">
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <p className="text-sm text-gray-400">
        {props.company} | {props.date}
      </p>
      <ul className="list-disc list-inside text-sm">
        {props.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
