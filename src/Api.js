async function requestCommute(TrainLine, StartStation, EndStation, ArrivalTime, ArrivalDate){
        const data = {TrainLine, StartStation, EndStation, ArrivalTime, ArrivalDate};
        const requestFull = {
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
            
          }
        console.log(requestFull);
        
        const response = await fetch('/commuterequest',requestFull);
        console.log(response);
        const response_data = await response.json();
        console.log(response_data);
        return response_data;
      }
export { requestCommute };