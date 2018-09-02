import {Button, WingBlank} from 'antd-mobile'
import * as React from 'react'

interface Props {
  name: string;
}

export class Faction extends React.Component<Props> {

  public render() {
    const {name} = this.props

    return (
      <WingBlank>
        <div style={{height: 200}}>
          <h2 style={{textAlign: 'center'}}>{name}</h2>
          <Button
            type={"primary"}
            style={{marginTop: 50, marginBottom: 50}}
          >投票する</Button>
        </div>
      </WingBlank>
    );
  }
}
