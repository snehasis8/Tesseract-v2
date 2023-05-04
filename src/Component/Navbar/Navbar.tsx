import "./Navbar.css";
import { Layout, Typography } from "antd";
const { Header } = Layout;

const Navbar = () => {
    return (
        <Header
            style={{
                justifyContent: "flex-start",
                //backgroundColor: "#0E58D6",
                alignItems: "center",
                display: "flex"
            }}
        >
            <div className="brand">
                <Typography.Title
                    level={4}
                    style={{
                        margin: 0,
                        letterSpacing: "0.7rem",
                        wordSpacing: "1.1rem",
                        //   color: "whitesmoke",
                    }}
                >
                    Tesseract
                </Typography.Title>
            </div>
        </Header>
    );
};

export default Navbar;