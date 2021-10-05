import styled from "styled-components";
import ActionCard from "./ActionCard";

const Actions = styled.div`
    flex: 1;
    background-color: coral;
`

const Action = () => {
    return (
        <Actions>
            <ActionCard />
        </Actions>
    );
}
 
export default Action;