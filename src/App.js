import React from 'react';
import Axios from "axios";
import MainApp from './component/main'

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={info: {
            ip:null,
                num:null
        }}
    }
    componentDidMount() {
        let that=this
        Axios.get('/info').then((res)=>{
            that.setState({info:res.data})
        }).catch((e)=>{
            console.log(e)
        })
    }
    render() {
        return <MainApp data={this.state.info}/>
    }
}

export default App