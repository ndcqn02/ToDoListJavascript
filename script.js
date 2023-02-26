$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

const app = {
    tasks: [
        {
            name: "Practice javascript",
        },
        {
            name: "Slide for maintain computer",
        },
        {
            name: "Listen English",
        },
    ],
   
    render() {
        const htmls = app.tasks.map((tasks, index) => {
            return `<li class="task-list-item">
                            <label>
                                <input type="checkbox" autocomplete="off" id="${index}" onclick="app.methods.doneTask(${index})" class="input-checkbox-task">
                                <span class="task-name">${tasks.name}</span>
                            </label>
                            <span class="delete-btn" onclick="app.methods.deleteTask(${index})" title="Delete Task"></span>
                    </li> `;
            })
          
        $('.task-list').innerHTML = htmls.join('')  
    },  
    methods: {
        addTask: function () {
        $(".task-input").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
            const taskName = $(".task-input").value;
            app.tasks.push({ name: taskName });
            app.render();
            }
        });
        },
        doneTask: function(id) {
            const el = $(`[id='${id}']`)
            if (el.checked == 1){
                console.log(el.nextElementSibling)
                el.nextElementSibling.style.cssText = `text-decoration: line-through rgba(255, 255, 255, 0.8);
                                                        color: rgba(255, 255, 255, 0.5);`
                                                        
                 // trả về nút anh em ruột
            } else{
                el.nextElementSibling.style.cssText = `text-decoration: none;
                                                        color: white;`
                
            } 
        },
        deleteTask: function(id){
            if(confirm("Are you sure you want delete this task?")){
                console.log(app.tasks.length)
                app.tasks.splice(id, 1)
                app.render()
            }
        }
        
    },
    start: function () {
        this.methods.addTask();
        this.render();
        
    },
};

app.start();


