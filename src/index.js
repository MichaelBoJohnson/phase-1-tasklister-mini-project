document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // deliverbles:
  //1.) user should be able to type a task into input field
  //2.) user should be able to click some form of submit button
  //3.) user should be able to see the task string that they provided appear in the DOM after the submit button has been activated
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      handleTodo(e.target.new_task_description.value);
    });

      function handleTodo(todo){
        let p = document.createElement('p')
        p.textContent = todo;
        document.querySelector('#list').appendChild(p)
        console.log(p)
      }

});
