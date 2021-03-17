import logoImg from '../../assets/logo.svg'
import { Container, Content} from './Styles'

export function Header() {
    return (
        <Container>
            <Content>
            <img src={logoImg} alt={'dt money'}/>
            <button type="button">Nova transação</button>
            </Content>
        </Container>
    )
}