const Course = ({course}) => {
    return(
        <tr>
            <td>{course.name}</td>
            <td>{course.startDate}</td>
            <td>{course.endDate}</td>
            <td>{course.duration}</td>
            <td>{course.desc}</td>
        </tr>
    )
}

export default Course