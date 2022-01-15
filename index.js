const taskContainer = document.querySelector('.task__container');

const globalStorage = [];

const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4 mt-5" id=${taskData.id}>
<div class="card text-center">
    <div class="card-header d-flex justify-content-end gap-3">
        <button type="button" class="btn btn-outline-success">
            <i class="far fa-edit"></i>
        </button>
        <button type="button" class="btn btn-outline-danger">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
    <div class="card-body">
      <img src=${taskData.imageurl}
      class="card-img-top" alt="...">
      <h5 class="card-title">${taskData.Tasktitle}</h5>
      <p class="card-text">${taskData.TaskDescription}</p>
      <a href="#" class="btn btn-primary">${taskData.TaskType}</a>
    </div>
    <div class="card-footer">
        <button type="button" class="btn btn-outline-primary">Open task</button>
    </div>
  </div>
</div>`;

const loadData = () => {
    const getCardData = LocalStorage.getItem('To-Do List');
    const {cards} = JSON.parse(getCardData);
    
    cards.forEach((cardObject) => {
        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));

        globalStorage.push(cardObject);

    })
};

const saveChanges = () => {
  const taskData = {
      id:`${Date.now()}`,//Unique id
      imageurl: document.getElementById('imageurl').value,
      tasktitle:document.getElementById('Tasktitle').value,
      taskType:document.getElementById('TaskType').value,
      taskDescription:document.getElementById('TaskDescription').value,
  };
  
  taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

  globalStorage.push(taskData);

  localStorage.setItem('To-Do List',JSON.stringify({Cards:globalStorage}));
};


