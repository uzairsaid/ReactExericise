import SlideCard from "../components/SlideCard";
import Card from "../components/Card";
import Content from "../components/Content";

function Home() {
  const info = "Weather information";

  return (
    <div>
      <div className="container">
        <SlideCard />
        <Card title={info} />
      </div>
      <Content />
    </div>
  );
}

export default Home;
