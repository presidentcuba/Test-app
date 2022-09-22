import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoinsDetail } from "../../services/coinsApi";

const Information: React.FC = () => {
  const { id } = useParams();
  const [coinDetail, setCoinDetail] = useState<any>();

  useEffect(() => {
    if (id) {
      getCoinsDetail(id).then((resp) => {
        if (resp.data && resp.data.data) {
          setCoinDetail(resp.data.data.coin);
        }
      });
    }
  }, [id]);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>{coinDetail?.name}</h1>
      <img
        style={{ width: 50, height: 50, marginBottom: 10 }}
        src={coinDetail?.iconUrl}
      />
      <span style={{ display: "block" }}>
        Price: <strong>{coinDetail?.price}</strong>
      </span>
      <span style={{ display: "block" }}>
        Price changes: <strong>{coinDetail?.change}</strong>
      </span>
      <span style={{ display: "block" }}>
        Market Cap: <strong>{coinDetail?.marketCap}</strong>
      </span>
    </div>
  );
};
export default Information;
