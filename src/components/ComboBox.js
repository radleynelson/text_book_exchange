import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const schools = [
  'Brigham Young University',
  'Utah Valley University',
  'University of Utah',
  'Utah State University',
  
];

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class SelectFieldExampleMultiSelect extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return schools.map((school) => (
      <MenuItem
        key={school}
        insetChildren={true}
        checked={values && values.indexOf(school) > -1}
        value={school}
        primaryText={school}
      />
    ));
  }

  render() {
    const {values} = this.state;
    return (
      <SelectField
        multiple={true}
        hintText="Select a school"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}