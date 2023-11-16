import React, { useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black; /* 초기 배경색을 검은색으로 설정 */
  overflow: hidden;
`;

const Img = styled.div`
  img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.3s;
    clip-path: ${({ clipPath }) => clipPath};
  }
`;

export function Project() {
  const [clipPath, setClipPath] = useState("circle(0% at 50% 50%)");
  const containerRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const newClipPath = `circle(10% at ${x * 100}% ${y * 100}%)`;

    setClipPath(newClipPath);

    // 이미지가 나타났을 때 imageVisible 상태를 변경
    if (!imageVisible) {
      setImageVisible(true);
    }
  };

  return (
    <Container id="container" onMouseMove={handleMouseMove} ref={containerRef}>
      <Img visible={imageVisible} clipPath={clipPath}>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/3fB/image/kjMylmz1l3n492Dx_Qjn14fwVCg.jpg"
          alt="1"
        />
      </Img>
    </Container>
  );
}
