import { useEffect, useState } from "react";
import useChain from "hooks/useChain";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    height: "42px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    padding: "0 10px",
  },
  button: {
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient( 280deg, #e9bbc4, #4061f6)",
    color: "white"
  },
};

const menuItems = [
  /*  {
    key: "0x1",
    value: "Ethereum",
    icon: <ETHLogo />,
  },

  {
    key: "0x539",
    value: "Local Chain",
    icon: <ETHLogo />,
  },
  {
    key: "0x3",
    value: "Ropsten Testnet",
    icon: <ETHLogo />,
  },
  {
    key: "0x4",
    value: "Rinkeby Testnet",
    icon: <ETHLogo />,
  },
  {
    key: "0x2a",
    value: "Kovan Testnet",
    icon: <ETHLogo />,
  },
  {
    key: "0x5",
    value: "Goerli Testnet",
    icon: <ETHLogo />,
  },
  */
  {
    key: "0x38",
    value: "Binance",
    icon: <BSCLogo />,
  },
  /*
  {
    key: "0x61",
    value: "Smart Chain Testnet",
    icon: <BSCLogo />,
  },
  
  {
    key: "0x89",
    value: "Polygon",
    icon: <PolygonLogo />,
  },
  
  {
    key: "0x13881",
    value: "Mumbai",
    icon: <PolygonLogo />,
  },
 
  {
    key: "0xa86a",
    value: "Avalanche",
    icon: <AvaxLogo />,
  },
  */
];

function Chains() {
  const { switchNetwork } = useChain();
  const { chainId } = useMoralisDapp();
  const [selected, setSelected] = useState({});
  const [width, setWidth] = useState(window.innerWidth);


  const [inputValue, setInputValue] = useState("explore");
  useEffect(() => {
		/* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
		window.addEventListener("resize", () => setWidth(window.innerWidth));

		/* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
	}, []);
  useEffect(() => {
    if (!chainId) return null;
    const newSelected = menuItems.find((item) => item.key === chainId);
    setSelected(newSelected);
    console.log("current chainId: ", chainId);
  }, [chainId]);

  const handleMenuClick = (e) => {
    console.log("switch to: ", e.key);
    switchNetwork(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} style={styles.item}>
          <span style={{ marginLeft: "5px" }}>{item.value}</span>
        </Menu.Item>
      ))}
    </Menu> 
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button
          key={selected?.key}
          icon={selected?.icon}
          style={{ ...styles.button, ...styles.item }}
        >
          <span style={{ marginLeft: "5px" }}>{width > 768 && selected?.value}</span>
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default Chains;
