var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all')

var tags = []

function render() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `
                    <li>
                        ${tag}
                        <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
                    </li>
`
    }

    content.appendChild(input)
    input.focus()
}

function removeTag(index) {
    tags.splice(index, 1)
    render()
}

render()


input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const newTag = input.value.trim();
        if (newTag !== '' && !tags.includes(newTag)) {
            tags.push(newTag);
            input.value = '';
            render();
        }
    }

})

btnRemoveAll.addEventListener('click', function () {
    tags = []
    render()
})
