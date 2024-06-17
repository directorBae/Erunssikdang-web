import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

interface KakaoMapProps {
  lat: number;
  lng: number;
}

const KakaoMap = ({ lat, lng }: KakaoMapProps) => {
  useEffect(() => {
    const KakaoMapContainer = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };

    const map = new kakao.maps.Map(KakaoMapContainer, options);
  });

  return (
    <div id="map" style={{ width: "100%", height: "100%", borderRadius: 12 }} />
  );
};

export default KakaoMap;
