import './2.css'
import $ from 'jquery'


const $tabBar = $('.tab-bar')
const $tabContent = $('.tab-content')
$tabBar.on('click', 'li', e => {
  const index = $(e.currentTarget).index()
  $tabBar.children().eq(index)
    .addClass('active')
    .siblings().removeClass('active')

  $tabContent.children().eq(index)
    .addClass('active')
    .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')
$tabContent.children().eq(0).trigger('click')
