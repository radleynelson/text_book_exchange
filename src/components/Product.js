import React from 'react';
import { Card } from 'react-bulma-components/full';
import { Media } from 'react-bulma-components/full';
import { Content } from 'react-bulma-components/full';
import { Heading } from 'react-bulma-components/full';
import { Button } from 'react-bulma-components/full';
import {Link} from 'react-router-dom';

class Product extends React.Component {
  render(){
    return (
      <div>
        <Card>
          <Card.Image size='4by3' src={this.props.Image} />
          <Card.Content>
            <Media>
            <Media.Item>
              <Heading size={3}>
              Title: {this.props.Title}
              </Heading>
              <Heading subtitle size={6}>
              Author: {this.props.Author}
              </Heading>
              <Heading size={5}>
                <Link to={'/listing/'+this.props.Id}>
                  <Button>
                    View Listing
                  </Button>
                </Link>

              </Heading>
            </Media.Item>

            </Media>
            <Content>
              {this.props.ShortDescription}
              <br/>
              <br/>
              <time dateTime="2016-1-1">
              Posted On: {this.props.DatePosted}
              </time>
            </Content>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default Product;
