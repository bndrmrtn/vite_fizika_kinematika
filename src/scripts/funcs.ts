// v(t) = Aω * cos(ω * t)
export const sebessegIdoFuggv = (t: number, a: number, w: number) => {
     return a * w * Math.cos(w * t)
}

// a(t) = Aω * sin(ω * t)
export const gyorsulasIdoFuggv = (t: number, a: number, w: number) => {
     return a * w * Math.sin(w * t)
}

// y(t) = A * sin(ω * t)
export const kiteresIdoFuggv = (t: number, a: number, w: number) => {
     return a * Math.sin(w * t)
}