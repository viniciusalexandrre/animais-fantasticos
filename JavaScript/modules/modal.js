export default class Modal {
  constructor(){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
  //bind this ao callback para 
  // fazer referência ao objeto
  // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }
  
  // abre ou fechar o modal
   toggleModal() {
    this.containerModal.classList.toggle('ativo');
   }

   // adicionado o evento de toggle aoo modal
    eventToggleModal(event) {
      event.preventDefault();
      this.toggleModal();
    }
  
    // fecha o modal ao clicar do lado de fora
     cliqueForaModal(event) {
      if (event.target === this.containerModal) {
        this.toggleModal();
      }
    }

    // adicionado os eventos aos elementos do modal 
    addModalEvents() {
      botaoAbrir.addEventListener('click', this.toggleModal);
      botaoFechar.addEventListener('click', this.toggleModal);
      containerModal.addEventListener('click', this.cliqueForaModal);
    }
   
    init() {
      if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
        this.addModalEvents()
      }
      return this
    }
 }