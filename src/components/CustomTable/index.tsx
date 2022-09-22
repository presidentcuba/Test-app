import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Item from "antd/lib/list/Item";
import { Link } from "react-router-dom";
interface IProps {
  data: any;
}

const CustomTable: React.FC<IProps> = ({ data }) => {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    if (data.length) {
      const newData = data.map((item: any, index: number) => {
        return {
          ...item,
          key: index,
          name: {
            name: item.name,
            uuid: item.uuid,
          },
          price: item.price,
          coinLogo: item.iconUrl,
          coinSymbol: item.coinrankingUrl,
          btcPrice: item.change,
          totalMarket: item.marketCap,
        };
      });

      setDataTable(newData);
    }
  }, [data]);

  const columns: any = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      render: (name: any) => (
        <Link
          to={`coin/${name.uuid}`}
          style={{ display: "block", textTransform: "uppercase" }}
        >{`${name.name ? name.name : "---"} `}</Link>
      ),
    },
    {
      title: "Coin Symbol",
      dataIndex: "coinSymbol",
      key: "coinSymbol",
      align: "center",
      width: "15%",
      render: (text: string) => (
        <div style={{ display: "block" }}>
          <img src={text} />
        </div>
      ),
    },
    {
      title: "Coin Logo",
      dataIndex: "coinLogo",
      key: "coinLogo",
      align: "center",
      width: "15%",
      render: (text: string) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ display: "block", width: 50, height: 50 }} src={text} />
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
      width: "15%",
      sorter: (a: any, b: any) => a.price - b.price,
    },
    {
      title: "Total Market",
      dataIndex: "totalMarket",
      key: "totalMarket",
      align: "center",
      width: "15%",
      sorter: (a: any, b: any) => a.totalMarket - b.totalMarket,
    },
    {
      title: "Price Changes",
      dataIndex: "btcPrice",
      key: "btcPrice",
      align: "center",
      width: "15%",
      sorter: (a: any, b: any) => a.btcPrice - b.btcPrice,
    },
  ];
  return (
    <Table
      locale={{
        triggerDesc: "Nhấp để sắp xếp giảm dần",
        triggerAsc: "Nhấp để sắp xếp tăng dần",
        cancelSort: "Nhấp để huỷ sắp xếp",
      }}
      bordered
      dataSource={dataTable}
      columns={columns}
    />
  );
};
export default CustomTable;
