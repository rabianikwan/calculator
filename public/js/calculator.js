const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1 , num2) => num1 * num2;
const divide = (num1, num2) => num1/num2;
const power = (num1, num2) => num1 ** num2;
const squareRoot = (num) => Math.sqrt(num)
const metode = (num1, num2, operator) => operator(num1, num2)

let angka1 = document.querySelector('.angka1')
console.log(angka1)


let operator;

$('.operator').click(function () {
    let op = this.innerHTML.toLowerCase()
    op === 'x' ? operator = multiply :
        op === '/' ? operator = divide :
            op === '+' ? operator = add :
                op === '-' ? operator = substract :
                    op === 'pangkat' ? operator = power :
                        op === "akar" ? operator = squareRoot :
                            console.log(this.innerHTML)
})

$('.hasilbtn').click(function () {
    let angka1 = $('.angka1').val()
    let angka2 = $('.angka2').val()
    let hasil = $('.hasil').val(metode(Number(angka1), Number(angka2), operator));
})
