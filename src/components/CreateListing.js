import React from 'react';
import CreateListingForm from './CreateListingForm';

    
//  list of the user's textbooks for sale

class CreateListing extends React.Component {
    render() {
        return (
            <div> 
                <h1>List your textbook!</h1>
                <h4>Fill out the form  below to start selling your textbook. Hover over the information icons for details about each form field.</h4>
                <br></br>
                <CreateListingForm />
            </div>
        );
    };
}

export default CreateListing;