const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <>
                <h1>Vegetables Index Page</h1>
                {this.props.vegetables.map((vegetable)=> {
                    return (
                        <div key={vegetable._id}>
                            <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a>
                            <p>{vegetable.isGreen ? `It is Green` : `Is not Green`}</p>
                            <form action={`/vegetable/${vegetable._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="delete"/>
                            </form>
                            <a href={`/vegetables/${vegetable._id}/edit`}>Edit</a>
                        </div>
                    )
                })}
            </>
        )
    }
}

module.exports = Index;