import { useEffect, useState,useRef } from "react";
import { useMoralis } from "react-moralis";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout } from "antd";
import SearchCollections from "components/SearchCollections";
import Home from "components/Home";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
import Footer from "components/Footer";
import "style.css";
import logo from 'images/Logo.png'
import Whitelogo from 'images/White.png'
import MenuItem from "antd/lib/menu/MenuItem";
const { Header } = Layout;

const styles = {
  content: {
    // display: "flex",
    // justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px", 
   
    // padding: "10px",
  },
  userheader: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    // background: "transparent",
    background:"#dae3fa",  // for header background
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    // borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    // boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
    flexWrap: "wrap",
    height: "auto",
  },
  nonUserHeader: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    margin: "auto",
    //background: "",
    //background:"#dae3fa",  // for header background
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    // borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    // boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
    flexWrap: "wrap",
    height: "auto",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    flex:'inherit',
    justifyContent:'end'
  },
  mylogo: {
    maxWidth: "75px",
    height: "75px",
  },
};


const App = ({ isServerInfo }) => {
  const {
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis();
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  // const [scroll, setScroll] = useState(false);
  const sidemenu = useRef();
  const [inputValue, setInputValue] = useState("explore");
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const scrollvalue = document.documentElement.scrollTop;
  //     if (scrollvalue>100){
  //       setScroll(true);
  //     }
  //     setScroll(document.documentElement.scrollTop)});
  // }, []);
  useEffect(() => {
    const handler = (event) => {
      if (sidemenu.current && !sidemenu.current.contains(event.target)) {
        setShow(false)
      };
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, []);
  const handleClick = () => {
    setShow(true)
  }
  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  // console.log(scroll,"test")
  return (
   
    <Layout style={{overflow: "auto",background: 'radial-gradient(50% 50% at 50% 50%, rgb(108 153 249 / 30%) 0px, rgba(233, 187, 196, 0.25) 100%)' }}>
      <Router>
      {isAuthenticated ? <div>
        <Header style={styles.userheader}>
        <img src={logo} alt="logo" style={styles.mylogo} />
          
          {width > 768 && <SearchCollections setInputValue={setInputValue} />}
          {width > 1024 && (
           
            <Menu
              theme="light"
              mode="horizontal"
              style={{
                display: "flex",
                fontSize: "17px",
                fontWeight: "500",
                marginLeft: "0px",
                width: "100%",
                flex: '1 0 40%',
                lineHeight: '2.6',
                borderRadius:'10px'
              }}
              defaultSelectedKeys={["home"]}
            >
              
               <Menu.Item key="home">
              <NavLink to="/home">Home</NavLink>
            </Menu.Item>
              <Menu.Item
                key="nftMarket"
                onClick={() => setInputValue("explore")}
              >
                <NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink>
              </Menu.Item>
              <Menu.Item key="nft">
                <NavLink to="/nftBalance">🖼 Your Collection</NavLink>
              </Menu.Item>
              
              <Menu.Item key="transactions">
                <NavLink to="/Transactions">📑 Your Transactions</NavLink>
              </Menu.Item>
            </Menu>
          )}
          <div style={styles.headerRight}>
            <Chains />
            {width > 768 && <NativeBalance />}
            {width > 600 && <Account />}
          </div> 
          <div className="sidemenu">
            <div style={{ marginLeft: "5px" }} className="toggle-btn" onClick={handleClick}>
            <img src={"/hamburger-menu.svg"} width="50" height="50"/>
             {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-12ipqmu-0 hKcIKI"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> */}
            </div>
            {show && <div className="menu" ref={sidemenu}>
            <Menu
              theme="light"
              mode="vertical"
            >
              <Menu.Item
              >
                <a href="https://www.facebook.com/" target="_blank">🛒 About</a>
              </Menu.Item>
              <Menu.Item
              >
                <a href="https://www.facebook.com/" target="_blank">🛒 Contact</a>
              </Menu.Item>
              <Menu.Item
              >
                <a href="https://www.facebook.com/" target="_blank">🛒 FAQ</a>
              </Menu.Item>
             
            </Menu>
            </div>}
          </div>

          
        {/* {width <= 600 && <div className="fixbar">
          // {width <= 600 && <div className="ms-0 me-auto"><Chains /></div>}  for left align
          //{width <= 600 && <div className="ms-auto"><Chains /></div>}  for right align check Style.css also
           <Account />
          </div>}
          {width <= 1024 && (
            <div class="fixed-menu">
              <Menu
                theme="light"
                mode="horizontal"
                style={{
                  display: "flex",
                  fontSize: "17px",
                  fontWeight: "500",
                  //marginLeft: "50px",
                  width: "100%",
                  flex: "0 1",
                }}
                defaultSelectedKeys={["home"]}
              >
                 <Menu.Item key="home">
              <NavLink to="/home">Home</NavLink>
            </Menu.Item>

                <Menu.Item
                  key="nftMarket"
                  onClick={() => setInputValue("explore")}
                >
                  <NavLink to="/NFTMarketPlace">🛒 Explore</NavLink>
                </Menu.Item>
                <Menu.Item key="nft">
                  <NavLink to="/nftBalance">🖼 NFTs</NavLink>
                </Menu.Item>
                <Menu.Item key="transactions">
                  <NavLink to="/Transactions">📑 History</NavLink>
                </Menu.Item>
              </Menu>
            </div>
          )}
          {width <= 768 && (
            <div
              className="d-flex"
              style={{
                flex: "0 1 100%",
                margin: "15px 0",
              }}
            >
              <SearchCollections setInputValue={setInputValue} />
            </div>
          )} */}

        </Header>
        </div> : <div>
        <Header style={styles.nonUserHeader}>
        <img src={Whitelogo} alt="logo" style={styles.mylogo} />
          
          {width > 768 && <SearchCollections setInputValue={setInputValue} />}
          {width > 1024 && (
           
            <Menu
             // theme="dark"
              mode="horizontal"
              style={{
                display: "flex",
                fontSize: "17px",
                fontWeight: "500",
                //marginLeft: "0px",
                margin: "auto",
                width: "100%",
                flex: '1 0 5%',
                lineHeight: '2.6',
                borderRadius:'10px',
               // backgroundColor: "inherit",
                
              }}
              defaultSelectedKeys={["home"]}
            >
              
               <Menu.Item key="home">
              <NavLink to="/home">Home</NavLink>
            </Menu.Item>
              <Menu.Item
                key="nftMarket"
                onClick={() => setInputValue("explore")}
              >
                <NavLink to="/NFTMarketPlace">Explore Market</NavLink>
              </Menu.Item>
              <Menu.Item>
              <a href="https://altcoin.gitbook.io/altcoinwhitepaper/overview/mission-and-values/" target="_blank">Whitepaper</a>
                
              </Menu.Item>
              
              <Menu.Item key="about">
                <NavLink to="/about">Activity</NavLink>
              </Menu.Item>
            </Menu>
          )}
          <div style={styles.headerRight}>
            <Chains />
            
            {width > 600 && <Account />}
          </div> 
          <div className="sidemenu">
            <div style={{ marginLeft: "5px" }} className="toggle-btn" onClick={handleClick}>
            <img src={"/hambuger.png"} width="50" height="50" color="white"/>
             {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-12ipqmu-0 hKcIKI"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> */}
            </div>
            {show && <div className="menu" ref={sidemenu}>
            <Menu
              theme="light"
              mode="vertical"
            >
              <Menu.Item
              >
                <a href="https://www.facebook.com/" target="_blank">🛒 About</a>
              </Menu.Item>
              <Menu.Item
              >
                <a href="https://www.facebook.com/" target="_blank">🛒 Contact</a>
              </Menu.Item>
              <Menu.Item
              >
                <a href="https://www.facebook.com/" target="_blank">🛒 FAQ</a>
              </Menu.Item>
             
            </Menu>
            </div>}
          </div>

        </Header>
          
          </div>}

      

        <div className="wrapper" style={{marginTop: "0px"}}>
          <Switch>
          <Route path="/home">
          <div>
              <div className="gradient-bg-welcome">
                <Home />
            </div>
            
          </div>

      

            </Route>
            <div className="container-md">
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
            </div>
          </Switch>
          <Redirect to="/home" />
          
        </div>
      </Router>
        
      {/*<Footer />*/}
     
     <div>
     
              
     </div>
     <Footer />  
    </Layout>


  );
};

export const Logo = () => (
  <div style={{ display: "flex", flex: "auto" }}>
    <img src={"images/logo.png"} width="50" height="50"/>
  </div>
);

export default App;
