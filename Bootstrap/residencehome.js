const places = ['서울 서초구 반포대로 222', '분당 무지개마을', '민락초등학교', '심곡서원'];
    const roadBaseUrl = 'https://business.juso.go.kr/addrlink/addrLinkApi.do';
    const kakaoBaseUrl = 'https://dapi.kakao.com/v2/local/search/address.json';
    const params1 = 'currentPage=1&countPerPage=5';
    const params3 = `confmKey=${roadAddrKey}&resultType=json`;
    window.onload = () => {
        const kakaoScript = document.createElement('script');
        kakaoScript.src = `http://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoJsKey}&autoload=false`;
        kakaoScript.onload = () => {
            kakao.maps.load(async () => {
                let coords = [];
                let sumLat = 0.0, sumLon = 0.0;
                let ul = document.getElementById('list');
                for (let place of places) {
                    const coord = await getCoord(place);
                    coords.push(coord);
                    sumLat += coord.lat;
                    sumLon += coord.lon;
                }
                drawMaps(coords, sumLat/coords.length, sumLon/coords.length);
            });
        };
    document.head.appendChild(kakaoScript);
    }

    async function getCoord(place) {
        try {
            const params2 = `keyword=${encodeURIComponent(place)}`;
            const roadUrl = `${roadBaseUrl}?${params1}&${params2}&${params3}`;

            let response = await fetch(roadUrl);
            let result = await response.json();
            let roadAddr = result.results.juso[0].roadAddr;

            let kakaoUrl = `${kakaoBaseUrl}?query=${encodeURIComponent(roadAddr)}`;
            let header = { Authorization: `KakaoAK ${kakaoRestKey}` };
            response = await fetch(kakaoUrl, { headers: header });
            result = await response.json();
            let lat = parseFloat(result.documents[0].y);
            let lon = parseFloat(result.documents[0].x);
            return {place, roadAddr, lat, lon};
        } catch(error) {
            console.log(error);
            return {place, roadAddr:null, lat:null, lon:null};
        }
    }

    function drawMaps(coords, centerLat, centerLon) {
        let container = document.getElementById('map'); 
        let center = new kakao.maps.LatLng(centerLat, centerLon);
        let map = new kakao.maps.Map(container, { center, level: 10 });

        for (let coord of coords) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(coord.lat, coord.lon)
            }); 
            let infowindow = new kakao.maps.InfoWindow({
                content : `<div style="padding:5px;">${coord.place}<br>${coord.roadAddr}</div>`
            });
            kakao.maps.event.addListener(marker, 'mouseover', () => {
                infowindow.open(map, marker);
            });
            kakao.maps.event.addListener(marker, 'mouseout', () => {
                infowindow.close();
            });
        }
    }