import Course from '../components/Course.js'

const Courses = ({courses}) => {
    console.log('+++++ Courses +++++')
    console.log({courses})
    return(
        <table>
            <tbody>
                <tr>
                    <th>Nome</th>
                    <th>Data de Início</th>
                    <th>Data de Fim</th>
                    <th>Duração</th>
                    <th>Descrição</th>
                </tr>
                
                <>
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