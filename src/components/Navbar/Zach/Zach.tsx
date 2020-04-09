import React from 'react';

import { Button, notification, Modal } from 'antd';
import 'antd/es/button/style/css';
import 'antd/es/notification/style/css';
import 'antd/es/modal/style/css';

import {GlobalStyles} from '../../Styles/global';

type Props = {
  theme: string
}

type State = {
    joke: string,
    setup: string,
    delivery: string
    visible: boolean
    arr: any
}

export default class Zach extends React.Component<Props, State> {
    constructor(props: Props){
        super(props)

        this.state = {
            joke: '',
            setup: '',
            delivery: '',
            visible: false,
            arr: [{id: 1234}, {id: 2345}, {id: 3456}]
        }
    }

    openNotification = () => {
        let message;
        let description;

        if(this.state.joke !== ''){
            message = this.state.joke;
        } else {
            message = this.state.setup;
            description = this.state.delivery
        }

        notification.open({
          message: this.state.joke !== '' ? this.state.joke : this.state.setup,
          description:
            this.state.delivery,
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
    };

    showModal = () => {
        this.setState({
          visible: true,
        });
      };

      handleOk = (e: any) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      handleCancel = (e: any) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };


    componentDidMount() {
        fetch('https://sv443.net/jokeapi/category/Programming')
            .then(res => res.json())
            .then(json => {
                if(json.type === 'single'){
                    this.setState({
                        joke: json.joke
                    })
                } else {
                    this.setState({
                        setup: json.setup,
                        delivery: json.delivery
                    })
                }
            })
    }

    render(){
        return (
            <>
              <Button type="primary" onClick={this.showModal} style={this.props.theme === 'light' ? {backgroundColor: "white", color: '#333' } : {backgroundColor: '#333', color: 'white'}}>
              Zach
              </Button>
              <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              >
                  <p>{this.state.joke !== '' ? this.state.joke : this.state.setup}</p>
                  <p>{this.state.delivery}</p>
              </Modal>
          </>
        );
    }
}