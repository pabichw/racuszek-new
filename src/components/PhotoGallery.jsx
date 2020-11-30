import React, { useState } from "react"
import styled from "styled-components"
import isEmpty from 'lodash/isEmpty';
import { reactPropsStylingToCss } from "../utils/styling"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css";

const PhotoGallery = ({images, srcPath, altPath}) => {
  const [popupOpened, setPopupOpened] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);

  const handleOpen = (idx) => {
    setPopupOpened(!popupOpened);
    if (idx) {
      setPhotoIdx(idx)
    }
  }
  console.log('images', images, 'photoIdx', photoIdx);
  if (isEmpty(images)) return null;
  return (
    <>
      <PhotoGrid>
        {images.length === 3 ?
          <>
            {images[0] && <PhotoWrap onClick={() => handleOpen(0)} customStyle={reactPropsStylingToCss({gridRow: "1 / 3", gridColumn: "1"})}><Photo src={srcPath ? images[0][srcPath] : images[0]} alt={altPath ? images[0][altPath] : ''}  /></PhotoWrap>}
            {images[1] && <PhotoWrap onClick={() => handleOpen(1)} customStyle={reactPropsStylingToCss({gridRow: "1", gridColumn: "2"})}><Photo src={srcPath ? images[1][srcPath] : images[1]} alt={altPath ? images[1][altPath] : ''} /></PhotoWrap>}
            {images[2] && <PhotoWrap onClick={() => handleOpen(2)} customStyle={reactPropsStylingToCss({gridRow: "2", gridColumn: "2"})}><Photo src={srcPath ? images[2][srcPath] : images[2]} alt={altPath ? images[2][altPath] : ''}/></PhotoWrap>}
          </>
          :
          images.map((img, idx) =>
            <PhotoWrap onClick={() => handleOpen(idx)}>
              <Photo src={srcPath ? img[srcPath] : img} alt={altPath ? img[altPath] : ''} gridColumn={1} gridRow={1 / 3}/>
            </PhotoWrap>
          )
        }
      </PhotoGrid>
      {popupOpened &&
        <Lightbox
          mainSrc={images[photoIdx].mediaItemUrl}
          imageTitle={<div dangerouslySetInnerHTML={{__html: images[photoIdx].description}}/>}
          nextSrc={images[(photoIdx + 1) % images.length]}
          prevSrc={images[(photoIdx + images.length - 1) % images.length]}
          onMovePrevRequest={() => setPhotoIdx((photoIdx + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIdx((photoIdx + images.length + 1) % images.length)}
          onCloseRequest={() => handleOpen()}
        />
      }
    </>
  )
}


const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const PhotoWrap = styled.div`
  background: red;
  cursor: pointer;

  ${props => props.customStyle}
`;

const Photo = styled.img`
  object-fit: cover;

  height: 100%;
  width: 100%;
`;

export default PhotoGallery
