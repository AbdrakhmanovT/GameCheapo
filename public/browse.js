const getDeals = async (pageNumber) => {
  tbody.innerHTML = `<td colspan="5">
  <div class='d-flex justify-content-center'>
  <div class="spinner-border" style="width: 8rem; height: 8rem;" role="status">
  </div>
  </div>
  </td>`;
  const body = {
    pageNumber,
    storename: storenames.value,
    lowerPrice: 0,
    upperPrice: priceMax.value === '' ? 1000 : priceMax.value,
    steamworks: steamworks.checked ? 1 : 0,
    sortBy: sortBy.value,
  };
  const response = await fetch('./browse', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const deals = await response.json();
  const responseHbs = await fetch('dealsList.hbs');
  const resp = await responseHbs.text();
  const template = Handlebars.compile(resp);
  const html = template(deals);
  tbody.innerHTML = html;
};
const storenames = document.getElementById('storenames');
const priceMax = document.getElementById('max');
const sortBy = document.getElementById('sort-form');
const steamworks = document.getElementById('steamworks');
const browseButton = document.getElementById('browse-button');
const tbody = document.getElementsByTagName('tbody')[0];
const pageList = document.getElementById('pagingationlist');
const listButtons = [...document.getElementsByClassName('pagenum')];

pageList.addEventListener('click', (e) => {
  console.log(e.target.className);
  if (e.target.id === 'previous-page') {
    if (listButtons[0].textContent != '1') {
      listButtons.forEach((button) => {
        button.textContent = Number(button.textContent) - 5;
      });
    }
  }
  if (e.target.id === 'next-page') {
    listButtons.forEach((button) => {
      button.textContent = Number(button.textContent) + 5;
    });
  }

  if (e.target.className === 'page-link pagenum') {
    getDeals(Number(e.target.innerText) - 1);
  }
});

browseButton.addEventListener('click', async () => {
  getDeals(0);
});
