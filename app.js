const loadServices = () => {
    fetch("https://testing-8az5.onrender.com/services/")
    .then((res) => res.json())
    .then((data) => displayService(data))
    .catch((err) => console.log(err));
};

const displayService = (services) => {
    // console.log(services);
    services.forEach((service) => {
        const parent = document.getElementById("service-container");
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="card shadow h-100">
                <div class="ratio ratio-16x9">
                  <img
                    src=${service.image}
                    class="card-img-top"
                    loading="lazy"
                    alt="..."
                  />
                </div>
                <div class="card-body p-3 p-xl-5">
                  <h3 class="card-title h5">${service.name}</h3>
                  <p class="card-text">
                    ${service.description.slice(0, 140)}
                  </p>
                  <a href="#" class="btn btn-primary">Details</a>
                </div>
        `
        parent.appendChild(li)
    });
};

const loadDoctors = (search) => {
  fetch(`https://testing-8az5.onrender.com/doctor/list/?search=${search ? search : " "}`)
  .then((res) => res.json())
  .then((data) => displyDoctors(data?.results));
};

const displyDoctors = (doctors) => {
  doctors?.forEach((doctor) => {
    const parent = document.getElementById("doctors");
    const div = document.createElement("div");
    div.classList.add("doc-card");
    div.innerHTML = `
    <img class="doc-img" src=${doctor.image} alt="" />
              <h4>${doctor?.full_name}</h4>
              <h6>${doctor?.designation[0]}</h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus incidunt laboriosam cupiditate nores
              </p>
              <p>
              ${doctor?.specialization?.map((item) => {
                return `<button>${item}</button>`;
              })}
              </p>
              <button>Details</button>
    `;
    parent.appendChild(div);
  });
};

const loadDesignation = () => {
  fetch("https://testing-8az5.onrender.com/doctor/designation/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const parent = document.getElementById("drop-deg");
      const li = document.createElement("li");
      li.classList.add("dropdown-item");
      li.innerText = item?.name;
      parent.appendChild(li);
    });
  });
};

const loadSpecialization = () => {
  fetch("https://testing-8az5.onrender.com/doctor/specialization/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const parent = document.getElementById("drop-spe");
      const li = document.createElement("li");
      li.classList.add("dropdown-item");
      li.innerText = item?.name;
      parent.appendChild(li);
    });
  });
};

const handleSearch = () => {
  const value = document.getElementById("search").value;
  console.log(value);
};


loadServices();
loadDoctors();
loadDesignation();
loadSpecialization();
handleSearch();
