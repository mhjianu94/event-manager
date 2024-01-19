import './styles.css';

const MainContainer = (props) => {
    return (       
<div>
    <div class="col-lg-8 mx-auto p-4 py-md-5">
    <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
            <span class="fs-4">Event Manager</span>
        </a>
    </header>

    <div class= "bodyContainer">
        <h1 class="text-body-emphasis">Plan your event</h1>
        <p class="fs-5 col-md-8">
        Effortlessly organize and schedule your event with our intuitive planning tools. Whether it's a professional conference, a family gathering, or a social celebration, our platform simplifies the process, ensuring every detail is covered. From selecting dates to coordinating attendees, our user-friendly interface makes event planning a breeze.</p>
        <div class="mb-5">
        </div>
        {props.userForm}
    </div>
    </div>
</div>
    )}

export default MainContainer








