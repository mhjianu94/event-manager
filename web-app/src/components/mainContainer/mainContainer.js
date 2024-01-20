import './styles.css';

const MainContainer = (props) => {
    return (       
<div>
    <div className="col-lg-8 mx-auto p-4 py-md-5">
    <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
            <span className="fs-4">Event Manager</span>
        </a>
    </header>

    <div className= "bodyContainer">
        <h1 className="text-body-emphasis">Plan your event</h1>
        <p className="fs-5 col-md-8">
        Effortlessly organize and schedule your event with our intuitive planning tools. Whether it's a professional conference, a family gathering, or a social celebration, our platform simplifies the process, ensuring every detail is covered. From selecting dates to coordinating attendees, our user-friendly interface makes event planning a breeze.</p>
        <div className="mb-5">
        </div>
        <div className="split-container">
            {props.userForm}
            {props.eventForm}
        </div>
        <div className="split-container">
            {props.userList}
        </div>
        {props.bingMaps}
    </div>
    </div>
</div>
    )}

export default MainContainer








