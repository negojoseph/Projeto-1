function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem tag
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de joseph monteiro de perfil olhando para esquerda, foto preta e branca com barba e fundo laranja."
    )
  } else {
    //se não tiver light mode, adicionar a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "foto de joseph monteiro de perfil olhando para direita, foto preta e branca com barba e fundo laranja."
    )
  }
}
