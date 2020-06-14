export interface Totals {
    subTot: number;
    tax: number;
    grandTot: number;
  }
  
  export interface CartItem {
    price: number;
    image: string;
    name: string;
    details: string;
    heart: boolean;
    uuid?: any;
    remove?: boolean;
  }
  
  export interface StateTree {
    store: CartItem[];
    cart: CartItem[];
    tot: Totals,
    checkout: boolean;
  };