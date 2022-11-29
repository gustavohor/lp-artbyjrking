import { JobsSection } from "./styles";
import { jobs } from "@/utils/jobs";

export default function Jobs() {
  return (
    <JobsSection>
      <div className="columns">
        {jobs.map((info) => (
          <section>
            <img src={info.img} alt={info.job} />
            <h2>{info.job}</h2>
            <span>{info.description}</span>
          </section>
        ))}
      </div>
    </JobsSection>
  );
}
