import React from 'react';
import { render } from '@testing-library/react';
import ProductInformation from "../ProductInformation";




describe('Product Information Component tests', () => {


    it('should match snapshot', () => {
        const { container } = render(<ProductInformation/>);

        expect(container).toMatchSnapshot();
    });

});
