// Try... catch
// Якщо виклик функції може завершитися помилкою, рекомендується обернути його блоком try...catch.

const runCode = () => {
   console.log('Step 1')
   try {
      getData()
   } catch (error) {
      console.error(error)
   }
   console.log('Step 2')
}
