import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Jest test', () => {
    it('tests', () => {
        expect(true);
    });

    it('tests react components', async () => {
        render(<div>NEVER GONNA GIVE YOU UP!</div>);
        // expect screen to contain text
        expect(
            screen.getByText('NEVER GONNA GIVE YOU UP!')
        ).toBeInTheDocument();
    });
});
