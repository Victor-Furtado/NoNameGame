import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiChevronsDown } from "react-icons/fi";

const Log = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-wrap: nowrap;
    background-color: black;
    font-family: monospace;
    overflow: scroll;
    scroll-behavior: smooth;
`

const LogBox = styled.div`
    margin: 8px 16px;
    padding: 0px 16px;
    background-color: white;
    transition: 0.3s;
    &:hover {
        background-color: #ccc;
    }
    border-radius: 5px;
    position: relative;
`

const LogBoxTitle = styled.h1`
    color: ${({ color }) => color};
    font-size: 1.3rem;
`

const LogBoxBody = styled.p`
    font-size: 1rem;
`

const LogTime = styled.p`
    position: absolute;
    bottom: 0%;
    right: 4%;
    color: gray;
    font-size: 0.8rem;
`

const BackToBottom = styled.button`
    display: ${({ visible }) => visible ? 'block' : 'none'};
    position: absolute;
    bottom: 32px;
    right: 16px;
    border-radius: 100%;
    background-color: DodgerBlue;
    border: none;
    color: white;
    padding: 0 16px
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: RoyalBlue;
    }
`

const Logs = () => {

    const scroll = useRef();
    // const [scrollTop, setScrollTop] = useState(0);
    const [buttomVisible, setbuttomVisible] = useState(false);

    const onScroll = () => {
        // const scrollY = window.scrollY
        const scrollTop = scroll.current.scrollTop
        setbuttomVisible(scrollTop !== scroll.current.scrollHeight - 945);
        // setScrollTop(scrollTop);
    }

    const scrollBottom = () => {
        scroll.current.scrollTo(0, scroll.current.scrollHeight);
    }

    useEffect(scrollBottom, []);

    return (
        <Log ref={scroll} onScroll={onScroll}>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((a, i) => (
                <LogBox key={i}>
                    <LogBoxTitle color='blue' >NOME DA ENTINDADE {i}</LogBoxTitle>
                    <LogBoxBody>DESCRIÇÃO DA AÇÃO</LogBoxBody>
                    <hr />
                    <LogBoxBody>EFEITO</LogBoxBody>
                    <LogTime>00:00</LogTime>
                </LogBox>
            ))}
            <BackToBottom visible={buttomVisible} onClick={scrollBottom} ><FiChevronsDown size={32} /></BackToBottom>
        </Log>
    );
}

export default Logs;