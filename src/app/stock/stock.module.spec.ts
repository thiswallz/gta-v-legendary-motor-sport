import { StockModule } from './stock.module';

describe('StockModule', () => {
  let stockModule: StockModule;

  beforeEach(() => {
    stockModule = new StockModule();
  });

  it('should create an instance', () => {
    expect(stockModule).toBeTruthy();
  });
});
