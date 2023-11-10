export type CalculatorStepsType = {
     from: number|null;
     to: number|null;
     steps: number|null;
}

export type CalculatorFormData = {
     amplitudo: number|null;
     szogsebesseg: number|null;
     fuggveny: string;
     calc: CalculatorStepsType;
}

export enum FuncType {
     SebessegIdo = 'sebesseg_ido',
     GyorsulasIdo = 'gyorsulas_ido',
     KiteresIdo = 'kiteres_ido',
}