console.log('I Live (in the console)');

function createObservable() {
    return {
        subscribers: [],
        projects: [],

        subscribe(func){
            this.subscribers.push(func);
        },

        addProject(project){
            this.projects.push(project);
        },

        removeProject(func){
            //remove obsever
            this.projects = this.projects.filter(project => project !== func);
        },
    
        unsubscribe(func){
            //remove obsever
            this.subscribers = this.subscribers.filter(observer => observer !== func);
        },
    
        notify(data){
            this.subscribers.forEach(observer => observer(data));
        }
    }
}
const observer = createObservable();

function Project(title, description, dueDate, tasks) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.tasks = tasks;
}

const form = document.querySelector('form')
console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newProject = new Project()
    console.log('new project ' + newProject + ' created');
    newProject.title = 'hello there'
    console.log(newProject);
    //look through form elements
    //create new project object with all the inputs of the form
})

