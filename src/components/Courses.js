import Course from '../components/Course.js'

const Courses = ({courses}) => {
    console.log({courses})
    return(
        <table>
            <tbody>
                <tr>
                    <th>Nome</th>
                    <th>Duração</th>
                    <th>Data de Início</th>
                    <th>Data de Fim</th>
                </tr>
                
                <>{/* MAPEANDO O ARRAY DE CURSOS PARA MOSTRAR SEUS DADOS NA TABELA */}
                    {
                        courses.map((course) => (
                            <Course key={course.id} course={course} />
                        ))                
                    }
                </>
            </tbody>
        </table>
    )
}

export default Courses