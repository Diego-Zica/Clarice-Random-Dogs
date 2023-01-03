function ramdonDogImage() {
  let endpoint = 'https://dog.ceo/api/breeds/image/random';
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        return new Error('Requisição Falhou');
      }

      return response.json();
    })
    .then(data => {
      let ramdomImage = document.getElementById('img-dog');
      ramdomImage.setAttribute('src', data.message);
      console.log('link da imagem: ' + data.message);
      console.log(ramdomImage);
    })
    .catch(erro => {
      console.log('Requisição Falhou com o erro ' + erro);
    });
}

let imageButton = document.getElementById('btn-img');
imageButton.onclick = () => {
  ramdonDogImage();
};
