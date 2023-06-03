const metode = (num1, num2) => {
    return Math.round(num1 / num2 ** 2)
}
console.log($('.operator').text())
$('.hasilbtn').click(function () {
    let angka1 = $('.angka1').val()
    let angka2 = $('.angka2').val()
    let hasil = $('.hasil').val(metode(angka1, angka2))
})
