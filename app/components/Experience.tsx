interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export default function Experience(props: Readonly<ExperienceProps>) {
  return (
    <div className="flex flex-col gap-2">
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
