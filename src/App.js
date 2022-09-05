import "./App.css";
import { Navigation, Tablesale } from "./Component";
import { Container } from "react-bootstrap";
import { Col, Row, Card } from "antd";
import ReactCardSlider from "react-card-slider-component";

const slides = [
  {
    image: "https://picsum.photos/200/300",
    title: "This is a title",
    description: "This is a description",
  },
  {
    image: "https://picsum.photos/600/500",
    title: "This is a second title",
    description: "This is a second description",
  },
  {
    image: "https://picsum.photos/700/600",
    title: "This is a third title",
    description: "This is a third description",
  },
  {
    image: "https://picsum.photos/500/400",
    title: "This is a fourth title",
    description: "This is a fourth description",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "This is a fifth title",
    description: "This is a fifth description",
  },
  {
    image: "https://picsum.photos/800/700",
    title: "This is a sixth title",
    description: "This is a sixth description",
  },
  {
    image: "https://picsum.photos/300/400",
    title: "This is a seventh title",
    description: "This is a seventh description",
  },
];
function App() {
  return (
    <>
      <Navigation />
      {/* <ReactCardSlider slides={slides} /> */}
      <Container>
        <h4 className="fw-bold mt-3">Cryptocurrency Prices by Market Cap</h4>
        <span className="text-desc">
          The global cryptocurrency market cap today is{" "}
          <span className="fw-bold"> 1.0T</span>, a{" "}
          <span className="text-desc-up fw-bold">0.85%</span>change in the last
          24 hours.
        </span>
        <Row gutter={16} className="mt-3">
          <Col span={8}>
            <Card
              title=" 🔥 Trending Coin"
              bordered={false}
              style={{ background: "#F0F9FF", borderRadius: "20px" }}
            >
              <div>
                <p className="fw-bold">
                  1. GMX{" "}
                  <span style={{ fontSize: "10px", color: "gray" }}>GMX</span>
                </p>
                <p className="fw-bold">
                  2. Rich Quack{" "}
                  <span style={{ fontSize: "10px", color: "gray" }}>Quack</span>
                </p>
                <p className="fw-bold">
                  3. Evmos{" "}
                  <span style={{ fontSize: "10px", color: "gray" }}>EVMOS</span>
                </p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="📈 Top Gainer"
              bordered={false}
              style={{ background: "#F0F9FF", borderRadius: "20px" }}
            >
              <div>
                <p className="fw-bold">
                  1. GMX{" "}
                  <span style={{ fontSize: "10px", color: "gray" }}>GMX</span>
                </p>
                <p className="fw-bold">
                  2. Rich Quack{" "}
                  <span style={{ fontSize: "10px", color: "gray" }}>Quack</span>
                </p>
                <p className="fw-bold">
                  3. Evmos{" "}
                  <span style={{ fontSize: "10px", color: "gray" }}>EVMOS</span>
                </p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title=" 🕔 Recently Added"
              bordered={false}
              style={{ background: "#F0F9FF", borderRadius: "20px" }}
            >
              <div>
                <p className="fw-bold">
                  1. GMX{" "}
                  <span style={{ fontSize: "10px", color: "gray" }}>GMX</span>
                </p>
                <p className="fw-bold">
                  2. Rich Quack{" "}
                  <span style={{ fontSize: "10px", color: "gray" }}>Quack</span>
                </p>
                <p className="fw-bold">
                  3. Evmos{" "}
                  <span style={{ fontSize: "10px", color: "gray" }}>EVMOS</span>
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        <Tablesale />
      </Container>

      <div style={{ background: "#0961E5" }} className="mt-3 py-3">
        <Container>
          <span
            className="text-light text-justify py-3"
            style={{ fontSize: "12px" }}
          >
            WARNING! The information provided on this website does not
            constitute investment advice, financial advice, trading advice or
            any other advice and you should not treat the content of the website
            as such. We do not recommend that any cryptocurrency should be
            bought, sold or held by you. Do your own due diligence and consult
            your financial advisor before making any investment decisions.
          </span>
        </Container>
      </div>
      <div style={{ background: "#0050C8" }}>
        <Container>
          <Row className=" pt-5 py-5">
            <Col span={12}>
              <img
                src="https://astrapedia.co/static/media/logo-grey-white.241c85b2380a4f9c1154.png"
                width={200}
              />
              <p className="text-light" style={{ fontSize: "12px" }}>
                Astrapedia is a News Media and platform analyst <br /> crypto
                and coin tracker
              </p>
            </Col>
            <Col span={12}>
              <h5 className="text-light fw-bold">Products</h5>
              <p className="text-light ">Coin Price</p>
              <p className="text-light ">NFT</p>
              <p className="text-light ">News</p>
              <p className="text-light ">Block Explorer</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
