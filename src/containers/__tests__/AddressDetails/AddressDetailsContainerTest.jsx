import React from 'react';
import { render } from '@testing-library/react';

import AddressDetailsContainer from "../../AddressDetails/AddressDetailsContainer";



describe('Address Details Component', () => {


    it('should match snapshot', () => {
        const { container } = render(<AddressDetailsContainer />);

        expect(container).toMatchSnapshot();
    });

});
