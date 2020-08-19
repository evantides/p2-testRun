const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, name, isGreen} = this.props.vegetable;
        return (
            <div>
                <h1>Edit Page</h1>
                {/* url - /fruits/id_of_fruit? parameter to indicate the request */}
                <form action={`/vegetables/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name}/> <br/>
                    Is it Green? : <input type="checkbox" name="isGreen" defaultValue={isGreen}/> <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;