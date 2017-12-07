

class View {
  render(){
    this.renderNodes(3);
  }

  renderNodes(count){
    let visNodes = document.getElementById('vis-nodes');
    for(let i = 0; i < count; i++){
      let newNode = document.createElement('div');
      newNode.classList.add('vis-node');
      visNodes.appendChild(newNode);
    }
  }

  bindNodeData(data){
    let visNodes = document.getElementById('vis-nodes');
    let nodeList = visNodes.childNodes;
    if(data.length != nodeList.length){
      throw "data length must equal generated nodes length";
    }

  }

  static updateTitle(title){
    let titleNode = document.getElementById('vis-title');
    titleNode.innerHTML = title;
  }

}

class Model {

}

class Controller {
  constructor(){
    document.addEventListener('DOMContentLoaded', () => {
      this.view = new View();
      this.model = new Model();
      this.render();
    });
  }

  render(){
    this.view.render();
    View.updateTitle('test title raw');
  }

}

let controller = new Controller();