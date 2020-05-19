import './3.css'
import $ from 'jquery'

const $box = $('#app3 #box')
$box.on('mouseenter',()=>{
  $box.toggleClass('active')
})