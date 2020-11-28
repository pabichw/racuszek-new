import React from "react"
import dynamic from "next/dynamic"

const MapContent = dynamic(import('../components/LeafletMap'), {
  ssr: false,
  loading: () => (
    <div style={{textAlign: 'center', paddingTop: 20}}>
      Loading…
    </div>
  )
})

const Map = ({position}) => {
  return (
    <MapContent position={position}/>
  )
}

export default Map
