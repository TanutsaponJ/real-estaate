import { STATS_DATA } from "../../utils/data/data";
import Card from "./statsCard/Card";

const Stats = () => {
  return (
    <section className="bg-secondary">
      <div className="max-w-screen-xl flex justify-around flex-wrap mx-auto">
        {STATS_DATA.map((item) => (
          <Card
            key={item.label}
            iconUrl={item.iconUrl}
            count={item.count}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
