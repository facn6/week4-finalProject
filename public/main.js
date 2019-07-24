
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
let colors;

// Get color

const getcolor = async () => {
const res = await fetch('../src/rgb.json');
colors = await res.json();
};

// FIlter color
const searchcolor = searchText => 
{
 // Get matches to current text input
 let matches = colors.filter(color => {
  const regex = new RegExp(`^${searchText}`, 'gi');
  return color.name.match(regex)
 });

 // Clear when input or matches are empty
 if (searchText.length === 0) {
  matches = [];
  matchList.innerHTML = '';
 }

 outputHtml(matches);
};

// Show results in HTML

const outputHtml = matches => {
 if (matches.length > 0) {
  const html = matches.map(
    match => `<div class="card card-body mb-1">
    <small> ${match.name} </small>
   </div>`
   )
.join('');
  matchList.innerHTML = html;
 }
};


window.addEventListener('DOMContentLoaded', getcolor);

search.addEventListener('input', () => searchcolor(search.value));
