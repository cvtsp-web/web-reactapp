import React from 'react'
import { Component, View } from '@/components'
import { ListView } from 'antd-mobile'
import { API_getPredefinedInfoPage } from '@store/preDefinedInfo'

export default class PreDefinedInfo extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            dataSource,
            height: document.documentElement.clientHeight - 45
        }
    }

    async componentDidMount() {
        await this.props.dispatch(API_getPredefinedInfoPage());

        // setTimeout( _ => {
        //     this.setState({
        //         dataSource: this.state.dataSource.cloneWithRows([1, 2])
        //     })
        // }, 500)
    }

    componentWillReceiveProps(nextProps) {
        const { getPredefinedInfoPage } = nextProps.preDefinedInfo;

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(getPredefinedInfoPage)
        })
        
    }

    render() {
        const { dataSource, height } = this.state;
        const row = (rowData, sectionID, rowID) => {
            return (
                <div>{rowData.msginfo}</div>
            )
        };
        return (
            <View>
                <ListView 
                dataSource={dataSource}
                renderRow={row}
                style={{height: height+'px'}}></ListView>
            </View>
        )
    }
    
}