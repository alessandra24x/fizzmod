import React, {Component, Fragment} from "react"

class Header extends Component {
    render() {
        let {links} = this.props
        return (
            <Fragment>
                <header>
                    <h1>SPA</h1>
                    <nav>
                    {links.map(link =>
                        <a href="#" key={link}>{link}</a>
                    )}
                    </nav>
                </header>
            </Fragment>
        )
    }
}

export default Header
