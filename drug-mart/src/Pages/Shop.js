import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts, setProducts} from '../Actions/productActions';
import Product from '../Components/Product'

class Shop extends React.Component{

    componentDidMount() {
        
        let products = JSON.parse(localStorage.getItem('shopItems')) || [];
        if(products === undefined || products.length == 0){
          this.props.dispatch(fetchProducts());
        }else{
          this.props.dispatch(setProducts(products));
        }
      }

    render(){
        const { error, loading, products } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
          }
      
          if (loading) {
            return <div>Loading...</div>;
          }
      
          return (
            <div className="row text-center">
              {products.map(product =>
                <div key={product.id} className="col-md-6 col-lg-4" >
                    <div className="card mb-3">
                        <Product isCart={false} product={product} />
                    </div>
                </div>
              )}
            </div>
          );
    }
}

const mapStateToProps = state => ({
    products: state.ProductReducer.items,
    loading: state.ProductReducer.loading,
    error: state.ProductReducer.error
  });

const ConnectedShop = connect(mapStateToProps)(Shop);

export default ConnectedShop;


