import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    width: 300px;
    background-color: ${(props) => props.bgcolor};
    box-shadow: 1px 2px 5px gray;
    padding: 10px;
    margin-bottom: 20px;
`;

const Bold = styled.p`
font-weight: 700;
font-size: 2rem;
color: dodgerblue;
`

// export function Avatar(props) {
//     return (
//     <>
//     <Container bgcolor={props.bgcolor}>
//         <div>
//             <Bold>{props.person.name}</Bold>
//             <p>Job: {props.person.job}</p>
//             <p>Country: {props.person.country}</p>
//             <hr />
//         </div>
//     </Container>
//     </>
//     );
// }

// Line 18 ~ Line 31까지의 코드를 Line 34 ~ Line 45처럼 쓸 수 있음
export function Avatar({bgcolor, person: {name, job, country}}) {
    return (
        <>
        <Container bgcolor = {bgcolor}>
            <div>
                <Bold>{name}</Bold>
                <p>Job: {job}</p>
                <p>Country: {country}</p>
                <hr />
            </div>
        </Container>
        </>
    )
}