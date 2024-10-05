const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("doctorId");
    fetch(`https://smart-care-uup2.onrender.com/doctor/list/${param}`)
    .then((res) => res.json())
    .then((data) => displayDetails(data));
};

const displayDetails = (doctor) => {
    
}
getparams();