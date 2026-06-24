import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const UniverseSection = (props) => {

    const {img, description} = props

    return (
        <div className='mb-5'>
            <div className='mb-3 d-flex justify-content-center'>
                <img src = {img} style = {{width: "50%"}}/>
            </div>
            <div className='text-center'>
                {description}
            </div>
        </div>
    )
}

export default UniverseSection;