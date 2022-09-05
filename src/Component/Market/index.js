import React from "react";
import { Table, Container, Button } from "react-bootstrap";
import Chart from "../../assets/Chart.png";
import { data1, data2 } from "../datadummy";
import { Pagination } from "antd";

function TableComponent() {
  const [data, setData] = React.useState(data1);

  return (
    <Container className="marketCrypto">
      <div className=" mt-5">
        <Button
          onClick={() => setData(data1)}
          variant="light"
          className="textMarket me-4"
        >
          All
        </Button>
        <Button
          onClick={() => setData(data2)}
          variant="light"
          className="textMarket me-4"
        >
          Cryptocurrency
        </Button>
        <Button variant="light" className="textMarket me-4">
          NFT
        </Button>
        <Button variant="light" className="textMarket me-4">
          GameFi
        </Button>
        <Button variant="light" className="textMarket me-4">
          Metaverse
        </Button>
        <Button variant="light" className="textMarket me-4">
          Gambling
        </Button>
        <Button variant="light" className="textMarket me-4">
          DeFi
        </Button>
        <Button variant="light" className="textMarket me-4">
          Exchange
        </Button>
      </div>
      <Table className="mt-5" responsive="sm">
        <tbody>
          <tr>
            <td className="text-center fw-bold">Name</td>
            <td className="text-center fw-bold">Price</td>
            <td className="text-center fw-bold">24h%</td>
            <td className="text-center fw-bold">7d%</td>
            <td className="text-center fw-bold">Marketcap</td>
            <td className="text-center fw-bold">Volume 24h</td>
            <td className="text-center fw-bold">Circulating Supply</td>
            <td className="text-center fw-bold">Last 7 days</td>
          </tr>
          {data.map((item, index) => {
            return (
              <tr>
                <td className="d-flex  py-3">
                  <img
                    src={item.image}
                    height={35}
                    width={35}
                    alt="Logo Coin.png"
                  />
                  <span className="ms-3 fw-bold text-center">
                    {item.code}{" "}
                    <span className="textCoin text-center">
                      {item.fullName}
                    </span>
                  </span>
                </td>
                <td className="fw-bold text-center py-3">{item.price}</td>
                <td className="textPersen fw-bold text-center py-3 ">
                  {item.persen24h}
                </td>
                <td className="textPersen fw-bold text-center py-3 ">
                  {item.persen7d}
                </td>
                <td className="text-center fw-bold py-3">{item.marketcap}</td>
                <td className="text-center fw-bold py-3">{item.volume}</td>
                <td className="text-center fw-bold py-3">{item.circulate}</td>
                <td className="text-center py-3">
                  <img src={Chart} width={100} height={35} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination
        style={{ display: "flex", justifyContent: "end" }}
        defaultCurrent={1}
        total={50}
      />
    </Container>
  );
}

export default TableComponent;
