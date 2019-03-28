// New Element

let login = document.querySelector('#login'),
  logo = document.createElement('IMG'),
  logout = document.querySelector('#logout'),
  a1 = document.createElement('a'),
  logoutImg = document.createElement('IMG'),
  trapeze = document.createElement('span')


logo.setAttribute('src', '' + chrome.extension.getURL('img/logo-sup-internet-mobile.png') + '')
logo.setAttribute('alt', 'logo')

if (login) {
  if (window.location != 'http://intranet.supinternet.fr/?action=forgot_pwd' && window.location != 'http://intranet.supinternet.fr/index.php?action=forgot_pwd') {
    document.querySelector('.login_box').appendChild(document.createElement('h1').appendChild(document.createTextNode('INTRANET')))
  }
  login.appendChild(logo)
} else if(window.location != 'http://intranet.supinternet.fr/?action=presence' && window.location != 'http://intranet.supinternet.fr/index.php?action=presence'){
  let presence = document.createElement('a')

  presence.innerHTML = 'V'
  presence.id = 'presence'
  presence.setAttribute('href', '?action=presence')
  document.body.appendChild(presence)

  presence.addEventListener('mouseover', () => {
    setTimeout(() => {
      presence.innerHTML = 'Valider ma présence'
    }, 200);
  })
  presence.addEventListener('mouseleave', () => {
    presence.innerHTML = 'V'
  })
}

if (logout) {
  a1.setAttribute('href', '?action=logout')
  logoutImg.setAttribute('src', '' + chrome.extension.getURL('img/logout.png') + '')
  logoutImg.setAttribute('alt', 'logout')

  a1.appendChild(logoutImg)
  logout.appendChild(a1)
}

trapeze.id = 'trapeze'



// Canvas
let sections = document.querySelectorAll('.section')

sections.forEach(section => {
  let title = section.querySelector('cufontext').innerHTML
  section.innerHTML = title
})


// Meta viewport

let view = document.createElement('meta')
view.setAttribute('name', 'viewport')
view.setAttribute('content', 'width=device-width, initial-scale=1.0')

document.querySelector('head').appendChild(view)

if (window.location == 'http://intranet.supinternet.fr/index.php?action=user_assiduity' || window.location == 'http://intranet.supinternet.fr/?action=user_assiduity') {

}

// Burger

if (window.innerWidth <= '414') {

  document.querySelector('#v_card').appendChild(trapeze)

  let input = document.createElement('input'),
    label = document.createElement('label'),
    span1 = document.createElement('span'),
    span2 = document.createElement('span'),
    span3 = document.createElement('span')

  input.id = 'checkBurger'
  input.setAttribute('type', 'checkbox')
  input.setAttribute('class', 'checkBurger')

  label.setAttribute('for', 'checkBurger')
  label.setAttribute('class', 'menuBurger')

  span1.setAttribute('class', 'spinner diagonal1')
  span2.setAttribute('class', 'spinner horizontal')
  span3.setAttribute('class', 'spinner diagonal2')

  label.appendChild(span1)
  label.appendChild(span2)
  label.appendChild(span3)
  document.querySelector('body:first-of-type').appendChild(input)
  document.querySelector('body:first-of-type').appendChild(label)

  document.querySelector('#sidebar').classList.add('none')


  label.addEventListener('click', () => {
    if (document.querySelector('.none') != null) {
      document.querySelector('#sidebar').classList.add('block')
      document.querySelector('#sidebar').classList.remove('none')
    } else {
      document.querySelector('#sidebar').classList.remove('block')
      document.querySelector('#sidebar').classList.add('none')
    }
  })


  // Semestres

  let semestre = document.querySelector('#breadcrumbs-one')

  if (semestre) {
    document.querySelector('#breadcrumbs-one li:nth-child(1) a').innerHTML = 'S1'
    document.querySelector('#breadcrumbs-one li:nth-child(2) a').innerHTML = 'S2'
    document.querySelector('#breadcrumbs-one li:nth-child(3) a').innerHTML = 'S3'
    document.querySelector('#breadcrumbs-one li:nth-child(4) a').innerHTML = 'S4'
    document.querySelector('#breadcrumbs-one li:nth-child(5) a').innerHTML = 'S5'
    document.querySelector('#breadcrumbs-one li:nth-child(6) a').innerHTML = 'S6'
  }
}

if (document.querySelector('#content_box')) {

  let footer = document.createElement('footer'),
    contentFooter = document.createElement('img'),
    linkSup = document.createElement('a')

  contentFooter.setAttribute('src', '' + chrome.extension.getURL('img/footer-all.png') + '')
  contentFooter.setAttribute('alt', 'footer')
  linkSup.setAttribute('href', 'https://supinternet.fr/')

  linkSup.appendChild(contentFooter)
  footer.appendChild(linkSup)
  document.querySelector('#content_box').appendChild(footer)

}