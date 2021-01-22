const ERROR = `
  <div class="col-md-4 m m4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Opps...!</h5>
        <p class="card-text">
          Could not get the data <br>
          Please check your internet connection and refresh again.
        </p>
      </div>
    </div>
  </div>
`;
const replace_medicine = document.getElementById('replace-medicine');
const replace_disease = document.getElementById('replace-disease');


const getData = async (url = '') => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    return err;
  }
};

getData('/diseases/recent')
  .then((data) => {
    let temp1 = '';
    for (let i = 0; i < data.length; i++) {
      let obj = data[i];
      temp1 += `
        <div class="col-md-4 m m4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${obj.name}</h5>
              <p class="card-text">${obj.description.substring(0, 100)} ...</p>
            </div>
          </div>
        </div>
      `;
    }
    let temp2 = `
      <div class="col-md-4 m4"  style="display: flex; justify-content: center; align-items: center;">
        <div class="">
          <div class="">
            <a href="/medicines" style="color: #141E30;">
              <h2>more</h2>
            </a>
          </div>
        </div>
      </div>
    `;
    replace_disease.innerHTML = `<div class="row" style="margin: 10px auto">${temp1}${temp2}</div>`;
  })
  .catch((err) => {
    replace_disease.innerHTML = ERROR;
    console.log(`disease error`);
  });

getData('/medicines/recent')
  .then((data) => {
    let temp2 = '';
    for (let i = 0; i < data.length; i++) {
      let obj = data[i];
      let temp1 = '';
      for (let j = 0; j < 3 && j < obj.diseases.length; j++) {
        temp1 += `
          <span class="alert alert-dark" style="padding: 1px 5px; border-radius: 2px !important;">${obj.diseases[j]}</span>
        `;
      }
      temp2 += `
        <div class="col-md-4 m m4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${obj.name}</h5>
              <p class="card-text">${obj.description.substring(0, 100)}... </p>
              ${temp1}
            </div>
          </div>
        </div>
      `;
    }
    replace_medicine.innerHTML = `
      <div class="row" style="margin: 10px auto">
        ${temp2}
        <div class="col-md-4 m4"  style="display: flex; justify-content: center; align-items: center;">
          <div class="">
            <div class="">
              <a href="/medicines" style="color: #141E30;">
                <h2>more</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  })
  .catch((err) => {
    replace_medicine.innerHTML = ERROR;
    console.log(`medicine error`);
  });
