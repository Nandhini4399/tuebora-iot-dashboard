export const fetchDeviceData = () => {
    return new Promise((resolve, reject) => {
       fetch('http://localhost:3001/devices')
            .then((response) => resolve(response.json()))
            .catch((err) => reject(err));
      //  setTimeout(() => {
      //    fetch('http://localhost:3001/devices')
      //       .then((response) => resolve(response.json()))
      //       .catch((err) => reject(err));
      //  }, 5000);
    });
}