import { HistoryContainer, HistoryList } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>Meu hist�rico</h1>

            <HistoryList>   
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Dura��o</th>
                            <th>In�cio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>H� 2 meses</td>
                            <td>Conclu�do</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>H� 2 meses</td>
                            <td>Conclu�do</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>H� 2 meses</td>
                            <td>Conclu�do</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>H� 2 meses</td>
                            <td>Conclu�do</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>H� 2 meses</td>
                            <td>Conclu�do</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>H� 2 meses</td>
                            <td>Conclu�do</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>H� 2 meses</td>
                            <td>Conclu�do</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}