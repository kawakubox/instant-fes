import {Button, InputItem, WhiteSpace, WingBlank} from 'antd-mobile';
import * as React from 'react';

interface State {
  room: string
}

export class RoomSelector extends React.Component<{}, State> {
  public state: State = {room: ''}

  public render() {
    return (
      <WingBlank>
        <WhiteSpace/>
        <InputItem
          placeholder={'部屋名を入れてね'}
          onChange={(val: string) => {
            this.setState({room: val})
          }}
        >
          部屋の名前
        </InputItem>
        <WhiteSpace/>
        <Button
          type={'primary'}
          onClick={() => {
            console.log(this.state.room)
          }}
        >
          部屋をつくる
        </Button>
      </WingBlank>
    );
  }
}
