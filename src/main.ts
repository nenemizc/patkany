import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import { ElectricRats } from './ElectricRats';

const rats: ElectricRats[] = [];

document.getElementById('form')?.addEventListener('submit',(e:SubmitEvent) => {
  e.preventDefault();
  const form = document.getElementById('form') as HTMLFormElement;
  const name = new FormData(form).get('nameInput');
  const atk = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  const hp = Math.floor(Math.random() * (100 - 50 + 1) + 50);
  rats.push(new ElectricRats(name!.toString(),atk,hp));

  const here = document.getElementById('cards');

  here!.textContent="";

  for (const data of rats){
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('mb-3');
    card.classList.add('ms-3');
    card.style.width = "30%";

    const body = document.createElement('div');
    body.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent=data.name;

    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent=`ATK: ${data.atk}\nHP: ${data.hp}`

    body.appendChild(title);
    body.appendChild(p);
    card.appendChild(body);
    here?.appendChild(card);
  }

  form.reset();
})
