import React from 'react'
import { TabBar } from 'antd-mobile'
import { Icon, Component, asyncComponent, View } from '@/components'
import './style/index.css'

export default class Home extends Component {
    static defaultProps = {
        tabBarItems: [
            {type: 'Home', name: '首页', icon: 'home'},
            {type: 'Monitor', name: '车辆监控', icon: 'jiankong1'},
            {type: 'History', name: '历史轨迹', icon: 'guiji2'}
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        };
    }

    componentWillMount() {
        this.tabBarChilds = this.props.tabBarItems.map(child => {
            child.Component = asyncComponent(() => import(/* webpackChunkName: `${child.type}` */ `./children/${child.type}`));
            return child;
        });
    }

    render() {
        const { selectedTab } = this.state;
        // tabBar子元素
        const tabBarChilds = this.tabBarChilds.map((child, index) => {    
            return (
                <TabBar.Item 
                    key={index}
                    title={child.name} 
                    icon={<Icon type={child.icon} />}
                    selectedIcon={<Icon type={child.icon} color="#25b2e6" />}
                    selected={selectedTab === child.type}
                    onPress={() => this.tabBarHandlerClick(child.type)} >
                    <child.Component />
                </TabBar.Item>
            )
        });

        return (
            <View isNavBar={false}>
                <TabBar 
                    tintColor="#33A3F4"
                    barTintColor="white"
                    prerenderingSiblingsNumber={0}>
                    {tabBarChilds}
                </TabBar>
            </View>
        )
    }
    
    /**
     * @fileOverview: table切换的点击事件
     * @param {String} type: 当前的tabBar的类型 
     */
    tabBarHandlerClick(type) {
        this.setState({
            selectedTab: type
        })
    }
}