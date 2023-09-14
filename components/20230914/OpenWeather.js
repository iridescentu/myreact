import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    width: 500px;
    height: 300px;
    background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    color: white;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Icon = styled.div`
    text-align: center;
    img {
        width: 100%;
        margin-top: 20px;
    }
`

const Weather = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
    padding-top: 20px;
    padding-right: 30px;
`

const Temp = styled.div`
    font-size: 4.5rem;
    margin-top: 20px;
    i {
        font-size: 3.5rem;
    }
`

const City = styled.div`
    font-size: 2.5rem;
`

const Info = styled.div`
    font-size: 1.5rem;
    margin-top: 30px;
`

export function OpenWeather() {
    const API_KEY = "42828e8785c3a0ceef09bf8effb4f04e";
    const [icon, setIcon] = useState(null);
    const [temp, setTemp] = useState(0);
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    

    // useEffect() 후크
    // 1. 특정한 state의 변화에만 실행되는 코드를 내부에 정의할 수 있음
    // 2. component가 최초에 로딩될 때 단 한 번만 실행되는 코드를 정의할 수 있음
    //     ㄴ> 2 번째 parameter에 배열 형식으로 의존하는 state를 결정할 수 있음
    //     ㄴ> 빈 배열([])을 사용하면 최초 로딩시 단 한 번만 실행됨
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(geoOK, geoError);
    }, []);

    function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        setCity(data.name);
        setTemp(parseInt(data.main.temp));
        setIcon(data.weather[0].icon);
        setWeather(data.weather[0].main);
    }).catch((error) => {
        console.log("요청이 실패했습니다.", error);
    });
    }

    function geoError() {
        alert("현재 위치 정보를 찾을 수 없습니다.");
    }
    return (
        <>
            <Container>
                <Card>
                    <Icon>
                        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                    </Icon>
                    <Weather>
                        <Temp>{temp}<i className="ti ti-temperature-celsius"></i></Temp>
                        <City>{city}</City>
                        <Info>{weather}</Info>
                    </Weather>
                </Card>
            </Container>
        </>
    );
}