import './Track.css'
import react from 'react'


export class Track extends react.Component {
    renderAction() {
        
            if (this.props.isRemoval) {
               return <button className="Track-action">-</button>
            } else {
                return <button className="Track-action">+</button>
            }
        
    }
    render() {
     return (   
    <div className="Track">
    <div className="Track-information">
      <h3>
        track name
      </h3>
      <p>track album</p>
    </div>
    {this.renderAction}
  </div>
   ) }

}

