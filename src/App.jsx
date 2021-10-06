import styled from "styled-components";
import Action from "./components/Actions";
import Logs from "./components/Logs";

const Screen = styled.div`

    display: flex;
    height: 100vh;
`

const Sheet = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    background-color: palevioletred;
`

const Game = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: seagreen;
`

const Grid = styled.div`
    flex: 3;
    background-color: seagreen;
`


const App = () => {
    return (
        <Screen>
            <Sheet>FICHA</Sheet>
            <Game>
                <Grid>GRID</Grid>
                <Action />
            </Game>
            <Logs />
        </Screen>
    );
}

export default App;