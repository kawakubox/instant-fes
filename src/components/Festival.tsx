import * as React from 'react';
import {Faction} from './Faction';

interface Props {
  alpha: string
  bravo: string
}

export class Festival extends React.Component<Props> {
  public render() {
    const {alpha, bravo} = this.props

    return (
      <div>
        <Faction name={alpha}/>
        <Faction name={bravo}/>
      </div>
    );
  }
}
