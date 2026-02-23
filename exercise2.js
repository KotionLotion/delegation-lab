// exercise2.js
const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');
// -- Add a tag when Enter is pressed --
tagInput.addEventListener('keydown', function(event) {
 if (event.key !== 'Enter') return;
 const value = tagInput.value.trim();
 if (!value) return;
 // 1. Create a div with class "tag"
 const nDiv = document.createElement('div');
 nDiv.classList.add('tag');
 // 2. Set its innerHTML to include the label text
 // and a <span class="tag-remove">&times;</span>
 nDiv.innerHTML = `${value} <span class tag="tag-remove"&times;</span>`;

 // 3. Append the tag to tagContainer
  tagContainer.appendChild(nDiv);
 // 4. Clear the input
 tagInput.value = '';
});
 // -- Remove a tag via delegation --
 tagContainer.addEventListener('click', function (event) {

 // 1. Check if the clicked element is the remove button
 if (!event.target.matches('.tag-remove')) return;

 // 2. Remove the closest .tag element
 event.target.closest('.tag').remove();
 });