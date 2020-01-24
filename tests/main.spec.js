// yarn test || npm test

describe('Main', () => {
  before(() => {
    // Roda uma vez antes do bloco; "hooks"
    console.log('before');
  });

  after(() => {
    // Roda uma vez depois do bloco "hooks"
    console.log('after');
  });

  beforeEach(() => {
    // Roda uma vez antes de cada bloco "hooks"
    console.log('beforeEach');
  });

  afterEach(() => {
    // rota todas as vezes depois de cada bloco "hooks"
    console.log('afterEach');
  });

  context('Case 1', () => {
    it('Should happen blabla', () => {
      // Espera oque aconteça;
      // Entra de dados / método sum(2,2);
      // Espera retornar (4) => true | (3) => false => broken test;
      console.log('1');
    });
  });

  context('Case 2', () => {
    it('Should happen example', () => {
      // Espera oque aconteça;
      // Entra de dados / método sum(2,2);
      // Espera retornar (4) => true | (3) => false => broken test;
      console.log('2');
    });
  });
});

describe('Method A', () => {
  context('Case 1', () => {
    it('Should happen blabla', () => {
      // Espera oque aconteça;
      // Entra de dados / método sum(2,2);
      // Espera retornar (4) => true | (3) => false => broken test;
    });
  });

  context('Case 2', () => {
    it('Should happen example', () => {
      // Espera oque aconteça;
      // Entra de dados / método sum(2,2);
      // Espera retornar (4) => true | (3) => false => broken test;
    });
  });
});
