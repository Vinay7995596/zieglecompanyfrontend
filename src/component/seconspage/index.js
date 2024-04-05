import './index.css';
import { FaStar } from 'react-icons/fa';

function Secondslide() {
    return (
        <div>
           <div>
                <h3 className='heading-main'>Rated excellent by real customers</h3>
           </div>
           <div>
            <div className='boxes'>
                <div className='starts-heading'>
                    <h6>Raphael B...</h6>
                    <div>
                        <span><FaStar /></span>
                    </div>
                </div>
                <p className='paragraph-alignment'>Antonio was very good</p>
            </div>
           </div>
        </div>
    );
};

export default Secondslide;