import React from 'react'
import { Component, View } from '@/components'
import { ListView } from 'antd-mobile'

export default class FenceSend extends Component {
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

    componentDidMount() {
        setTimeout( _ => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows([1, 2])
            })
            console.log(this.state.dataSource)
        }, 500)
    }

    render() {
        const { dataSource, height } = this.state;
        const row = (rowData, sectionID, rowID) => {
            return (
                <div>{rowData}</div>
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