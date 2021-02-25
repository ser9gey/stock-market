import { useState, useEffect } from 'react'
import './loader.scss'

const Loader = () => {

    const [loader, showLoader] = useState(false);

    useEffect(() => {
        window.onload = function() {
            showLoader(!loader);
        }
    });
    
    let className = "loadingio-spinner-gear-rv8r4i6ur2k"
    if(loader) {
        className += " loadingio-spinner-gear-rv8r4i6ur2k_active"
    } else {
        className = "loadingio-spinner-gear-rv8r4i6ur2k"
    }

    return (
        <div className={className}><div className="ldio-yqloeu51xgc">
            <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div></div>
    )
}

export default Loader;