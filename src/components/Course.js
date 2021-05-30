const Course = ({course}) => {
    /* MOSTRANDO CADA DADO EM SUA RESPECTIVA COLUNA */
    return(        
        <tr>
            <td>{course.name}</td>
            <td>{course.duration}</td>
            <td>{course.startDate}</td>
            <td>{course.endDate}</td>
        </tr>
    )
}

export default Course