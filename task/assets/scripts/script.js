const createColumnBtn = document.querySelector('#create-column');
let columns = document.querySelector('.wrapper-columns')

createColumnBtn.addEventListener('click',createColumn);
function createColumn(event) {
    let column = document.querySelector('.wrapper-columns__item').cloneNode(true);
    createColumnBtn.closest('.wrapper-columns__create').before(column)
}

function cloneCard(classCard, height) {
    let div = document.createElement('div');
    div.classList.add(classCard);
    div.style.height = height;
    return div;
}

function draggableCard(event) {
    let card = event.target.closest('.wrapper-columns__card');
    if (!card) return;

    let shiftX = event.clientX - card.getBoundingClientRect().left;
    let shiftY = event.clientY - card.getBoundingClientRect().top;
    let oldColumn = card.closest('.wrapper-columns__item');//remember columns
     
    
    card.after(cloneCard('old-card',card.offsetHeight + 'px'));
    card.classList.add('draggable')
    
    document.body.append(card);
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        card.style.left = pageX - shiftX + 'px';
        card.style.top = pageY - shiftY + 'px';
    }
    let currentDroppable = null;

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        card.hidden = true;
        card.classList.remove('d-flex');
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        card.classList.add('d-flex');
        card.hidden = false;
        
        if (!elemBelow) return
        
        let droppableBelow = elemBelow.closest('.wrapper-columns__item');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                if( currentDroppable.querySelector('.new-card')) {
                    currentDroppable.removeChild(currentDroppable.querySelector('.new-card'))
               }    
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                if( !currentDroppable.querySelector('.old-card') && !currentDroppable.querySelector('.new-card')) {
                    droppableBelow.append(cloneCard('new-card',card.offsetHeight + 'px'))
               }
            }
        }
    }
        
    document.addEventListener('pointermove',onMouseMove);
    
    function onMouseUp(event) {
        card.hidden = true;
        card.classList.remove('d-flex');
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        card.classList.add('d-flex');
        card.hidden = false;
         if (!elemBelow) return
        let droppableBelow = elemBelow.closest('.wrapper-columns__item');
        
         if (!(droppableBelow == oldColumn)) {
             droppableBelow.removeChild(droppableBelow.querySelector('.new-card'))
         }

         droppableBelow.append(card)
        
        oldColumn.removeChild(oldColumn.querySelector('.old-card'))
        
        document.removeEventListener('pointermove', onMouseMove);
        document.onpointerup = null;
        document.removeEventListener('pointerup', onMouseUp)
        

        card.classList.remove('draggable')
        
    }
    document.addEventListener('pointerup',onMouseUp);
    document.addEventListener('pointercancel', onMouseUp)
    

    document.ondragstart = function() {
        return false;
    }; 
    
}

document.addEventListener('pointerdown', draggableCard,{passive:true})