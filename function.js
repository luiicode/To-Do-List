const form = document.getElementById('form');
const homework = document.getElementById('homework');
const list = document.getElementById('list-homework');

form.addEventListener('submit',
    function() {
        event.preventDefault();

        const Newhomework = homework.value.trim();

        if (Newhomework != '') {
            
            const Newlist = document.createElement('li');
            Newlist.textContent = Newhomework;
            Newlist.innerHTML = `${Newhomework}<button class="delate">X</button>`;
            list.appendChild(Newlist);

            homework.value = '';

            const delate = Newlist.querySelector('.delate');

            delate.addEventListener('click', 
                function() {

                    list.removeChild(Newlist);

                }
            )

        }

    }
)
