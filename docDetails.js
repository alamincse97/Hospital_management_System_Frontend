const getparams = async () => {
    const param = new URLSearchParams(window.location.search).get("doctorId");
    const response = await fetch(`https://smart-care-uup2.onrender.com/doctor/list/${param}`);
    
    if (response.ok) { // Check if the response status is 200-299
        const data = await response.json(); // Parse the JSON body
        return data; // Return the actual response data
    } else {
        console.error('Failed to fetch data:', response.status);
        return null; // Return null if the request failed
    }
};

// console.log(getparams())

const displayDetails = (doctor) => {
    console.log(doctor)
    const parent = document.getElementById("doc-details");
    const div = document.createElement("div");
    div.classList.add("doc-details-container");
    
    div.innerHTML = `
    <div class="doctor-img">
        <img src=${doctor.image} alt="Doctor Image" />
    </div>
    <div class="doc-info">
        <h1>${doctor?.user}</h1>
        ${doctor.specialization.map((item) => {
            return `<button class="doc-detail-btn">${item}</button>`;
        }).join('')}  <!-- Added .join('') to correctly render the buttons -->
        ${doctor.designation.map((item) => {
            return `<h4>${item}</h4>`;
        }).join('')}  <!-- Added .join('') to render h4 tags correctly -->

        <p class="w-50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          voluptates recusandae alias ex odio perferendis totam ip eluted is
          clus.
        </p>

        <h4>Fees: ${doctor.fee} BDT</h4>
        <button>Take Appointment</button>
      </div>
    `;
    
    parent.appendChild(div);
};

const showDoctorDetails = async () => {
    const doctor = await getparams(); // Await the result of the async function
    if (doctor) { // Check if we got the doctor data
        displayDetails(doctor);
    }
};

showDoctorDetails();
