export default function Student(props) {
    return(
        <div className="stud">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Attendence:{props.attendence ? "yes":"no"}</p>

        </div>
    );
    
}