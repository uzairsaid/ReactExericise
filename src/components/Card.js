import PropTypes from "prop-types"
function Card({title, content}){

    return (
        <div className="card-container">

            <div className="card-title">
                <h2>{title}</h2>
            </div>

            <div className="card-body">
                {content}
            </div>
        </div>
    )

}
Card.propTypes = {
    title: PropTypes.string,
    // content : PropTypes.object.isRequired
}

export default Card