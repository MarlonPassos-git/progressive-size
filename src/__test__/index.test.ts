import { progressiveClamp }from '../index';

describe('Testando lib', () => {
    it('Deve retornar um valor', () => {
        expect(true ).toBe(true);
    });
    it('Deve retornar um valor', () => {
        expect(progressiveClamp(60, 96, 450)).toMatchInlineSnapshot(`"max(3.75rem, min(calc( 2.7272727272727275rem + 3.6363636363636362vw ), 6rem))"`);
    });
})
