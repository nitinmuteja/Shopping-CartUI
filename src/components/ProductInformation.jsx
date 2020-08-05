import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProductDescription from "./ProductDescription";

class ProductInformation extends React.Component {
    render() {

        return (
            <Grid container spacing={3}>
                <Grid item xs={4}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/51ifu1aebKL._SX332_BO1,204,203,200_.jpg" alt="Book" width="100%" height="70%"/>
                </Grid>
                <Grid item xs={8}>
                <ProductDescription />
                </Grid>
            </Grid>

        )


    }


}

export default ProductInformation;