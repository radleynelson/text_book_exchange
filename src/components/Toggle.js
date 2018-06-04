import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';



//const styles = {
//    section: {
//        margin: 'auto'
//        
//    },
//}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        
        this.state = {
            visibility: false,
        };
       
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility 
            };
        });
    }
    render() {
        return(
            <Columns>
            <Columns.Column size={12}>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? '^' : 'Learn More'}</button>
                <p>{this.state.visibility && 'Textbook exchange was created for students, by students.'}</p>
            </Columns.Column>
            </Columns>
        );
    }
}

export default Toggle;