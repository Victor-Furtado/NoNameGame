import { useState } from "react";
import styled from "styled-components";

const Actions = styled.div`
    display: flex;
    flex: 1;
    align-items:center;
    justify-content:center;
    background-color: ${({ color }) => color ? color : 'black'};
    font-family: Helvetica, Sans-Serif;
    overflow: scroll;
    scroll-behavior: smooth;
    align-items: stretch;
`

const Card = styled.div`
    flex: 1;
    display: flex;
    align-items:end;
    justify-content:center;
    margin: 8px 16px;
    padding: 0px 8px;
    background-color: ${({ color }) => color ? color : 'black'};
    transition: 0.3s;
    &:hover {
        background-color: dimgrey;
    }
    border-radius: 5px;
    position: relative;
    max-width: 10rem;
    background-position: top center;
    background-repeat:no-repeat;
    ${({ img }) => (img ? `background-image: url(/img/actions/${img}.svg)` : '')};
    cursor: pointer;
`

const CardHeader = styled.h1`
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.4rem;
`

const cards = [
    { img: 'strike', color: 'firebrick', text: 'atacar' },
    { img: 'walk', color: 'cornflowerblue', text: 'movimentar' },
    { img: 'talk', color: 'darkolivegreen', text: 'conversar' },
    { img: 'interact', color: 'goldenrod', text: 'interagir' },
    { img: 'inventory', color: 'lightslategray', text: 'inventário' },
    { img: 'magic', color: 'indigo', text: 'habilidades' },
];

const Action = () => {

    const [action, setAction] = useState('');

    const handleAction = (act) => () => setAction(act);

    return (
        <Actions>
            {cards.map((card) => (
                <Card key={card.img} img={card.img} color={card.color} onClick={handleAction(card.img)}>
                    <CardHeader>{card.text}</CardHeader>
                </Card>
            ))}
        </Actions>
    )
}

export default Action;