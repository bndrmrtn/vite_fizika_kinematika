import { gyorsulasIdoFuggv, kiteresIdoFuggv, sebessegIdoFuggv } from "./funcs";
import { FuncType, type CalculatorFormData, type CalculatorStepsType } from "./types"


const calculate = (data: CalculatorFormData) => {
     const fuggveny: FuncType = data.fuggveny as FuncType;
     let fuggv, label
     if(fuggveny == FuncType.SebessegIdo) {
          fuggv = sebessegIdoFuggv
          label = 'v(t) = Aω * cos(ω * t)'
     } else if(fuggveny == FuncType.GyorsulasIdo) {
          fuggv = gyorsulasIdoFuggv
          label = 'a(t) = Aω * sin(ω * t)'
     } else {
          fuggv = kiteresIdoFuggv
          label = 'y(t) = A * sin(ω * t)'
     }
     return getDiagramData(fuggveny, fuggv, data.calc, data.amplitudo || 0, data.szogsebesseg || 0, label)
}

const getDiagramData = (ftype: FuncType, func: (t: number, a: number, w: number) => number, steps: CalculatorStepsType, a: number, w: number, label: string): object => {
     const data: Array<number> = []
     const labels: Array<string> = []
     for(let i = (steps.from || 0); i <= (steps.to || 10); i += (steps.steps || 1)) {
          data.push(func(i, a, w))
          labels.push('t(' + i + ')')
     }
     return {labels, data, label}
}

export {
     calculate
}
