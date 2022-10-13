import { render, renderHook, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExperApp/>>', () => {
    test('busqueda inicial One Punch', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('One Punch')).toBeTruthy();

    });
});