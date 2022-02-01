import '../../styles/_components/FeatureItems.css'

const FeatureItems =(props) =>{

    return (
        <div className="feature-item">
          <img src={props.data.src} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{props.data.title}</h3>
          <p>
            {props.data.texte}
          </p>
        </div>
    )
}
export default FeatureItems
