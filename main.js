const add = document.querySelector('#addButton');
let container = document.querySelector('.tasks');
const input = document.querySelector('#input');



add.addEventListener('click', () =>{
   const task = document.createElement('div');
  const checkbox = document.createElement('input');
  const remove = document.createElement('button');
  let content = document.createElement('span');
  const string = document.createElement('span');
  const popUp = document.querySelector('.popUp')
  const popUpbtn = document.querySelector('.popUp button')
  
  container.style.opacity = 1;
  string.classList.add('string');
  
  if (input.value === '') {
    popUp.style.visibility = 'visible';
    popUp.style.transform = 'translate(-50%, -50%) scale(1.5)';
    
    popUpbtn.addEventListener('click', () => {
      popUp.style.visibility = 'hidden';
       })
  } else {
    task.classList.add('taskColumn');
    remove.append('delete')
    remove.classList.add('remove');
    checkbox.type = 'checkbox';
    container.append(task);
    content.append(checkbox)
    content.append(input.value);
    alert(`You have successfully added ${content.textContent} to your tasks`);

  }

 
checkbox.addEventListener("change", () => {
  if (checkbox.checked){
    content.classList.add('line');
    task.classList.add('marked');
    alert(`You have done ${content.textContent}`)
  } else {
    content.classList.remove('line');
    task.classList.remove('marked')
  }
});
task.append(content);
task.append(remove);
input.value = '';

remove.addEventListener("click", () => {
  task.remove(checkbox)
  alert(`You have deleted ${content.textContent} from your tasks`)
})
  
});

