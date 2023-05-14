ar = [1,2,3,4,5,6,7]

console.log(ar.reduce((res, cur) => {
   return cur < res ? cur : res;
}))

console.log(ar.reduce((res,cur) => {
   if (cur < res[0]){
      res[0] = cur
   } else if (cur > res[1]) {
      res[1] = cur
   }
   return res
}, [Number.MAX_VALUE, Number.MIN_VALUE]))


// проходит массив и выполняет переданную функцию, возвращая результат
// второй параметр начальное значение