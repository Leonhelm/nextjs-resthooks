import Resource from './Resource';

export type Currency = "RUB" | "USD" | "EUR";
export type CurrencyLowercase = "rub" | "usd" | "eur";

class FondResource extends Resource {
  static urlRoot = 'https://virtserver.swaggerhub.com/mikhailborodin/finex_api/1.1.0/fonds';

  readonly ticker: string = '';
  readonly name: string = '';
  readonly icon_svg: string = '';
  readonly country: string = '';
  readonly quote: string = '';
  readonly class_active: string = '';
  readonly currency_fond: Currency | null = null;
  readonly currency_trading: Currency[] = [];
  readonly yield: {
    [key in CurrencyLowercase]: string;
  } | {} = {};

  pk() {
    return this.ticker;
  }
}

export default FondResource
