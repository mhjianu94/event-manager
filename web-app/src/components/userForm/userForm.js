import './styles.css';

const UserForm = () => {
    return (
        <div class="user-form-container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">Add a valid email adress</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Name"/>
                     <small id="emailHelp" class="form-text text-muted">Add your first and last name</small>
                </div>
                <button class="btn btn-primary submitButton" type="submit" >Submit</button>
            </form>
        </div>
)}

export default UserForm