import type { CalculatorFormData } from "./types"

export default () => {
     return {
          classList: 'resize-none transition-colors duration-150 block w-full px-4 py-3 text-sm rounded border-2 text-gray-600 bg-gray-100 border-gray-100 hover:bg-gray-200 hover:border-gray-200 focus:border-green-400 active:border-green-500 my-1.5',
          form: {
               amplitudo: null,
               szogsebesseg: null,
               fuggveny: 'sebesseg_ido',
               calc: {
                    from: null,
                    to: null,
                    steps: null
               }
          } as CalculatorFormData
     }
}