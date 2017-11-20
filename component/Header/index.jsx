import React, {PropTypes, Component} from 'react';
import {Form, Menu, Icon} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './index.less'

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'home',
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div className="header-box">
                <div className="title">MINI Watercolor</div>

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >


                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Contact</a>
                    </Menu.Item>

                    <SubMenu title={<span>Q & A</span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>

                    <Menu.Item key="mini">
                        Mini
                    </Menu.Item>

                    <Menu.Item key="home">
                        <Icon type="home" />Home
                    </Menu.Item>

                </Menu>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {} = state;
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({})(Index));