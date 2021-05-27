const Course = ({course}) => {
    return(
        <tr>
            <td>{course.name}</td>
            <td>{course.startDate}</td>
            <td>{course.endDate}</td>
            <td>{course.duration}</td>
        </tr>
    )
}

export default Course