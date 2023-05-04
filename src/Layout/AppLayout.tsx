import React from "react";
import "./AppLayout.css";
import { Button, ConfigProvider, theme, Breadcrumb, Layout, Menu } from "antd";
import Navbar from "../Component/Navbar/Navbar";
import Sidebar from "../Component/Sidebar/Sidebar";
import PageContent from "../Component/PageContent/pageContent";
const { Header, Sider, Content, Footer } = Layout;

const AppLayout = () => (
    <ConfigProvider
        theme={{
            algorithm: theme.defaultAlgorithm,

            token: {
                // colorPrimary: "#0E58D6",
                // colorBgHeader: "white",
                // colorPrimary: "eef1f140",
                colorPrimaryText: "blue",
                // fontFamily: "roboto",
                // colorBorderBg: "green",
                // colorBorder: "red",
                // // colorBgBase: "#0D1117",
                colorText: "eef1f140",
                // colorBgTextHover: "blue"
                // colorPrimaryBg: "green",

            },

            components: {
                Layout: {
                    colorBgHeader: "#0E58D6",
                    //   colorText: "yellow",
                    colorBorder: "red",
                    colorBorderBg: "yellow",
                    colorText: "teal",
                    colorBgLayout: "red",
                    // colorBgBody: "red",
                    colorBgBase: "yellow",
                },



            },
        }}
    >
        <Layout className="container">
            <Navbar />

            <Layout hasSider={true}>
                <Sidebar />
                <PageContent />
            </Layout>




        </Layout>
    </ConfigProvider>
);

export default AppLayout;
