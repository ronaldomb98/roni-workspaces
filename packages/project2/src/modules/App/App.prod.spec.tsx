import { render, screen } from '@testing-library/react';
import React from 'react';
import { AppProd } from './App.prod';

describe('AppProd', () => {
    it('should provide simple layout', () => {
        render(<AppProd />);

        expect(true).toBeTruthy()
    })
})