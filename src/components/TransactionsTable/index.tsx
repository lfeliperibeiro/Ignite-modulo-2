import { Container } from './Styles'
export function TransactionsTable() {
    return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento de website</td>
                    <td className={'deposit'}>R$12,000</td>
                    <td>Desenvolvimento</td>
                    <td>17/03/2021</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Aluguel</td>
                    <td className={'withdraw'}>- R$1.000</td>
                    <td>Casa</td>
                    <td>10/03/2021</td>
                </tr>
            </tbody>
        </table>
    </Container>
    )
}