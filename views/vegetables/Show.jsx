const React = require('react');

class Show extends React.Component {
    render() {
        const { name, isGreen, _id } = this.props.vegetable;
        return (
            <div>
                <h1>Vegetable Show Page</h1>
                <p>This is a(n) {name} </p>
                <p>{isGreen ? `It is Green` : `Is not Green`}</p>
                <form action={`/vegetable/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete"/>
                </form>
                <a href={`/vegetable/${_id}/edit`}>Edit</a>
            </div>
        )
    }
}

module.exports = Show;