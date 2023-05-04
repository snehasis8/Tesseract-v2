import "./Sidebar.css";
import { Layout, Menu, Space } from "antd";
const { Sider } = Layout;

const Sidebar = () => {
    return (
        <Sider className="sidebar" collapsible={true} width={'15%'} >


            {/* <Sider className="sidebar" theme="light" collapsible={true}> */}
            <Menu
                mode="vertical"
                className="menue"
                items={[
                    {
                        label: "Home",
                        key: "Home",
                        title: "MY HOME",
                        className: "menuItem-custom",
                    },
                    {
                        label: "Apps Overview",
                        key: "appsOverview",
                        className: "menuItem-custom",
                    },
                    {
                        label: "Global Roles",
                        key: "globalRoles",
                        className: "menuItem-custom",
                    },
                    {
                        label: "Groups",
                        key: "groups",
                        className: "menuItem-custom",
                    },
                    {
                        label: "Request",
                        key: "request",
                        className: "menuItem-custom",
                    },
                    {
                        label: "Statistics",
                        key: "Statistics",
                        className: "menuItem-custom",
                    },
                ]}
            ></Menu>

        </Sider>


    );
};

export default Sidebar;
