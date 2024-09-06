export default function ImcTable() {
    return (
        <div className="imc-table">
            <h1>IMC Table</h1>
            <table>
                <thead className="imc-table-header">
                    <tr>
                        <th className="imc-subtitle">IMC</th>
                        <th className="imc-subtitle">Classificação</th>
                    </tr>
                </thead>
                <tbody className="imc-table-info">
                    <tr>
                        <td className="col-1">Menor que 18,5</td>
                        <td className="col-2">Magreza</td>
                    </tr>
                    <tr>
                        <td className="col-1">Entre 18,5 e 24,9</td>
                        <td className="col-2">Normal</td>
                    </tr>
                    <tr>
                        <td className="col-1">Entre 25,0 e 29,9</td>
                        <td className="col-2">Sobrepeso</td>
                    </tr>
                    <tr>
                        <td className="col-1">Entre 30,0 e 34,9</td>
                        <td className="col-2">Obesidade Grau I</td>
                    </tr>
                    <tr>
                        <td className="col-1">Entre 35,0 e 39,9</td>
                        <td className="col-2">Obesidade Grau II</td>
                    </tr>
                    <tr>
                        <td className="col-1">Maior que 40,0</td>
                        <td className="col-2">Obesidade Grau III</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
