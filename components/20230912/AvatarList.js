import styled from "styled-components";
import { Avatar } from "./Avatar";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const persons = [
    {name: "Steve", job: "Programmer", country: "대한민국"},
    {name: "다혜", job: "Programmer", country: "대한민국"},
    {name: "채영", job: "Programmer", country: "대한민국"},
    {name: "혜정", job: "Programmer", country: "대한민국"},
];

const colors = ["lightgreen", "lightyellow", "lightblue", "lightpink"];

export function AvatarList() {
    return (
    <>
        <Container>
            {
                persons.map((p, i) => (
                    <Avatar bgcolor={colors[i]} person={p} />
                ))
            }
        </Container>
    </>
    )
}


// export function AvatarList() {
//     return (
//         <>
//         <Container>
//             <Avatar
//             bgcolor = "lightgreen"
//             person = {{name: "Steve", job: "Programmer", country: "대한민국"}}
//             />
//             <Avatar
//             bgcolor = "lightyellow"
//             person = {{name: "다혜", job: "Student", country: "대한민국"}}
//             /><Avatar
//             bgcolor = "lightblue"
//             person = {{name: "채영", job: "Student", country: "대한민국"}}
//             /><Avatar
//             bgcolor = "lightpink"
//             person = {{name: "혜정", job: "Student", country: "대한민국"}}
//             />
//         </Container>
//         </>
//     )
// }