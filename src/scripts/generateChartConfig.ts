import type { ChartData } from "chart.js"
import type { Point } from "node_modules/chart.js/dist/core/core.controller"

/* eslint-disable @typescript-eslint/no-unused-vars */
export default (dataset: Array<number>, labels: Array<string>, label: string) => {
     console.log(dataset, labels)
     return {
          data: {
               labels: labels,
               datasets: [
                    {
                         label: label,
                         backgroundColor: '#4ade80',
                         data: dataset,
                    }
               ]
          } as ChartData<"line", (number | Point | null)[], unknown>,
          options:  {
               responsive: true,
               maintainAspectRatio: false
          }
     }
}
