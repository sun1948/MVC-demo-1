import './1.css'
import $ from 'jquery'

const $add = $('#app1 #add1')
const $minus = $('#app1 #minus1')
const $mul = $('#app1 #mul2')
const $divide = $('#app1 #divide2')
const $number = $('#app1 #number')
const n = localStorage.getItem('n')
$number.text( n || 100)
$add.on('click', () => {
  let n = parseInt($number.text())
  n += 1
  $number.text(n)
  localStorage.setItem('n',n)
})
$minus.on('click', () => {
  let n = parseInt($number.text())
  n -= 1
  $number.text(n)
  localStorage.setItem('n',n)
})
$mul.on('click', () => {
  let n = parseInt($number.text())
  n *= 2
  $number.text(n)
  localStorage.setItem('n',n)
})
$divide.on('click', () => {
  let n = parseInt($number.text())
  n /= 2
  $number.text(n)
  localStorage.setItem('n',n)
})