import React from 'react';
import { render } from '@testing-library/react';

import ProductDetailsContainer from "../../ProductDetails/ProductDetailsContainer";


jest.mock('../../../components/ProductInformation',()=>()=>(<div>Dummy Product Information Component</div>));

describe('Product Details Component', () => {


    it('should match snapshot', () => {
        const { container } = render(<ProductDetailsContainer />);

        expect(container).toMatchSnapshot();
    });
});
