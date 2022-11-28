
import React from 'react';
// import { Table, Button } from 'react-bootstrap';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: []
    }
  }

  componentDidMount() {
    const apiUrl = 'https://api.publicapis.org/entries';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            products: result.entries
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, products} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div className='content'>
          <h2>Product List</h2>
          <table>
            <thead>
              <tr>
             
                <th className='content'>API</th>
                <th className='content'>Cors</th>
                <th className='content'>Auth</th>
                <th className='content'>Description</th>
                <th className='content'>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.API}>
                  <td>{product.API}</td>
                  <td>{product.Cors}</td>
                  <td>{product.Auth}</td>
                  <td>{product.Description}</td>
                  <td><button variant="info" onClick={() => this.props.editProduct(product.id)}>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default ProductList;
