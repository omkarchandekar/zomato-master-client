import React, {useState, useEffect} from 'react';
import ImageViewer from 'react-simple-image-viewer';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {getImage} from '../../../redux/reducers/image/image.action';

// Component
import PhotoCollection from './PhotoCollection';

function Photos() {
    const [photos, setPhotos] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    const dispatch = useDispatch();

    const reduxState = useSelector((globalState)=> globalState.restaurant.selectedRestaurant.restaurant);

    useEffect(() => {
        if (reduxState)
          dispatch(getImage(reduxState?.menuImages)).then((data) => {
            const images = [];
            data.payload.images.map(({ location }) => images.push(location));
            setPhotos(images);
          });
      }, [reduxState]);

    return (
        <>
            {isMenuOpen && <ImageViewer src={photos} currentIndex={currentImage} disableScroll={false} onClose={closeViewer} />}
            <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5'>
                {photos.map((photo, index)=>(
                    <PhotoCollection key={index} index={index} openViewer={openViewer} image={photo} setCurrentImage={setCurrentImage} />
                ))}
            </div>
        </>
    )
}

export default Photos;
