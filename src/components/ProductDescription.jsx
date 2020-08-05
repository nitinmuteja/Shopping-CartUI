import React from 'react';
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";

class ProductDescription extends React.Component {
    render() {

        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h2>Harry Potter and the Philosopher's Stone</h2>
                    <br/>
                    <Grid item xs={10}/>
                    <Grid item xs={2}>

                        by JK Rowling
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    Rating: 4
                </Grid>


                <Grid item xs={12}>
                    Price: 4
                </Grid>
                <Grid item xs={12}>
                    <h4>Book Description:</h4>
                    <p>
                        Hi, I'm Keshav, and my life is screwed. I hate my job and my girlfriend left me Hi, I'm Keshav,
                        and my life is screwed. I hate my job and my girlfriend left meHi, I'm Keshav, and my life is
                        screwed. I hate my job and my girlfriend left me
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel htmlFor="uncontrolled-native">Quantity</InputLabel>
                    <NativeSelect
                        defaultValue={10}
                        inputProps={{
                            name: 'name',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value=""/>
                        <option value={10}>1</option>
                        <option value={20}>2</option>
                        <option value={30}>5</option>
                    </NativeSelect>
                </Grid>

                <Grid item xs={6} >
                    <Box pt={24}>
                    <Button variant="outlined" color="primary">
                        Quick Buy
                    </Button>
                    </Box>
                </Grid>
                <Grid item xs={6}/>



            </Grid>

        )


    }


}

export default ProductDescription;