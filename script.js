//to do list

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		if (!task) {
			alert("Please fill out the task");
			return;
		}
		const task_el = document.createElement("div");
		task_el.classList.add("task");

		const task_content_el = document.createElement("div");
		task_content_el.classList.add("content"); 

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement("input");
		task_input_el.classList.add("text");
		task_input_el.type = "text";
		task_input_el.value = task;
		task_input_el.setAttribute("readonly", "readonly");

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement("div");
		task_actions_el.classList.add("actions");

		const task_edit_el = document.createElement("button");
		task_edit_el.classList.add("edit");
		task_edit_el.innerHTML = "edit";

		const task_delete_el = document.createElement("button");
		task_delete_el.classList.add("delete");
		task_delete_el.innerHTML = "delete";

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = "";

		task_edit_el.addEventListener('click', () => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
				task_edit_el.innerText = "Save";
			} else {
				task_input_el.setAttribute("readonly", "readonly");
				task_edit_el.innerText = "edit";
			}
		});

		task_delete_el.addEventListener('click', () => {
			list_el.removeChild(task_el);
		});
		
	});
});

//calculator


const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const remove = document.querySelector('.remove')
const equality = document.querySelector('.equality')
const resultPrevious = document.querySelector('.previous-action')
const resultCurrent = document.querySelector('.current-action')

let currentCalculation = ''
let previousCalculation = ''
let operation = undefined

const calculate = () => {
	let action
	if(!previousCalculation || !currentCalculation) {
		return
	}
	const previous = parseFloat(previousCalculation)
	const current = parseFloat(currentCalculation)

	if(isNaN(previous) || isNaN(current)) {
		return
	}

	switch (operation) {
		case '+':
			action = previous + current
			break;
		case '-':
			action = previous - current
			break;
			case 'X':
				if(current === 0) {
					clearResult()
					return
				}
				action = previous * current
				break;	
				case '÷':
					if(current === 0) {
						clearResult()
						return
					}
					action = previous / current
					break;	
					case '√':
						action = Math.pow(previous, 1/current)
						break;	
						case '%':
						action = previous / 100 * current
						break;	
						case '^':
						action = Math.pow(previous, current)
						break;	
						case 'log':
						action = Math.log(previous) / Math.log(current)
						break;	
			default:
			return
	}
	currentCalculation = action
	operation = undefined
	previousCalculation = ''
}

const chooseOperation = (operator) => {
	if(currentCalculation === '') {
		return
	}
	if(previousCalculation !== '') {
		const before = resultPrevious.innerText
		if(currentCalculation.toString() === '0' && before[before.length-1] === '÷') {
			clearResult()
			return
		}
		calculate()
	}
	operation = operator
	previousCalculation = currentCalculation
	currentCalculation = ''
}

const updateResult = () => {
	resultCurrent.innerText = currentCalculation
	if(operation != null) {
		resultPrevious.innerText = previousCalculation +operation
	} else {
		resultPrevious.innerText = ''
	}
	 
}
const addNumber = (number) => {
	if(number === '•') {
		if(currentCalculation.includes('.')) {
			return
		}
	  number = '.'
	}
	currentCalculation = currentCalculation.toString() + number.toString()
}

const removeNumber = () => {
	currentCalculation = currentCalculation.toString().slice(0, -1)
}

const clearResult = () => {
	 currentCalculation = ''
	 previousCalculation = ''
	 operation = undefined
}

numbers.forEach((number) => {
  number.addEventListener('click', () => {
	addNumber(number.innerText)
	updateResult()	
	})
});

remove.addEventListener('click', () => {
	removeNumber()
	updateResult()
});

remove.addEventListener('click', () => {
	removeNumber()
	updateResult()
});

operators.forEach((operator) => {
 operator.addEventListener('click', () => {
	chooseOperation(operator.innerText)
	updateResult()
 })
});

equality.addEventListener('click', () => {
	calculate()
	updateResult()
});
clear.addEventListener('click', () => {
	clearResult()
	updateResult()
});