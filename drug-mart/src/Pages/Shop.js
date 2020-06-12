import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts, setProducts} from '../Actions/productActions';
import Product from '../Components/Product'

let isLoggedIn;

class Shop extends React.Component{

    componentWillMount() {
        
        let products = JSON.parse(localStorage.getItem('shopItems')) || [];
        if(products === undefined || products.length == 0){
          this.props.dispatch(fetchProducts());
        }else{
          this.props.dispatch(setProducts(products));
        }

        if(this.props.user !== undefined && this.props.user.id !== -1){
          isLoggedIn = true;
        }else{
           isLoggedIn = false;
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
            {!isLoggedIn ? <p className="col-12 alert-danger">Please login to add items to cart</p>: <span></span>}
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
    error: state.ProductReducer.error,
    user: state.UserReducer.user
  });

const ConnectedShop = connect(mapStateToProps)(Shop);

export default ConnectedShop;


