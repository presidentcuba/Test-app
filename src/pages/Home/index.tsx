import { Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import CustomTable from "../../components/CustomTable";
import InputSearch from "../../components/InputSearch";
import { getCoins } from "../../services/coinsApi";
const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const timeOutSearch: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    getCoins().then((resp) => {
      if (resp && resp.data && resp.data.data) {
        setData(resp.data.data.coins);
        setDataTemp(resp.data.data.coins);
      }
    });
  }, []);

  const handleSearchCoin = (search: string) => {
    console.log(search);
    if (dataTemp.length) {
      const searchData = data.filter((val: any) => {
        if (search !== "") {
          return val.name?.toLowerCase().includes(search.toLowerCase());
        } else {
          return val;
        }
      });
      setDataTemp(searchData);
      // handleFetchingData(searchData);
    }
  };

  const handleSearch = (e: any) => {
    if (timeOutSearch.current) {
      clearTimeout(timeOutSearch.current);
    }
    timeOutSearch.current = setTimeout(() => {
      handleSearchCoin(e.target.value);
    }, 500);
  };

  return (
    <div style={{ padding: "50px" }}>
      <Typography.Text
        style={{
          display: "block",
          textTransform: "uppercase",
          fontSize: 40,
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        ranking list of crypto coins
      </Typography.Text>
      <div style={{ width: 250, marginBottom: 20 }}>
        <InputSearch
          placeholder="Enter coin name"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <CustomTable data={dataTemp} />
    </div>
  );
};
export default Home;
